import { t } from "./i18n";
import { STORAGE } from "./paths";

// sound — a dark trap loop synthesized live with web audio (no audio files).
// 140 bpm, F# minor, 4-bar progression: F#m F#m D E.
// the kick pulse is exposed through getPulse() so shaders can breathe with it.

const BPM = 140;
const STEP = 60 / BPM / 4; // one 16th note
const STEPS = 64; // 4 bars
const LOOKAHEAD = 0.12; // seconds scheduled ahead of the clock
const TICK = 25; // scheduler interval, ms
const MASTER_LEVEL = 0.8;

const ROOTS = [30, 30, 26, 28]; // 808 root per bar (midi): F#1 F#1 D1 E1
const CHORDS = [
  [54, 57, 61],
  [54, 57, 61],
  [50, 54, 57],
  [52, 56, 59],
];
// bell line over 4 bars: [step, midi]
const BELL = [
  [0, 78],
  [6, 81],
  [12, 85],
  [22, 83],
  [32, 78],
  [38, 81],
  [44, 76],
  [52, 73],
  [58, 76],
];

const midiToHz = (m) => 440 * Math.pow(2, (m - 69) / 12);

let ctx = null;
let master, drums, verbSend, delaySend, analyser, noiseBuffer, waveData;
let timer = null;
let step = 0;
let nextTime = 0;
let running = false;
const kicks = [];

function readStored() {
  try {
    return sessionStorage.getItem(STORAGE.sound);
  } catch {
    return null;
  }
}

function store(value) {
  try {
    sessionStorage.setItem(STORAGE.sound, value);
  } catch {
    // private mode — the choice lasts for this page only
  }
}

// graph

function buildGraph() {
  ctx = new (window.AudioContext || window.webkitAudioContext)();

  master = ctx.createGain();
  master.gain.value = 0;

  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -14;
  comp.ratio.value = 4;
  comp.attack.value = 0.004;
  comp.release.value = 0.2;

  analyser = ctx.createAnalyser();
  analyser.fftSize = 256;
  waveData = new Uint8Array(analyser.fftSize);

  master.connect(comp).connect(analyser).connect(ctx.destination);

  drums = ctx.createGain();
  drums.gain.value = 0.9;
  drums.connect(master);

  // reverb — generated impulse, long dark tail
  const reverb = ctx.createConvolver();
  reverb.buffer = impulse(3.2, 2.4);
  const verbTone = ctx.createBiquadFilter();
  verbTone.type = "lowpass";
  verbTone.frequency.value = 2400;
  verbSend = ctx.createGain();
  verbSend.gain.value = 0.9;
  verbSend.connect(reverb).connect(verbTone).connect(master);

  // dotted-eighth echo for the bell
  const delay = ctx.createDelay(1);
  delay.delayTime.value = STEP * 3;
  const feedback = ctx.createGain();
  feedback.gain.value = 0.38;
  const delayTone = ctx.createBiquadFilter();
  delayTone.type = "lowpass";
  delayTone.frequency.value = 1800;
  delaySend = ctx.createGain();
  delaySend.connect(delay);
  delay.connect(delayTone).connect(feedback).connect(delay);
  delayTone.connect(master);
  delayTone.connect(verbSend);

  noiseBuffer = makeNoise(2);
  rainBed();
}

function impulse(seconds, decay) {
  const length = Math.floor(ctx.sampleRate * seconds);
  const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
  for (let c = 0; c < 2; c++) {
    const data = buffer.getChannelData(c);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
  }
  return buffer;
}

function makeNoise(seconds) {
  const length = Math.floor(ctx.sampleRate * seconds);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
  return buffer;
}

function noiseSource() {
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer;
  return src;
}

// soft clip for the 808 — adds harmonics so the bass reads on laptop speakers
function saturationCurve(amount) {
  const n = 1024;
  const curve = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * 2 - 1;
    curve[i] = Math.tanh(amount * x) / Math.tanh(amount);
  }
  return curve;
}

// rain on a window: always-on filtered noise under everything
function rainBed() {
  const src = noiseSource();
  src.loop = true;
  const band = ctx.createBiquadFilter();
  band.type = "bandpass";
  band.frequency.value = 1400;
  band.Q.value = 0.4;
  const gain = ctx.createGain();
  gain.gain.value = 0.022;
  src.connect(band).connect(gain).connect(master);
  gain.connect(verbSend);
  src.start();
}

// voices

function kick(time) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.setValueAtTime(165, time);
  osc.frequency.exponentialRampToValueAtTime(44, time + 0.09);
  gain.gain.setValueAtTime(1, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.38);
  osc.connect(gain).connect(drums);
  osc.start(time);
  osc.stop(time + 0.4);
  kicks.push(time);
  if (kicks.length > 8) kicks.shift();
}

function bass808(time, midi, length, glideTo = null) {
  const freq = midiToHz(midi);
  const osc = ctx.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq * 1.5, time);
  osc.frequency.exponentialRampToValueAtTime(freq, time + 0.04);
  if (glideTo) {
    osc.frequency.setValueAtTime(freq, time + length * 0.55);
    osc.frequency.exponentialRampToValueAtTime(midiToHz(glideTo), time + length * 0.8);
  }

  const shaper = ctx.createWaveShaper();
  shaper.curve = saturationCurve(3.2);
  const tone = ctx.createBiquadFilter();
  tone.type = "lowpass";
  tone.frequency.value = 900;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.55, time + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.001, time + length);

  osc.connect(shaper).connect(tone).connect(gain).connect(drums);
  osc.start(time);
  osc.stop(time + length + 0.05);
}

function clap(time) {
  const src = noiseSource();
  const band = ctx.createBiquadFilter();
  band.type = "bandpass";
  band.frequency.value = 1700;
  band.Q.value = 0.9;
  const gain = ctx.createGain();
  // three quick hits then the tail — the classic clap smear
  gain.gain.setValueAtTime(0.0001, time);
  [0, 0.011, 0.022].forEach((offset) => {
    gain.gain.setValueAtTime(0.5, time + offset);
    gain.gain.exponentialRampToValueAtTime(0.12, time + offset + 0.009);
  });
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.24);
  src.connect(band).connect(gain);
  gain.connect(drums);
  const send = ctx.createGain();
  send.gain.value = 0.35;
  gain.connect(send).connect(verbSend);
  src.start(time, Math.random());
  src.stop(time + 0.3);

  const body = ctx.createOscillator();
  body.type = "triangle";
  body.frequency.setValueAtTime(200, time);
  body.frequency.exponentialRampToValueAtTime(140, time + 0.08);
  const bodyGain = ctx.createGain();
  bodyGain.gain.setValueAtTime(0.25, time);
  bodyGain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
  body.connect(bodyGain).connect(drums);
  body.start(time);
  body.stop(time + 0.12);
}

function hat(time, velocity) {
  const src = noiseSource();
  const high = ctx.createBiquadFilter();
  high.type = "highpass";
  high.frequency.value = 7800;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.16 * velocity, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);
  const pan = ctx.createStereoPanner();
  pan.pan.value = 0.25;
  src.connect(high).connect(gain).connect(pan).connect(drums);
  src.start(time, Math.random());
  src.stop(time + 0.06);
}

function pad(time, notes, length) {
  notes.forEach((midi, i) => {
    const freq = midiToHz(midi);
    const tone = ctx.createBiquadFilter();
    tone.type = "lowpass";
    tone.frequency.setValueAtTime(420, time);
    tone.frequency.linearRampToValueAtTime(900, time + length * 0.5);
    tone.frequency.linearRampToValueAtTime(420, time + length);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.028, time + 0.9);
    gain.gain.setValueAtTime(0.028, time + length - 0.4);
    gain.gain.linearRampToValueAtTime(0.0001, time + length + 0.6);
    const pan = ctx.createStereoPanner();
    pan.pan.value = (i - 1) * 0.45;
    tone.connect(gain).connect(pan);
    pan.connect(master);
    pan.connect(verbSend);

    [-9, 9].forEach((cents) => {
      const osc = ctx.createOscillator();
      osc.type = "sawtooth";
      osc.frequency.value = freq;
      osc.detune.value = cents;
      osc.connect(tone);
      osc.start(time);
      osc.stop(time + length + 0.7);
    });
  });
}

// fm bell — dark, glassy, sits in the delay
function bell(time, midi) {
  const freq = midiToHz(midi);
  const carrier = ctx.createOscillator();
  carrier.frequency.value = freq;
  const modulator = ctx.createOscillator();
  modulator.frequency.value = freq * 3.5;
  const index = ctx.createGain();
  index.gain.setValueAtTime(freq * 2.2, time);
  index.gain.exponentialRampToValueAtTime(1, time + 1.2);
  modulator.connect(index).connect(carrier.frequency);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.09, time + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 1.8);
  carrier.connect(gain);
  gain.connect(master);
  gain.connect(delaySend);
  gain.connect(verbSend);

  carrier.start(time);
  modulator.start(time);
  carrier.stop(time + 1.9);
  modulator.stop(time + 1.9);
}

// sequencer

function scheduleStep(index, time) {
  const bar = Math.floor(index / 16);
  const s = index % 16;
  const swing = s % 2 ? STEP * 0.07 : 0;
  const at = time + swing;

  // kick + 808 lock together
  if (s === 0 || s === 10) kick(at);
  if (s === 0) bass808(at, ROOTS[bar], STEP * 7);
  if (s === 7) bass808(at, ROOTS[bar], STEP * 3);
  if (s === 10) {
    const next = ROOTS[(bar + 1) % 4];
    bass808(at, ROOTS[bar], STEP * 6, bar % 2 ? next + 12 : null);
  }

  // half-time clap on beat 3
  if (s === 8) clap(at);

  // hats: eighths, with 32nd rolls closing every other bar
  const roll = bar % 2 === 1 && s >= 12;
  if (roll) {
    hat(at, 0.55 + (s - 12) * 0.12);
    hat(at + STEP / 2, 0.45 + (s - 12) * 0.12);
  } else if (s % 2 === 0) {
    hat(at, s % 4 === 0 ? 1 : 0.6);
  } else if (bar === 2 && s === 5) {
    // triplet stutter in bar 3
    hat(at, 0.5);
    hat(at + STEP / 3, 0.4);
    hat(at + (STEP * 2) / 3, 0.35);
  }

  if (s === 0) pad(at, CHORDS[bar], STEP * 16);

  BELL.forEach(([bellStep, midi]) => {
    if (bellStep === index) bell(at, midi);
  });
}

function scheduler() {
  while (nextTime < ctx.currentTime + LOOKAHEAD) {
    scheduleStep(step, nextTime);
    nextTime += STEP;
    step = (step + 1) % STEPS;
  }
}

function startSequencer() {
  if (timer) return;
  step = 0;
  nextTime = ctx.currentTime + 0.08;
  scheduler();
  timer = setInterval(scheduler, TICK);
}

function stopSequencer() {
  clearInterval(timer);
  timer = null;
  kicks.length = 0;
}

// public api

export function isOn() {
  return running;
}

export async function enable() {
  if (!ctx) buildGraph();
  running = true;
  store("on");
  updateUI();
  try {
    await ctx.resume();
  } catch {
    // resume needs a user gesture — armResume() retries on the next one
  }
  if (ctx.state !== "running") {
    armResume();
    return;
  }
  startSequencer();
  master.gain.cancelScheduledValues(ctx.currentTime);
  master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
  master.gain.linearRampToValueAtTime(MASTER_LEVEL, ctx.currentTime + 1.4);
  window.dispatchEvent(new CustomEvent("sound:change", { detail: { on: true } }));
}

export function disable() {
  running = false;
  store("off");
  updateUI();
  window.dispatchEvent(new CustomEvent("sound:change", { detail: { on: false } }));
  if (!ctx) return;
  fadeOut(0.4).then(() => {
    if (running) return;
    stopSequencer();
    ctx.suspend();
  });
}

export function toggle() {
  return running ? disable() : enable();
}

function fadeOut(seconds) {
  if (!ctx || ctx.state !== "running") return Promise.resolve();
  master.gain.cancelScheduledValues(ctx.currentTime);
  master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
  master.gain.linearRampToValueAtTime(0, ctx.currentTime + seconds);
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000 + 30));
}

// kick envelope (0–1) plus overall loudness — read every frame by visuals
export function getPulse() {
  if (!ctx || !running || ctx.state !== "running") return { kick: 0, energy: 0 };

  const now = ctx.currentTime;
  let kickLevel = 0;
  for (const time of kicks) {
    if (time <= now) kickLevel = Math.max(kickLevel, Math.exp(-(now - time) * 7));
  }

  analyser.getByteTimeDomainData(waveData);
  let sum = 0;
  for (let i = 0; i < waveData.length; i++) {
    const v = (waveData[i] - 128) / 128;
    sum += v * v;
  }
  const energy = Math.min(1, Math.sqrt(sum / waveData.length) * 3);

  return { kick: kickLevel, energy };
}

// autoplay policy: a page opened with sound "on" waits for the first gesture
function armResume() {
  const resume = () => {
    window.removeEventListener("pointerdown", resume);
    window.removeEventListener("keydown", resume);
    if (running) enable();
  };
  window.addEventListener("pointerdown", resume, { once: true });
  window.addEventListener("keydown", resume, { once: true });
}

// ui — toggle injected next to the language switch on every page

let button = null;

function updateUI() {
  if (!button) return;
  button.classList.toggle("is-on", running);
  button.setAttribute("aria-pressed", String(running));
}

function mountToggle() {
  const slot = document.querySelector("nav .nav-location");
  if (!slot || slot.querySelector(".sound-toggle")) return;

  button = document.createElement("button");
  button.type = "button";
  button.className = "type-mono sound-toggle";
  button.setAttribute("aria-label", t("sound.toggle"));
  button.innerHTML = `
    <span class="sound-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <span class="sound-label">${t("sound.label")}</span>
  `;
  button.addEventListener("click", toggle);
  slot.prepend(button);
  updateUI();
}

// page lifecycle

document.addEventListener("visibilitychange", () => {
  if (!ctx || !running) return;
  if (document.hidden) ctx.suspend();
  else ctx.resume();
});

// the page transition fades the loop out before navigating
window.addEventListener("page:leave", () => fadeOut(0.35));

mountToggle();
if (readStored() === "on") enable();
