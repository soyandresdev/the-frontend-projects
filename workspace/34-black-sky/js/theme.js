// theme — reads the palette from the css custom properties in globals.css
// so shaders and canvases stay in sync with the stylesheet
const styles = getComputedStyle(document.documentElement);

function readVar(name, fallback) {
  const value = styles.getPropertyValue(name).trim();
  return value || fallback;
}

export const theme = {
  bg: readVar("--bg", "#07090c"),
  fg: readVar("--fg", "#3d7dff"),
};

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : { r: 0, g: 0, b: 0 };
}
