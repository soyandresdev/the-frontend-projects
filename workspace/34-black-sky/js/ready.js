import { STORAGE } from "./paths";

// runs a callback once the page is actually visible: right away on inner pages,
// or after the home preloader has been dismissed
export function whenPreloaderDone(callback) {
  const hasPreloader = !!document.querySelector(".preloader");
  const seen = sessionStorage.getItem(STORAGE.preloaderSeen) === "true";

  if (!hasPreloader || seen || window.__preloaderDone) {
    callback();
    return;
  }

  window.addEventListener("preloader:complete", () => callback(), { once: true });
}
