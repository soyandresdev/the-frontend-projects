import { STRINGS } from "./content";
import { STORAGE } from "./paths";

// language resolution — ?lang= param > saved choice > browser language
const SUPPORTED = ["es", "en"];
const STORAGE_KEY = STORAGE.lang;

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function store(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // private mode — the choice just won't persist
  }
}

function resolveLang() {
  const param = new URLSearchParams(window.location.search).get("lang");
  if (SUPPORTED.includes(param)) {
    store(param);
    return param;
  }

  const stored = readStored();
  if (SUPPORTED.includes(stored)) return stored;

  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

export const lang = resolveLang();

// pick a string by key, or the matching language from a { es, en } object
export function t(key) {
  if (key && typeof key === "object") return key[lang] ?? key.es;
  return STRINGS[lang][key] ?? STRINGS.es[key] ?? key;
}

// translations run at module evaluation, before any DOMContentLoaded
// handler splits the copy for the text animations
export function applyTranslations(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  root.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  root.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key) el.setAttribute(attr.trim(), t(key.trim()));
    });
  });
}

function initLangSwitch() {
  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.querySelectorAll("[data-lang]").forEach((option) => {
      option.classList.toggle("active", option.dataset.lang === lang);
    });

    button.addEventListener("click", () => {
      const next = lang === "es" ? "en" : "es";
      store(next);

      const url = new URL(window.location.href);
      url.searchParams.set("lang", next);
      window.location.href = url.toString();
    });
  });
}

document.documentElement.lang = lang;
applyTranslations();
initLangSwitch();
