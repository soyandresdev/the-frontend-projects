// the demo is served from a sub-path in production (see vite base),
// so every url built in js goes through here instead of starting with "/"
const BASE = import.meta.env.BASE_URL;

export function asset(path) {
  return `${BASE}${path.replace(/^\//, "")}`;
}

// always an explicit file: the showcase serves the demo as static files and
// a bare directory url (/demo/34-black-sky/) 404s there
export function page(name, query = "") {
  return `${BASE}${name}.html${query}`;
}

// storage keys are namespaced: the showcase serves every demo from one origin
export const STORAGE = {
  lang: "black-sky:lang",
  preloaderSeen: "black-sky:preloaderSeen",
  pageTransition: "black-sky:pageTransition",
  sound: "black-sky:sound",
};

// compares two urls as pages: /x, /x.html and /x/index.html are the same page
function normalizePath(pathname) {
  return (
    pathname
      .replace(/\.html$/, "")
      .replace(/\/index$/, "/")
      .replace(/\/$/, "") || "/"
  );
}

export function isSamePage(href) {
  if (!href) return true;
  const target = new URL(href, window.location.href);
  return (
    normalizePath(target.pathname) === normalizePath(window.location.pathname) &&
    target.search === window.location.search
  );
}
