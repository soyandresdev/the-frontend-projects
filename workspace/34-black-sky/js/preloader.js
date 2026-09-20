import gsap from "gsap";
import { STORAGE } from "./paths";
import { enable as enableSound } from "./sound";

// initialization
document.addEventListener("DOMContentLoaded", init);

function init() {
  const hasSeenPreloader = sessionStorage.getItem(STORAGE.preloaderSeen) === "true";
  const preloader = document.querySelector(".preloader");

  if (!preloader) return;

  if (hasSeenPreloader) {
    preloader.style.display = "none";
    return;
  }

  // hold the page still until the visitor walks in
  document.documentElement.classList.add("is-loading");
  window.lenis?.stop();

  startSequence();
}

// progress bar sequence with random increments
function startSequence() {
  const progressIndicator = document.querySelector(".progress-bar-indicator");
  const progressText = document.querySelector(".progress-value");
  const progressBar = document.querySelector(".progress-bar");

  if (!progressIndicator || !progressText || !progressBar) return;

  gsap.to(progressBar, {
    opacity: 1,
    duration: 0.075,
    ease: "power2.inOut",
    delay: 0.5,
    repeat: 1,
    yoyo: true,
    onComplete: () => {
      gsap.set(progressBar, { opacity: 1 });
      startIncrements();
    },
  });

  function startIncrements() {
    let currentProgress = 0;
    const totalSteps = 5;
    let stepCount = 0;
    const increments = generateRandomIncrements(totalSteps);

    function animateNextStep() {
      if (stepCount >= totalSteps) {
        showEnter();
        return;
      }

      const increment = increments[stepCount];
      const targetProgress = Math.min(currentProgress + increment, 100);
      const randomDelay = 200 + Math.random() * 400;

      setTimeout(() => {
        gsap.to(progressIndicator, {
          "--progress": targetProgress / 100,
          duration: 0.5,
          ease: "power2.out",
          onUpdate: () => {
            const currentValue = Math.round(
              gsap.getProperty(progressIndicator, "--progress") * 100,
            );
            progressText.textContent = `${currentValue}%`;
          },
          onComplete: () => {
            currentProgress = targetProgress;
            stepCount++;
            animateNextStep();
          },
        });
      }, randomDelay);
    }

    animateNextStep();
  }
}

// generate random increments that sum to 100
function generateRandomIncrements(totalSteps) {
  const increments = [];
  let remaining = 100;
  const maxSingleIncrement = 30;

  for (let i = 0; i < totalSteps - 1; i++) {
    const maxIncrement = Math.min(
      maxSingleIncrement,
      remaining - (totalSteps - 1 - i),
    );
    const minIncrement = Math.max(
      5,
      Math.floor((remaining / (totalSteps - i)) * 0.5),
    );
    const increment =
      Math.floor(Math.random() * (maxIncrement - minIncrement)) + minIncrement;
    increments.push(increment);
    remaining -= increment;
  }

  increments.push(remaining);
  return increments.sort(() => Math.random() - 0.5);
}

// swap the progress bar for the sound choice — the click doubles as the
// user gesture the browser needs before any audio can start
function showEnter() {
  const progressBar = document.querySelector(".progress-bar");
  const enter = document.querySelector(".preloader-enter");
  const buttons = enter ? [...enter.querySelectorAll("[data-enter]")] : [];

  gsap.to(progressBar, {
    opacity: 0,
    duration: 0.075,
    ease: "power2.inOut",
    delay: 0.3,
    repeat: 1,
    yoyo: true,
    onComplete: () => {
      gsap.set(progressBar, { opacity: 0, display: "none" });

      if (!enter) {
        dismiss();
        return;
      }

      enter.hidden = false;
      gsap.fromTo(
        enter.children,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.06,
          repeat: 3,
          yoyo: false,
          stagger: 0.08,
          ease: "steps(1)",
          onComplete: () => buttons[0]?.focus({ preventScroll: true }),
        },
      );

      buttons.forEach((button) =>
        button.addEventListener(
          "click",
          () => {
            if (button.dataset.enter === "sound") enableSound();
            gsap.to(enter, {
              opacity: 0,
              duration: 0.06,
              repeat: 1,
              yoyo: true,
              onComplete: () => {
                enter.hidden = true;
                dismiss();
              },
            });
          },
          { once: true },
        ),
      );
    },
  });
}

// remove the preloader with the block flicker and release the page
function dismiss() {
  const preloader = document.querySelector(".preloader");
  const preloaderBlocks = document.querySelectorAll(".preloader-block");

  if (!preloader) return;

  sessionStorage.setItem(STORAGE.preloaderSeen, "true");
  document.documentElement.classList.remove("is-loading");
  window.lenis?.start();
  window.__preloaderDone = true;
  window.dispatchEvent(new Event("preloader:complete"));

  const shuffledBlocks = [...preloaderBlocks].sort(() => Math.random() - 0.5);

  shuffledBlocks.forEach((block, index) => {
    gsap.to(block, {
      opacity: 0,
      duration: 0.075,
      ease: "power2.inOut",
      delay: 0.1 + index * 0.025,
      repeat: 1,
      yoyo: true,
      onComplete: () => {
        gsap.set(block, { opacity: 0 });
        if (index === shuffledBlocks.length - 1) {
          preloader.style.display = "none";
        }
      },
    });
  });
}
