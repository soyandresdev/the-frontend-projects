# Cielo Negro — Santo Vøid

Sitio del álbum **Cielo Negro** de **Santo Vøid** (artista ficticio), trap oscuro, 8 canciones, Estática Records, 2026.
Bilingüe: español / inglés.

## Páginas

| Ruta          | Contenido                                              |
| ------------- | ------------------------------------------------------ |
| `index.html`  | Preloader, portada y skyline en shader                 |
| `tracklist.html` | Las 8 canciones con distorsión WebGL al hacer scroll   |
| `track.html?t=…` | Ficha de cada canción (historia, créditos, BPM, tono)  |
| `studio.html` | Detrás del disco: logo en partículas, números, créditos|
| `contact.html` | Booking, prensa, sello, con scroll infinito            |

## Idioma

- El idioma se elige con el botón `ES / EN` del nav, se guarda en `localStorage` y también se puede forzar con `?lang=es` o `?lang=en`.
- Todos los textos viven en `js/content.js` (interfaz y créditos) y `js/tracks.js` (canciones). En el HTML se enlazan con `data-i18n`, `data-i18n-html` y `data-i18n-attr`.
- `js/i18n.js` es siempre el primer módulo de cada página: traduce antes de que las animaciones de texto dividan el copy.

## Paleta

Toda la paleta sale de dos variables en `globals.css` (`--bg`, `--fg`). `js/theme.js` las lee para los shaders y canvas, así que cambiar el color es cambiar esas dos líneas (más los PNG de `public/brand` y `public/icons`, que están pintados con el acento).

## Imágenes

Portada, arte de cada track, sesión de fotos, logo e íconos se generaron con Gemini (`gemini-3.1-flash-image-preview`, Nano Banana). Los links de redes y los correos son de relleno.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/, con base /demo/34-black-sky/
```

En producción el demo vive bajo `/demo/34-black-sky/` del showcase, por eso las rutas que arma el JS pasan por `js/paths.js` (`asset()`, `page()`) y las claves de storage llevan el prefijo `black-sky:`.

## Créditos

- Base de interacción y animación: plantilla _Deadspace_ de [Codegrid](https://codegrid.gumroad.com/l/codegridpro). Revisa su licencia antes de publicar.
- Tipografías: De Fonte Plus, DM Mono, [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (OFL, ver `public/fonts/OFL-space-grotesk.txt`).
- GSAP, Lenis, Three.js, Vite.
