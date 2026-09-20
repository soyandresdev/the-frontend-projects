import gsap from "gsap";

// custom cursor + magnetic buttons — fine pointers only.
// [data-cursor="label"] grows the ring into a filled disc with that label;
// [data-magnetic] pulls the element toward the pointer while hovered.

const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (finePointer) initCursor();
if (finePointer && !reducedMotion) initMagnetic();

function initCursor() {
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  ring.innerHTML = '<span class="cursor-label type-mono"></span>';
  document.body.append(ring, dot);
  document.documentElement.classList.add("has-cursor");

  const label = ring.querySelector(".cursor-label");
  const follow = reducedMotion ? 0.01 : 0.45;
  const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
  const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
  const ringX = gsap.quickTo(ring, "x", { duration: follow, ease: "power3.out" });
  const ringY = gsap.quickTo(ring, "y", { duration: follow, ease: "power3.out" });

  let visible = false;

  window.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    if (!visible) {
      visible = true;
      gsap.set([dot, ring], { x: e.clientX, y: e.clientY });
      document.documentElement.classList.add("cursor-visible");
    }
    dotX(e.clientX);
    dotY(e.clientY);
    ringX(e.clientX);
    ringY(e.clientY);
  });

  document.addEventListener("pointerleave", () => {
    visible = false;
    document.documentElement.classList.remove("cursor-visible");
  });

  document.addEventListener("pointerover", (e) => {
    const target = e.target.closest("[data-cursor], a, button, [role='button']");
    ring.classList.toggle("is-hover", !!target);
    const text = target?.dataset.cursor;
    ring.classList.toggle("is-label", !!text);
    if (text) label.textContent = text;
  });

  window.addEventListener("pointerdown", () => ring.classList.add("is-down"));
  window.addEventListener("pointerup", () => ring.classList.remove("is-down"));
}

function initMagnetic() {
  document.addEventListener("pointerover", (e) => {
    const el = e.target.closest("[data-magnetic]");
    if (!el || el.dataset.magneticBound) return;
    el.dataset.magneticBound = "true";

    const strength = parseFloat(el.dataset.magnetic) || 0.3;
    const inner = el.querySelector("[data-magnetic-inner]");
    const x = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
    const y = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });
    const ix = inner && gsap.quickTo(inner, "x", { duration: 0.6, ease: "power3.out" });
    const iy = inner && gsap.quickTo(inner, "y", { duration: 0.6, ease: "power3.out" });

    el.addEventListener("pointermove", (ev) => {
      const r = el.getBoundingClientRect();
      const dx = ev.clientX - (r.left + r.width / 2);
      const dy = ev.clientY - (r.top + r.height / 2);
      x(dx * strength);
      y(dy * strength);
      if (inner) {
        ix(dx * strength * 0.5);
        iy(dy * strength * 0.5);
      }
    });

    el.addEventListener("pointerleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.45)" });
      if (inner) gsap.to(inner, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.45)" });
    });
  });
}
