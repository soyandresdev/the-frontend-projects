import * as THREE from "three";
import { theme, hexToRgb } from "./theme";
import { getPulse } from "./sound";

const bg = hexToRgb(theme.bg);
const fg = hexToRgb(theme.fg);

// procedural cityscape shader background
const canvas = document.getElementById("skyline");
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const pixelRatioLimit = isMobile ? 1.0 : 1.25;

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: false,
  powerPreference: "high-performance",
  stencil: false,
  depth: false,
});

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

const geometry = new THREE.PlaneGeometry(2, 2);
const material = new THREE.ShaderMaterial({
  uniforms: {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3() },
    uColorBg: { value: new THREE.Vector3(bg.r, bg.g, bg.b) },
    uColorFg: { value: new THREE.Vector3(fg.r, fg.g, fg.b) },
    uPulse: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif

    uniform float iTime;
    uniform vec3 iResolution;
    uniform vec3 uColorBg;
    uniform vec3 uColorFg;
    uniform float uPulse;
    varying vec2 vUv;

    float hash(float n) {
      return fract(sin(n) * 43758.5453123);
    }

    float hash2(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      float a = hash2(i);
      float b = hash2(i + vec2(1.0, 0.0));
      float c = hash2(i + vec2(0.0, 1.0));
      float d = hash2(i + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    // niebla: dos octavas bastan y esto corre en cada píxel
    float fog(vec2 p) {
      return 0.65 * noise(p) + 0.35 * noise(p * 2.07);
    }

    // Una fila de edificios, en unidades cuadradas: 1 unidad = el ancho de una
    // columna, en x y en y, para que las ventanas salgan cuadradas.
    //   x = máscara del edificio (1 dentro)
    //   y = luz de las ventanas
    //   z = baliza en la azotea
    vec3 block(vec2 uv, float seed, float hmax, float windowSize) {
      float column = floor(uv.x);
      float local = fract(uv.x);

      // ancho irregular: algunas columnas se fusionan con la vecina
      float merge = step(0.72, hash(column * 1.7 + seed));
      float id = column - merge;
      float rnd = hash(id * 7.31 + seed);

      float height = (0.30 + rnd * 0.70) * hmax;
      // escalón: la silueta no siempre termina plana
      float stepped = step(0.58, hash(id * 3.17 + seed));
      float inner = step(0.24, local) * step(local, 0.76);
      height -= stepped * inner * hmax * 0.22 * hash(id * 5.11 + seed);

      float body = step(uv.y, height) * step(0.0, uv.y);

      // ventanas: rejilla cuadrada dentro del edificio
      vec2 grid = floor(uv / windowSize);
      vec2 cell = fract(uv / windowSize);
      float pane =
        step(0.26, cell.x) * step(cell.x, 0.74) *
        step(0.28, cell.y) * step(cell.y, 0.72);
      float lit = step(0.74, hash2(grid + seed));
      // unas pocas parpadean de vez en cuando
      float flicker = step(0.992, hash2(grid + floor(iTime * 1.6) * 13.0 + seed));
      float rim = step(uv.y, height - windowSize * 0.5);
      float windows = body * pane * rim *
        max(lit * (0.35 + 0.65 * hash2(grid * 1.3 + seed)), flicker);

      // baliza roja parpadeante en algunas azoteas
      float hasLight = step(0.84, hash(id * 11.7 + seed));
      float blink = 0.5 + 0.5 * sin(iTime * 2.2 + rnd * 20.0);
      float dist = length(vec2(local - 0.5, (uv.y - height - windowSize * 0.6) * 1.2));
      float beacon = hasLight * blink * smoothstep(windowSize * 0.45, 0.0, dist);

      return vec3(body, windows, beacon);
    }

    void main() {
      vec2 uv = vUv;
      float aspect = iResolution.x / max(iResolution.y, 1.0);

      // cielo negro arriba, bruma azul pegada al horizonte, más viva con el kick
      float haze = 0.30 + uPulse * 0.32;
      float horizon = smoothstep(0.75, -0.05, uv.y);
      vec3 color = mix(uColorBg, uColorFg * haze, horizon * 0.85);

      // estrellas tenues en la parte alta
      vec2 sp = floor(vec2(uv.x * aspect, uv.y) * 240.0);
      float star = step(0.9977, hash2(sp));
      float twinkle = 0.55 + 0.45 * sin(iTime * 2.0 + hash2(sp) * 40.0);
      color += uColorFg * star * twinkle * 0.45 * smoothstep(0.42, 1.0, uv.y);

      // cinco filas de edificios, de la más lejana a la más cercana.
      // La ciudad vive en la franja baja: arriba queda cielo.
      // en pantallas estrechas los edificios se estrechan también: si no,
      // en un móvil caben cuatro manzanas y la ciudad deja de leerse
      float dense = clamp(iResolution.x / 1600.0, 0.5, 1.25);

      for (int i = 0; i < 5; i++) {
        float f = float(i);
        float depth = 1.0 - f / 4.0;              // 1 = lejos, 0 = cerca
        float scale = (34.0 - f * 5.5) / dense;   // unidades por alto de pantalla
        float ground = 0.30 - f * 0.065;          // dónde apoya cada fila
        float hmax = (0.21 + f * 0.05) * scale;   // alto máximo, en unidades

        vec2 p = vec2(
          uv.x * aspect * scale + iTime * (0.3 + f * 0.45) + f * 31.7,
          (uv.y - ground) * scale
        );
        vec3 b = block(p, f * 17.3, hmax, 0.26 + f * 0.035);

        // la bruma aclara lo lejano y oscurece lo cercano
        vec3 silhouette = mix(uColorBg * 0.15, uColorFg * 0.2, depth * depth);
        color = mix(color, silhouette, b.x);
        color += uColorFg * b.y * (0.32 + (1.0 - depth) * 0.45);
        color += vec3(1.0, 0.32, 0.26) * b.z * 0.55;
      }

      // niebla baja entre las filas
      float mist = fog(vec2(uv.x * aspect * 2.4 + iTime * 0.06, uv.y * 3.2 - iTime * 0.02));
      color = mix(color, uColorFg * (0.14 + uPulse * 0.10), mist * smoothstep(0.38, 0.0, uv.y) * 0.45);

      // lluvia en primer plano: dos capas de gotas alargadas
      for (int r = 0; r < 2; r++) {
        float fr = float(r);
        vec2 rp = vec2(uv.x * aspect, uv.y) * (56.0 - fr * 20.0);
        rp.x += rp.y * 0.12;
        float col = floor(rp.x);
        float off = hash(col + fr * 7.0);
        float y = fract(rp.y + off * 10.0 + iTime * (7.0 + off * 5.0));
        float drop = smoothstep(0.0, 0.06, y) * smoothstep(0.30, 0.02, y);
        float line = smoothstep(0.34, 0.0, abs(fract(rp.x) - 0.5));
        float alive = step(0.6, off);
        color += uColorFg * drop * line * alive * (0.05 - fr * 0.015);
      }

      // viñeta para que el texto del hero respire
      float vig = smoothstep(1.35, 0.35, length((vUv - 0.5) * vec2(aspect, 1.0)));
      color *= 0.7 + 0.3 * vig;

      // grano fino, en el mismo espíritu que el resto del sitio
      float grain = hash2(vUv * iResolution.xy + fract(iTime)) - 0.5;
      color += grain * 0.015;

      gl_FragColor = vec4(color, 1.0);
    }
  `,
  depthTest: false,
  depthWrite: false,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// resize handler with debounce
let resizeTimeout;

function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, pixelRatioLimit));
    material.uniforms.iResolution.value.set(width, height, 1);
  }, 100);
}

// animation loop — skipped entirely while the canvas is scrolled away
let active = true;
let pulse = 0;

export function setSkylineActive(value) {
  active = value;
}

function animate(currentTime) {
  requestAnimationFrame(animate);
  if (!active) return;
  const { kick } = getPulse();
  pulse += (kick - pulse) * 0.35;
  material.uniforms.uPulse.value = pulse;
  material.uniforms.iTime.value = currentTime * 0.001;
  renderer.render(scene, camera);
}

// cleanup on page unload
function cleanup() {
  geometry.dispose();
  material.dispose();
  renderer.dispose();
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("beforeunload", cleanup);
}

// initialize
handleResize();
window.addEventListener("resize", handleResize);
window.addEventListener("beforeunload", cleanup);
requestAnimationFrame(animate);
