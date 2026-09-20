import gsap from "gsap";
import { whenPreloaderDone } from "./ready";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// initialization
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-animate-variant]");
  animatedElements.forEach((element) => gsap.set(element, { opacity: 0 }));

  document.fonts.ready.then(() => initAnimatedCopy());
});

function initAnimatedCopy() {
  const animatedElements = document.querySelectorAll("[data-animate-variant]");

  animatedElements.forEach((element) => {
    const variant = element.getAttribute("data-animate-variant");

    if (variant === "slide") initSlideAnimation(element);
    if (variant === "flicker") initFlickerAnimation(element);
    if (variant === "diffuse") initDiffuseAnimation(element);
  });
}

// slide - line/word reveal with mask
function initSlideAnimation(element) {
  const animateOnScroll =
    element.getAttribute("data-animate-on-scroll") !== "false";
  const stagger =
    parseFloat(element.getAttribute("data-animate-stagger")) || 0.1;
  const slideType = element.getAttribute("data-animate-type") || "lines";
  const delay = parseFloat(element.getAttribute("data-animate-delay")) || 0;

  SplitText.create(element, {
    type: slideType,
    mask: slideType,
    autoSplit: true,
    linesClass: "line",
    wordsClass: "word",
    onSplit(self) {
      const elements = slideType === "words" ? self.words : self.lines;

      gsap.set(elements, { yPercent: 100 });
      gsap.set(element, { opacity: 1 });

      const animation = gsap.to(elements, {
        yPercent: 0,
        duration: 0.75,
        ease: "power3.out",
        delay: delay,
        stagger: stagger,
        paused: animateOnScroll,
      });

      if (animateOnScroll) {
        ScrollTrigger.create({
          trigger: element,
          start: "top 70%",
          animation: animation,
          toggleActions: "play none none none",
        });
      } else {
        whenPreloaderDone(() => animation.play());
      }
    },
  });
}

// flicker - random character reveal
function initFlickerAnimation(element) {
  const animateOnScroll =
    element.getAttribute("data-animate-on-scroll") !== "false";
  const delay = parseFloat(element.getAttribute("data-animate-delay")) || 0;

  SplitText.create(element, {
    type: "chars",
    autoSplit: true,
    onSplit(self) {
      gsap.set(self.chars, { opacity: 0 });
      gsap.set(element, { opacity: 1 });

      const animation = gsap.to(self.chars, {
        opacity: 1,
        duration: 0.05,
        ease: "power2.inOut",
        delay: delay,
        stagger: { amount: 0.5, each: 0.1, from: "random" },
        paused: animateOnScroll,
      });

      if (animateOnScroll) {
        ScrollTrigger.create({
          trigger: element,
          start: "top 85%",
          animation: animation,
          toggleActions: "play none none none",
        });
      } else {
        whenPreloaderDone(() => animation.play());
      }
    },
  });
}

// diffuse - word blur reveal
function initDiffuseAnimation(element) {
  const animateOnScroll =
    element.getAttribute("data-animate-on-scroll") !== "false";
  const delay = parseFloat(element.getAttribute("data-animate-delay")) || 0;

  SplitText.create(element, {
    type: "words",
    autoSplit: true,
    wordsClass: "word",
    onSplit(self) {
      const words = self.words;

      words.forEach((word) => {
        word.style.filter = "blur(75px)";
        word.style.webkitFilter = "blur(75px)";
      });

      gsap.set(words, { filter: "blur(75px)", opacity: 0 });
      gsap.set(element, { opacity: 1 });

      const animation = gsap.to(words, {
        filter: "blur(0px)",
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        delay: delay,
        paused: animateOnScroll,
        onComplete: () => {
          gsap.set(words, { filter: "blur(0px)", opacity: 1 });
          words.forEach((word) => {
            word.style.filter = "blur(0px)";
            word.style.webkitFilter = "blur(0px)";
          });
        },
      });

      if (animateOnScroll) {
        ScrollTrigger.create({
          trigger: element,
          start: "top 85%",
          animation: animation,
          toggleActions: "play none none none",
        });
      } else {
        whenPreloaderDone(() => animation.play());
      }
    },
  });
}
