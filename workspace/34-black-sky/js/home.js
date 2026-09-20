import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { t } from "./i18n";
import { asset } from "./paths";
import { whenPreloaderDone } from "./ready";
import { getPulse } from "./sound";
import { setSkylineActive } from "./skyline";
import { TRACKS, trackArt, trackNumber, trackUrl } from "./tracks";

gsap.registerPlugin(ScrollTrigger, SplitText);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const EXPO = "expo.out";

// release: 13 nov 2026, 00:00 in mexico city (utc-6)
const RELEASE = Date.UTC(2026, 10, 13, 6, 0, 0);

// markup built from data — runs before any split or trigger measures the page
buildInlineImages();
buildTrackRail();
buildMarquee();

document.addEventListener("DOMContentLoaded", () => {
  document.fonts.ready.then(() => {
    initHeroIntro();
    initCoverTilt();
    initCoverPulse();
    initHeroExit();
    initManifesto();
    initTrackRail();
    initArtist();
    initMarquee();
    initCountdown();
    ScrollTrigger.refresh();
  });
});

// markup

function buildInlineImages() {
  document.querySelectorAll(".inline-img[data-img]").forEach((chip) => {
    chip.style.backgroundImage = `url("${asset(chip.dataset.img)}")`;
    chip.setAttribute("aria-hidden", "true");
  });
}

function buildTrackRail() {
  const rail = document.querySelector(".home-tracks-rail");
  if (!rail) return;

  rail.innerHTML = TRACKS.map((track, index) => {
    const feat = track.feat ? `<p class="type-mono track-card-feat">feat. ${track.feat}</p>` : "";
    return `
      <a class="track-card" href="${trackUrl(track)}" data-cursor="${t("cursor.view")}">
        <span class="track-card-num" aria-hidden="true">${trackNumber(index)}</span>
        <figure class="track-card-media">
          <img src="${trackArt(index)}" alt="" loading="lazy" />
        </figure>
        <div class="track-card-info">
          <div>
            <h3>${track.title}</h3>
            ${feat}
          </div>
          <p class="type-mono track-card-meta">
            <span>${track.length}</span><span>${track.bpm} BPM</span><span>${track.key}</span>
          </p>
        </div>
        <p class="track-card-tagline">${t(track.tagline)}</p>
      </a>
    `;
  }).join("");
}

function buildMarquee() {
  const track = document.querySelector(".marquee-track");
  const item = track?.querySelector(".marquee-item");
  if (!item) return;
  // two identical halves so a -50% loop is seamless
  const half = Array.from({ length: 4 }, () => item.outerHTML).join("");
  track.innerHTML = half + half;
}

// hero

function initHeroIntro() {
  const words = gsap.utils.toArray(".hero-word > span");
  const cover = document.querySelector(".hero-cover-inner");
  const img = cover?.querySelector("img");

  const chars = words.flatMap((word) => SplitText.create(word, { type: "chars" }).chars);

  if (reducedMotion) {
    gsap.set(cover, { opacity: 0 });
    gsap.set(chars, { opacity: 0 });
    whenPreloaderDone(() => {
      gsap.to([cover, ...chars], { opacity: 1, duration: 0.6, ease: "power1.out" });
    });
    return;
  }

  gsap.set(chars, { yPercent: 105 });
  gsap.set(cover, { clipPath: "inset(50% 0% 50% 0%)" });
  gsap.set(img, { scale: 1.35 });

  whenPreloaderDone(() => {
    const tl = gsap.timeline({ delay: 0.15 });
    tl.to(cover, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" }, 0)
      .to(img, { scale: 1, duration: 2, ease: EXPO }, 0.2)
      .to(chars, { yPercent: 0, duration: 1.3, ease: EXPO, stagger: { each: 0.045, from: "center" } }, 0.35);
  });
}

// the cover leans toward the pointer, a light sheen follows it
function initCoverTilt() {
  if (!finePointer || reducedMotion) return;

  const cover = document.querySelector(".hero-cover");
  const inner = cover?.querySelector(".hero-cover-inner");
  const shine = cover?.querySelector(".hero-cover-shine");
  if (!inner) return;

  const rotX = gsap.quickTo(inner, "rotationX", { duration: 0.9, ease: "power3.out" });
  const rotY = gsap.quickTo(inner, "rotationY", { duration: 0.9, ease: "power3.out" });
  const shineX = gsap.quickTo(shine, "xPercent", { duration: 0.9, ease: "power3.out" });

  window.addEventListener("pointermove", (e) => {
    const nx = e.clientX / window.innerWidth - 0.5;
    const ny = e.clientY / window.innerHeight - 0.5;
    rotY(nx * 16);
    rotX(-ny * 12);
    shineX(nx * 120);
  });
}

// a glow behind the cover that swells on every kick
function initCoverPulse() {
  const cover = document.querySelector(".hero-cover");
  if (!cover || reducedMotion) return;

  const glow = document.createElement("span");
  glow.className = "hero-cover-glow";
  cover.prepend(glow);

  let level = 0;
  gsap.ticker.add(() => {
    const { kick } = getPulse();
    level += (kick - level) * 0.3;
    glow.style.opacity = String(0.35 + level * 0.65);
    glow.style.transform = `scale(${1 + level * 0.12})`;
  });
}

// scrubbed exit: the two words drift apart, the cover lifts away,
// and the skyline fades into the page background
function initHeroExit() {
  const hero = document.querySelector(".hero");
  const fade = document.querySelector(".home-bg-fade");

  ScrollTrigger.create({
    trigger: ".manifesto",
    start: "top bottom",
    end: "top 20%",
    scrub: true,
    animation: gsap.fromTo(fade, { opacity: 0 }, { opacity: 1, ease: "none" }),
    onUpdate: (self) => setSkylineActive(self.progress < 0.99),
    onLeaveBack: () => setSkylineActive(true),
  });

  if (reducedMotion) return;

  gsap
    .timeline({
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
    })
    .to(".hero-word[data-word='left']", { xPercent: -22, ease: "none" }, 0)
    .to(".hero-word[data-word='right']", { xPercent: 22, ease: "none" }, 0)
    .to(".hero-title", { opacity: 0.15, ease: "none" }, 0)
    .to(".hero-stage", { yPercent: -18, scale: 0.86, opacity: 0, ease: "none" }, 0)
    .to(".hero-top, .hero-footer", { opacity: 0, ease: "none" }, 0);
}

// manifesto — words light up as the reader scrolls through them

function initManifesto() {
  const copy = document.querySelector(".manifesto-copy");
  if (!copy) return;

  const split = SplitText.create(copy, { type: "words", wordsClass: "manifesto-word" });
  const chips = copy.querySelectorAll(".inline-img");
  const meta = document.querySelectorAll(".manifesto-meta li");

  if (reducedMotion) return;

  gsap.set(split.words, { opacity: 0.14 });
  gsap.set(chips, { clipPath: "inset(0% 50% 0% 50% round 999px)" });

  const tl = gsap.timeline({
    scrollTrigger: { trigger: copy, start: "top 78%", end: "bottom 45%", scrub: true },
  });
  tl.to(split.words, { opacity: 1, ease: "none", stagger: 0.1, duration: 0.3 }, 0);

  // each chip opens when the words around it are reached
  const total = split.words.length * 0.1;
  chips.forEach((chip) => {
    const next = chip.nextElementSibling;
    const index = Math.max(0, split.words.indexOf(next));
    tl.to(
      chip,
      { clipPath: "inset(0% 0% 0% 0% round 999px)", ease: "none", duration: 0.6 },
      Math.max(0, (index / split.words.length) * total - 0.3),
    );
  });

  gsap.from(meta, {
    opacity: 0,
    y: 16,
    duration: 0.8,
    ease: EXPO,
    stagger: 0.1,
    scrollTrigger: { trigger: ".manifesto-meta", start: "top 90%", once: true },
  });
}

// tracks — vertical scroll drives a horizontal rail (desktop only)

function initTrackRail() {
  const section = document.querySelector(".home-tracks");
  const pin = section?.querySelector(".home-tracks-pin");
  const rail = section?.querySelector(".home-tracks-rail");
  const bar = section?.querySelector(".home-tracks-bar i");
  const count = section?.querySelector(".home-tracks-count");
  if (!rail) return;

  const total = TRACKS.length;
  const setCount = (progress) => {
    const current = Math.min(total, Math.floor(progress * total) + 1);
    count.textContent = `${trackNumber(current - 1)} / ${trackNumber(total - 1)}`;
  };

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1001px) and (prefers-reduced-motion: no-preference)", () => {
    const distance = () => rail.scrollWidth - window.innerWidth;

    const move = gsap.to(rail, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: pin,
        start: "top top",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          gsap.set(bar, { scaleX: self.progress });
          setCount(self.progress);
        },
      },
    });

    // images slide inside their frames against the rail — depth, not motion sickness
    rail.querySelectorAll(".track-card-media img").forEach((img) => {
      gsap.fromTo(
        img,
        { xPercent: -7 },
        {
          xPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: img.closest(".track-card"),
            containerAnimation: move,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        },
      );
    });
  });

  // touch + reduced motion: native horizontal scroll with snap
  mm.add("(max-width: 1000px), (prefers-reduced-motion: reduce)", () => {
    const onScroll = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      const progress = max > 0 ? rail.scrollLeft / max : 0;
      gsap.set(bar, { scaleX: progress });
      setCount(progress);
    };
    rail.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => rail.removeEventListener("scroll", onScroll);
  });
}

// artist — name rises in, photos open with a clip and drift at their own speed

function initArtist() {
  const lines = gsap.utils.toArray(".artist-name-line");
  const photos = gsap.utils.toArray(".artist-photo");
  if (!lines.length || reducedMotion) return;

  lines.forEach((line) => {
    const { chars } = SplitText.create(line, {
      type: "chars",
      mask: "chars",
      charsClass: "char",
    });
    gsap.from(chars, {
      yPercent: 110,
      duration: 1.2,
      ease: EXPO,
      stagger: 0.04,
      scrollTrigger: { trigger: line, start: "top 85%", once: true },
    });
  });

  photos.forEach((photo) => {
    const img = photo.querySelector("img");
    gsap.fromTo(
      photo,
      { clipPath: "inset(100% 0% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.4,
        ease: "expo.inOut",
        scrollTrigger: { trigger: photo, start: "top 88%", once: true },
      },
    );
    gsap.fromTo(img, { scale: 1.25 }, {
      scale: 1,
      duration: 2,
      ease: EXPO,
      scrollTrigger: { trigger: photo, start: "top 88%", once: true },
    });

    // parallax — capped at ~10% of the frame
    const speed = parseFloat(photo.dataset.speed) || 0;
    gsap.fromTo(
      photo,
      { yPercent: speed },
      {
        yPercent: -speed,
        ease: "none",
        scrollTrigger: { trigger: photo, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  });
}

// release — marquee that speeds up with the scroll, and the countdown

function initMarquee() {
  const track = document.querySelector(".marquee-track");
  if (!track || reducedMotion) return;

  const loop = gsap.to(track, { xPercent: -50, duration: 40, ease: "none", repeat: -1 });

  let boost = 0;
  window.lenis?.on("scroll", ({ velocity }) => {
    boost = Math.min(6, Math.abs(velocity) * 0.25);
  });
  gsap.ticker.add(() => {
    boost *= 0.92;
    loop.timeScale(1 + boost);
  });
}

function initCountdown() {
  const units = {
    days: document.querySelector('[data-unit="days"]'),
    hours: document.querySelector('[data-unit="hours"]'),
    minutes: document.querySelector('[data-unit="minutes"]'),
    seconds: document.querySelector('[data-unit="seconds"]'),
  };
  if (!units.days) return;

  const pad = (n) => String(n).padStart(2, "0");

  function render() {
    const left = RELEASE - Date.now();

    if (left <= 0) {
      const countdown = document.querySelector(".countdown");
      countdown.innerHTML = `<span class="countdown-value countdown-out">${t("home.release.out")}</span>`;
      return false;
    }

    const s = Math.floor(left / 1000);
    const next = {
      days: pad(Math.floor(s / 86400)),
      hours: pad(Math.floor((s % 86400) / 3600)),
      minutes: pad(Math.floor((s % 3600) / 60)),
      seconds: pad(s % 60),
    };

    Object.entries(next).forEach(([key, value]) => {
      const el = units[key];
      if (el.textContent === value) return;
      el.textContent = value;
      if (!reducedMotion) {
        // one-frame flicker on change, like a failing display
        gsap.fromTo(el, { opacity: 0.25 }, { opacity: 1, duration: 0.12, ease: "steps(2)" });
      }
    });
    return true;
  }

  if (render()) {
    const timer = setInterval(() => {
      if (!render()) clearInterval(timer);
    }, 1000);
  }
}
