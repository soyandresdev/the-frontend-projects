import { t } from "./i18n";
import { asset } from "./paths";
import { LEAD_SINGLE, TRACKS, trackNumber, trackUrl } from "./tracks";

// track page — fills the template from ?t=<slug>, falls back to the lead single
const slug = new URLSearchParams(window.location.search).get("t");
let index = TRACKS.findIndex((track) => track.slug === slug);
if (index === -1) index = TRACKS.findIndex((track) => track.slug === LEAD_SINGLE);

const track = TRACKS[index];
const next = TRACKS[(index + 1) % TRACKS.length];

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

document.title = `${track.title} — Santo Vøid`;

const heroImg = document.getElementById("track-hero-img");
heroImg.src = asset(`shoot/wide-${(index % 3) + 1}.jpg`);
heroImg.alt = track.title;

// rotate the gallery so neighbouring tracks don't open on the same frame
const gallery = [...document.querySelectorAll(".track-img img")];
gallery.forEach((img, i) => {
  img.src = asset(`shoot/gallery-${((index + i) % gallery.length) + 1}.jpg`);
});

setText("track-title", track.title);
setText("track-tagline", t(track.tagline));
setText("track-number", `Track ${trackNumber(index)} / ${trackNumber(TRACKS.length - 1)}`);
setText("track-feat-meta", track.feat ? `feat. ${track.feat}` : "Solo");

setText("track-about", t(track.about));
setText("track-producer", track.producer);
setText("track-feat", track.feat ?? t("track.none"));

setText("track-outro", t(track.outro));
setText("track-length", track.length);
setText("track-bpm", `${track.bpm} BPM`);
setText("track-key", track.key);
setText("track-recorded", t(track.recorded));

document.getElementById("track-next").href = trackUrl(next);
setText("track-next-title", next.title);
