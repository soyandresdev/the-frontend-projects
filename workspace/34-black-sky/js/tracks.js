import { asset, page } from "./paths";

// album data — Cielo Negro, 8 tracks
export const TRACKS = [
  {
    slug: "black-sky",
    title: "Cielo Negro",
    feat: null,
    length: "2:14",
    bpm: 70,
    key: "F#m",
    producer: "Santo Vøid, Kaelo",
    tagline: { es: "La noche no avisa", en: "The night gives no warning" },
    about: {
      es: "La intro del disco. Una nota sostenida, un sample de radio perdido entre estaciones y la primera vez que se escucha la voz de Santo Vøid: sin beat, sin prisa, mirando la ciudad desde arriba. Es la puerta de entrada y también la advertencia.",
      en: "The album's intro. A held note, a radio sample lost between stations and the first time Santo Vøid's voice appears: no beat, no rush, looking down at the city. It's the way in and also the warning.",
    },
    outro: {
      es: "Se grabó en una sola toma, a las 4:12 de la mañana, con el micrófono todavía caliente de la sesión anterior. Nadie quiso volver a grabarla.",
      en: "Cut in a single take at 4:12am, with the mic still warm from the previous session. Nobody wanted to record it again.",
    },
    recorded: { es: "Azotea, Estudio B", en: "Rooftop, Studio B" },
  },
  {
    slug: "smoke",
    title: "Humo",
    feat: "Nyx Rivera",
    length: "3:32",
    bpm: 142,
    key: "Cm",
    producer: "Kaelo",
    tagline: { es: "Todo lo que se va sin hacer ruido", en: "Everything that leaves without a sound" },
    about: {
      es: "El primer single. Un 808 que respira lento debajo de hi-hats nerviosos y un coro que Nyx Rivera escribió en diez minutos en el pasillo del estudio. Habla de lo que se desvanece: amistades, promesas, gente que un día estaba y al otro ya no.",
      en: "The lead single. An 808 breathing slowly beneath nervous hi-hats and a hook Nyx Rivera wrote in ten minutes in the studio hallway. It's about what fades away: friendships, promises, people who were there one day and gone the next.",
    },
    outro: {
      es: "La versión final usa la maqueta original de la voz. Se intentó regrabar tres veces y ninguna tuvo el mismo cansancio.",
      en: "The final version keeps the original demo vocal. It was re-recorded three times and none had the same exhaustion.",
    },
    recorded: { es: "Estudio B, CDMX", en: "Studio B, CDMX" },
  },
  {
    slug: "no-signal",
    title: "Sin Señal",
    feat: null,
    length: "3:08",
    bpm: 150,
    key: "Bbm",
    producer: "Fantasma 808",
    tagline: { es: "Llamadas que nunca entraron", en: "Calls that never went through" },
    about: {
      es: "Construida sobre estática real grabada con un celular viejo dentro de un carro bajo la lluvia. Es la canción más rápida del disco y la más desesperada: alguien marcando una y otra vez a un número que ya no contesta.",
      en: "Built on real static recorded with an old phone inside a car in the rain. It's the fastest song on the record and the most desperate: someone dialing over and over a number that no longer answers.",
    },
    outro: {
      es: "El ruido que se escucha al final no es un efecto. Es el buzón de voz, cortado a la mitad.",
      en: "The noise at the end isn't an effect. It's the voicemail, cut off halfway.",
    },
    recorded: { es: "Cuarto Oscuro", en: "Cuarto Oscuro" },
  },
  {
    slug: "broken-glass",
    title: "Vidrio Roto",
    feat: null,
    length: "3:41",
    bpm: 138,
    key: "Am",
    producer: "Mørk",
    tagline: { es: "Me vi entero en los pedazos", en: "I saw myself whole in the pieces" },
    about: {
      es: "Mørk sampleó una botella rompiéndose contra el piso del estudio y la convirtió en el snare. Es la canción más personal de Santo Vøid: una mirada al espejo después de todo lo que salió mal, sin pedir perdón.",
      en: "Mørk sampled a bottle shattering on the studio floor and turned it into the snare. It's Santo Vøid's most personal song: a look in the mirror after everything went wrong, without asking for forgiveness.",
    },
    outro: {
      es: "El segundo verso se escribió directo en el micrófono. No existe en papel.",
      en: "The second verse was written straight into the mic. It doesn't exist on paper.",
    },
    recorded: { es: "Estudio B, CDMX", en: "Studio B, CDMX" },
  },
  {
    slug: "ghosts",
    title: "Fantasmas",
    feat: "Lía Ceniza",
    length: "3:55",
    bpm: 145,
    key: "Dm",
    producer: "Fantasma 808",
    tagline: { es: "Los que se quedaron en el estacionamiento", en: "The ones who stayed in the parking lot" },
    about: {
      es: "Un dueto con Lía Ceniza sobre la gente que sigue apareciendo aunque ya no esté. Las voces de fondo son todo el equipo del disco grabado a la vez en un estacionamiento subterráneo, con el eco natural del concreto.",
      en: "A duet with Lía Ceniza about the people who keep showing up even after they're gone. The backing vocals are the whole album crew recorded at once in an underground parking garage, with the natural echo of the concrete.",
    },
    outro: {
      es: "Lía grabó su parte con las luces apagadas. Pidió que nadie estuviera en la sala.",
      en: "Lía recorded her part with the lights off. She asked for nobody to be in the room.",
    },
    recorded: { es: "Estacionamiento nivel -3", en: "Parking level -3" },
  },
  {
    slug: "four-44",
    title: "4:44",
    feat: null,
    length: "3:19",
    bpm: 140,
    key: "Gm",
    producer: "Kaelo, Mørk",
    tagline: { es: "Autopista vacía, cabeza llena", en: "Empty highway, crowded head" },
    about: {
      es: "Escrita manejando sin rumbo a las cuatro de la mañana. El beat imita el ritmo de las líneas de la carretera pasando debajo del carro. Es el centro del disco: el momento exacto en que la noche deja de ser escape y se vuelve pregunta.",
      en: "Written driving nowhere at four in the morning. The beat mimics the rhythm of highway lines passing under the car. It's the center of the record: the exact moment the night stops being an escape and becomes a question.",
    },
    outro: {
      es: "Dura 3:19, pero en la sesión original el beat corrió 44 minutos sin parar.",
      en: "It runs 3:19, but in the original session the beat looped for 44 minutes straight.",
    },
    recorded: { es: "Carro, Periférico Sur", en: "Car, Periférico Sur" },
  },
  {
    slug: "neon",
    title: "Neón",
    feat: "Duke Ølvido",
    length: "3:27",
    bpm: 156,
    key: "Ebm",
    producer: "Fantasma 808",
    tagline: { es: "La única luz que no se apaga", en: "The only light that won't go out" },
    about: {
      es: "El golpe de energía del disco. Duke Ølvido entra con un verso agresivo sobre un beat que no da respiro. Habla de la ciudad de noche como un escenario: todos brillando, nadie mirando.",
      en: "The record's burst of energy. Duke Ølvido comes in with an aggressive verse over a beat that never lets up. It sees the city at night as a stage: everyone shining, nobody watching.",
    },
    outro: {
      es: "Es la canción que abre los shows. La primera vez que se tocó en vivo, se fue la luz del lugar.",
      en: "It's the song that opens the shows. The first time it was played live, the venue lost power.",
    },
    recorded: { es: "Estudio B, CDMX", en: "Studio B, CDMX" },
  },
  {
    slug: "top-floor",
    title: "Último Piso",
    feat: null,
    length: "4:32",
    bpm: 68,
    key: "F#m",
    producer: "Santo Vøid, Kaelo",
    tagline: { es: "Desde aquí arriba todo se ve pequeño", en: "From up here everything looks small" },
    about: {
      es: "El cierre. Un piano grabado con el pedal trabado, voces que se apilan hasta volverse coro y la misma nota con la que empieza el disco. Santo Vøid termina donde empezó: arriba, solo, mirando un cielo que sigue negro.",
      en: "The closer. A piano recorded with a stuck pedal, vocals stacking until they become a choir and the same note the record opens with. Santo Vøid ends where it all began: up high, alone, looking at a sky that's still black.",
    },
    outro: {
      es: "Los últimos cuarenta segundos son el sonido de la ciudad a las 6 a.m., grabado desde la ventana del último piso.",
      en: "The last forty seconds are the sound of the city at 6am, recorded from the top-floor window.",
    },
    recorded: { es: "Último piso, Torre 9", en: "Top floor, Tower 9" },
  },
];

export const LEAD_SINGLE = "smoke";

export function trackNumber(index) {
  return String(index + 1).padStart(2, "0");
}

export function trackUrl(track) {
  return page("track", `?t=${track.slug}`);
}

export function trackArt(index) {
  return asset(`tracks/track-${trackNumber(index)}.jpg`);
}
