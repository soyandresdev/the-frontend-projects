import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { t } from "./i18n";
import { CREDITS } from "./content";

gsap.registerPlugin(ScrollTrigger);

// initialization
document.addEventListener("DOMContentLoaded", () => {
  generateCreditsList();

  setTimeout(() => {
    ScrollTrigger.refresh();
    initCreditsAnimation();
  }, 100);
});

// generate credit rows from data
function generateCreditsList() {
  const creditsList = document.querySelector(".credits-list");
  if (!creditsList) return;

  CREDITS.forEach((credit) => {
    const row = document.createElement("div");
    row.className = "credit-row";

    const nameP = document.createElement("p");
    nameP.className = "type-mono";
    nameP.textContent = credit.name;

    const roleP = document.createElement("p");
    roleP.className = "type-mono";
    roleP.textContent = t(credit.role);

    row.appendChild(nameP);
    row.appendChild(roleP);
    creditsList.appendChild(row);
  });
}

// scroll animation - gap closes and opacity fades in
function initCreditsAnimation() {
  const creditRows = document.querySelectorAll(".credit-row");

  creditRows.forEach((row) => {
    const paragraphs = row.querySelectorAll("p");

    ScrollTrigger.create({
      trigger: row,
      start: "top 75%",
      end: "top 65%",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(row, { gap: `${25 - progress * 25}%` });
        paragraphs.forEach((p) => gsap.set(p, { opacity: progress }));
      },
    });
  });
}
