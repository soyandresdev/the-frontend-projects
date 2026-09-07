export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type LocalizedText = { en: string; es: string };

export interface Project {
  slug: string;
  title: LocalizedText;
  hidden: boolean;
  description: LocalizedText;
  difficulty: Difficulty;
  tags: string[];
  links: { homepage: string | null; repository: string | null; youtube: string | null };
}

export const PROJECTS: Project[] = [
  {
    "slug": "01-css_cards_hover_effects",
    "title": {
      "en": "CSS Cards Hover Effects",
      "es": "CSS Cards Hover Effects"
    },
    "hidden": false,
    "description": {
      "en": "A collection of cards with modern hover effects using CSS and blend modes.",
      "es": "Colección de tarjetas con efectos de hover usando CSS y blending."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "hover",
      "cards"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "02-landingpage_3d_restaurant",
    "title": {
      "en": "CyberNoodles — 3D Restaurant Landing",
      "es": "CyberNoodles — Landing 3D de restaurante"
    },
    "hidden": false,
    "description": {
      "en": "Cyberpunk noodle kiosk landing with a scroll-driven Three.js camera, GSAP ScrollTrigger sections and a pinned menu gallery.",
      "es": "Landing de un kiosco de fideos cyberpunk con cámara Three.js controlada por scroll, secciones GSAP ScrollTrigger y galería de menú fijada."
    },
    "difficulty": "advanced",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "ThreeJs",
      "GSAP",
      "ScrollTrigger",
      "landing page",
      "3d",
      "webgl",
      "vite"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "03-scroll-animation",
    "title": {
      "en": "Scroll-Animated Landing Page",
      "es": "Landing Page con Scroll Animado"
    },
    "hidden": false,
    "description": {
      "en": "Futuristic electric car landing page with scroll-controlled animation and GSAP effects.",
      "es": "Landing page futurista de un auto eléctrico con animación controlada por scroll y efectos GSAP."
    },
    "difficulty": "intermediate",
    "tags": [
      "scroll animation",
      "GSAP",
      "HTML",
      "CSS",
      "JavaScript",
      "vite"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "04-quiz-game",
    "title": {
      "en": "Pulse Quiz",
      "es": "Pulse Quiz"
    },
    "hidden": false,
    "description": {
      "en": "Interactive quiz with GSAP transitions, glassmorphism and animated feedback, reimagined from html-css-js-projects #01.",
      "es": "Quiz interactivo con transiciones GSAP, glassmorphism y feedback animado, inspirado en html-css-js-projects #01."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "quiz",
      "animation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "05-inkline",
    "title": {
      "en": "Inkline",
      "es": "Inkline"
    },
    "hidden": false,
    "description": {
      "en": "A reading-progress indicator with a scroll-driven CSS timeline and a glass badge, reimagined from html-css-js-projects #49.",
      "es": "Indicador de progreso de lectura con una línea de tiempo CSS ligada al scroll y una badge de cristal, inspirado en html-css-js-projects #49."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "scroll",
      "progress",
      "animation-timeline"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "06-strongbox",
    "title": {
      "en": "Strongbox",
      "es": "Strongbox"
    },
    "hidden": false,
    "description": {
      "en": "A full \"set your password\" terminal flow: a segmented live strength meter, animated requirement checklist, a confirm-password field with live match feedback, independent show/hide toggles per field, and a secure random password generator. Reimagined from html-css-js-projects #32, folding in #24 (password toggle) as well.",
      "es": "Flujo completo de \"crear contraseña\" con estilo de terminal: medidor de fortaleza segmentado en vivo, checklist animado de requisitos, campo de confirmación con feedback de coincidencia en vivo, mostrar/ocultar independiente por campo y generador de contraseña segura. Inspirado en html-css-js-projects #32, integrando también el #24 (password toggle)."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "password",
      "forms",
      "validation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "07-masthead",
    "title": {
      "en": "Masthead",
      "es": "Masthead"
    },
    "hidden": false,
    "description": {
      "en": "A print-editorial team page — cream paper tones, serif display type and duotone photography, reimagined from html-css-js-projects #20.",
      "es": "Página de equipo estilo editorial impreso — tonos crema, tipografía serif y fotografía a duotono, inspirada en html-css-js-projects #20."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "team",
      "editorial",
      "grid",
      "typography"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "08-stray",
    "title": {
      "en": "Stray",
      "es": "Stray"
    },
    "hidden": false,
    "description": {
      "en": "A 404 page where the digits are draggable magnets with real spring physics — flick them and they settle back with momentum. Reimagined from html-css-js-projects #15.",
      "es": "Página 404 donde los dígitos son imanes arrastrables con física de resorte real — suéltalos y vuelven con inercia. Inspirada en html-css-js-projects #15."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      404,
      "drag",
      "spring physics",
      "pointer events"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "09-flapboard",
    "title": {
      "en": "Flapboard",
      "es": "Flapboard"
    },
    "hidden": false,
    "description": {
      "en": "A countdown timer styled as an airport split-flap departure board, with real mechanical flip animation per digit. Reimagined from html-css-js-projects #29.",
      "es": "Cronómetro de cuenta regresiva estilo tablero de salidas de aeropuerto, con animación mecánica de flip por dígito. Inspirado en html-css-js-projects #29."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "countdown",
      "split-flap",
      "Web Animations API"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "10-noughts",
    "title": {
      "en": "Noughts",
      "es": "Noughts"
    },
    "hidden": false,
    "description": {
      "en": "Tic-tac-toe with a bold neo-brutalist look — flat color, thick borders, hard offset shadows and a hand-drawn winning line. Reimagined from html-css-js-projects #44.",
      "es": "Tres en línea con estética neobrutalista — color plano, bordes gruesos, sombras duras y una línea ganadora \"dibujada a mano\". Inspirado en html-css-js-projects #44."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "game",
      "tic-tac-toe",
      "neubrutalism"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "11-presence",
    "title": {
      "en": "Presence",
      "es": "Presence"
    },
    "hidden": false,
    "description": {
      "en": "A product-style avatar stack with hover tooltips, a live status pulse and an expandable full roster — reimagined from html-css-js-projects #43.",
      "es": "Stack de avatares estilo producto con tooltips al hover, pulso de estado en vivo y un roster completo expandible — inspirado en html-css-js-projects #43."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "avatars",
      "tooltip",
      "presence"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "12-tally",
    "title": {
      "en": "Tally",
      "es": "Tally"
    },
    "hidden": false,
    "description": {
      "en": "Colorful KPI cards with count-up numbers, inline sparklines and a scroll-triggered reveal. Reimagined from html-css-js-projects #35.",
      "es": "Tarjetas KPI de colores saturados con números que cuentan hacia arriba, mini gráficos y revelado al hacer scroll. Inspirado en html-css-js-projects #35."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "dashboard",
      "stats",
      "count-up",
      "intersection observer"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "13-eclipse",
    "title": {
      "en": "Eclipse",
      "es": "Eclipse"
    },
    "hidden": false,
    "description": {
      "en": "A dark mode toggle with a circular wipe transition that expands from the switch, using the View Transitions API. Reimagined from html-css-js-projects #27.",
      "es": "Toggle de modo oscuro con una transición circular que se expande desde el switch, usando la View Transitions API. Inspirado en html-css-js-projects #27."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "dark mode",
      "view transitions",
      "theming"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "14-ticker",
    "title": {
      "en": "Ticker",
      "es": "Ticker"
    },
    "hidden": false,
    "description": {
      "en": "A simulated live crypto dashboard — flashing price updates, per-coin sparklines and a scrolling ticker tape, all client-side (no flaky third-party API). Reimagined from html-css-js-projects #50.",
      "es": "Dashboard cripto simulado en vivo — precios que destellan al actualizar, sparklines por moneda y una cinta de ticker, todo del lado del cliente. Inspirado en html-css-js-projects #50."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "dashboard",
      "crypto",
      "sparkline",
      "simulation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "15-popper",
    "title": {
      "en": "Popper",
      "es": "Popper"
    },
    "hidden": false,
    "description": {
      "en": "A signup form that celebrates with a hand-built canvas confetti burst — real gravity, rotation and drag, no confetti library. Reimagined from html-css-js-projects #22.",
      "es": "Un formulario que celebra con una explosión de confeti hecha a mano en canvas — gravedad, rotación y fricción reales, sin librería. Inspirado en html-css-js-projects #22."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "canvas",
      "confetti",
      "particles"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "16-cardface",
    "title": {
      "en": "Cardface",
      "es": "Cardface"
    },
    "hidden": false,
    "description": {
      "en": "A payment form with a live 3D card preview that fills in as you type and flips to show the CVV. Reimagined from html-css-js-projects #41.",
      "es": "Formulario de pago con una tarjeta 3D en vivo que se completa mientras escribes y se voltea para mostrar el CVV. Inspirado en html-css-js-projects #41."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "forms",
      "validation",
      "3d",
      "payment"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "17-crumb",
    "title": {
      "en": "Crumb",
      "es": "Crumb"
    },
    "hidden": false,
    "description": {
      "en": "A cookie consent banner with a warm bakery theme and a granular preferences panel (necessary/analytics/marketing toggles). Reimagined from html-css-js-projects #25.",
      "es": "Banner de cookies con tema cálido de pastelería y un panel de preferencias granular (necesarias/analytics/marketing). Inspirado en html-css-js-projects #25."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "cookies",
      "consent",
      "localStorage"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "18-stopover",
    "title": {
      "en": "Stopover",
      "es": "Stopover"
    },
    "hidden": false,
    "description": {
      "en": "A passport-control themed country lookup — search a destination and watch its details arrive as an ink-stamped visa page, backed by a curated offline dataset. Reimagined from html-css-js-projects #47.",
      "es": "Buscador de países con temática de control de pasaportes — busca un destino y observa sus datos aparecer como una página de visa sellada, con datos locales sin depender de una API externa. Inspirado en html-css-js-projects #47."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "search",
      "autocomplete",
      "countries",
      "animation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "19-nametag",
    "title": {
      "en": "Nametag",
      "es": "Nametag"
    },
    "hidden": false,
    "description": {
      "en": "A peel-and-stick \"HELLO my name is\" badge that writes your name in marker as you type, then reveals how it has historically leaned across public name registries — framed as a fun curiosity, not an identity predictor. Reimagined from html-css-js-projects #37.",
      "es": "Un gafete tipo \"HOLA me llamo\" al que le escribes tu nombre con marcador en tiempo real, y que revela cómo se ha inclinado históricamente en registros públicos de nombres — presentado como una curiosidad divertida, no como un predictor de identidad. Inspirado en html-css-js-projects #37."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "search",
      "autocomplete",
      "animation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "20-boothstrip",
    "title": {
      "en": "Boothstrip",
      "es": "Boothstrip"
    },
    "hidden": false,
    "description": {
      "en": "A photo-booth themed avatar generator: type a name, pull the lever, and eight DiceBear avatar styles print out as a classic film strip you can download as a real PNG. Reimagined from html-css-js-projects #30.",
      "es": "Generador de avatares con temática de fotomatón: escribe un nombre, tira de la palanca y ocho estilos de avatar de DiceBear se \"imprimen\" como una tira de fotos clásica que puedes descargar como PNG real. Inspirado en html-css-js-projects #30."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "avatar",
      "canvas",
      "animation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "21-umbra",
    "title": {
      "en": "Umbra",
      "es": "Umbra"
    },
    "hidden": false,
    "description": {
      "en": "A box-shadow generator reframed as a stage-lighting console: vertical faders for light position, diffusion and spread, plus colored gel swatches for the shadow tint, all live-previewed on a spotlit stage. Reimagined from html-css-js-projects #40.",
      "es": "Generador de box-shadow presentado como una consola de iluminación de teatro: faders verticales para posición de luz, difusión y expansión, además de geles de color para teñir la sombra, todo con vista previa en vivo sobre un escenario iluminado. Inspirado en html-css-js-projects #40."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "css-generator",
      "range-input",
      "clipboard"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "22-sealed",
    "title": {
      "en": "Sealed",
      "es": "Sealed"
    },
    "hidden": false,
    "description": {
      "en": "A newsletter signup styled like fine stationery: an envelope with a folded flap that gets pressed shut with an animated wax seal the moment you subscribe. Reimagined from html-css-js-projects #16.",
      "es": "Formulario de suscripción con estilo de papelería fina: un sobre con solapa doblada que se sella con un lacre animado en el momento de suscribirte. Inspirado en html-css-js-projects #16."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "forms",
      "validation",
      "animation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "23-wavelength",
    "title": {
      "en": "Wavelength",
      "es": "Wavelength"
    },
    "hidden": false,
    "description": {
      "en": "A contact page reframed as a vintage radio console: a broadcast panel with frequency-style contact readouts on one side, and a \"transmit\" form with a simulated send and signal-ping loading state on the other. Reimagined from html-css-js-projects #18.",
      "es": "Página de contacto presentada como una consola de radio vintage: un panel de transmisión con datos de contacto tipo frecuencia de radio a un lado, y un formulario de \"transmisión\" con envío simulado y estado de carga tipo pulso de señal al otro. Inspirado en html-css-js-projects #18."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "forms",
      "layout",
      "animation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "24-ledger",
    "title": {
      "en": "Ledger",
      "es": "Ledger"
    },
    "hidden": false,
    "description": {
      "en": "An expense tracker styled like a classic green columnar accounting pad — ruled rows, a stamped balance total, and an income/expense toggle instead of typing negative numbers. Persists to localStorage. Reimagined from html-css-js-projects #04.",
      "es": "Un rastreador de gastos con estilo de libreta contable verde clásica — filas rayadas, un total sellado y un interruptor de ingreso/gasto en vez de escribir números negativos. Persiste en localStorage. Inspirado en html-css-js-projects #04."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "localStorage",
      "forms",
      "animation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "25-beltline",
    "title": {
      "en": "Beltline",
      "es": "Beltline"
    },
    "hidden": false,
    "description": {
      "en": "A shopping cart reframed as a checkout-lane conveyor belt: hazard-stripe accents, a red scanner beam that sweeps across an item whenever its quantity changes, and a printed-receipt order summary. Reimagined from html-css-js-projects #36.",
      "es": "Un carrito de compras presentado como una banda transportadora de caja registradora: acentos con rayas de advertencia, un haz de escáner rojo que recorre un producto al cambiar su cantidad, y un resumen de pedido tipo recibo impreso. Inspirado en html-css-js-projects #36."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "cart",
      "state",
      "animation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "26-bureau",
    "title": {
      "en": "Bureau",
      "es": "Bureau"
    },
    "hidden": false,
    "description": {
      "en": "A currency converter styled like a premium bureau de change counter: navy and gold, an instant live conversion as you type, and a spring-loaded swap button. Runs on a curated fixed-rate table instead of a live exchange-rate API. Reimagined from html-css-js-projects #13.",
      "es": "Conversor de divisas con estilo de mostrador de cambio de divisas premium: azul marino y dorado, conversión instantánea mientras escribes, y un botón de intercambio con animación tipo resorte. Funciona con una tabla de tasas fija y curada en vez de una API de cambio en vivo. Inspirado en html-css-js-projects #13."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "currency",
      "conversion",
      "animation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "27-pinboard",
    "title": {
      "en": "Pinboard",
      "es": "Pinboard"
    },
    "hidden": false,
    "description": {
      "en": "A corkboard-styled Kanban task board: pinned sticky notes you drag between three columns (or reorder within one) with a custom pointer-based drag engine built for touch, not the native HTML5 drag API. Persists to localStorage. Reimagined from html-css-js-projects #03, scoped up to match Frontend Mentor's Advanced-tier \"Kanban board\" challenge.",
      "es": "Tablero Kanban con estilo de corcho: notas adhesivas ancladas que arrastras entre tres columnas (o reordenas dentro de una) con un motor de arrastre propio basado en eventos de puntero, pensado para funcionar también en pantallas táctiles, no la API nativa de HTML5. Persiste en localStorage. Inspirado en html-css-js-projects #03, con el alcance ampliado para acercarse al reto \"Kanban board\" de nivel Advanced de Frontend Mentor."
    },
    "difficulty": "advanced",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "drag-and-drop",
      "localStorage",
      "animation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "28-scanline",
    "title": {
      "en": "Scanline",
      "es": "Scanline"
    },
    "hidden": false,
    "description": {
      "en": "A real QR code generator (URL, text, Wi-Fi network, or contact card), with adjustable colors, error-correction level, an optional center logo, and PNG/SVG export. Encoding runs through an actual QR algorithm, not a hotlinked image API, and every combination is verified to actually decode. Reimagined from html-css-js-projects #33, scoped up to match Frontend Mentor's Advanced tier.",
      "es": "Un generador de códigos QR de verdad (URL, texto, red Wi-Fi o tarjeta de contacto), con colores ajustables, nivel de corrección de errores, logo opcional en el centro y exportación a PNG/SVG. La codificación corre sobre un algoritmo QR real, no una API de imágenes, y cada combinación se verificó para asegurar que realmente se puede escanear. Inspirado en html-css-js-projects #33, con el alcance ampliado para acercarse al nivel Advanced de Frontend Mentor."
    },
    "difficulty": "advanced",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "canvas",
      "QR code",
      "export"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "29-swatchbook",
    "title": {
      "en": "Swatchbook",
      "es": "Swatchbook"
    },
    "hidden": false,
    "description": {
      "en": "A color palette generator built on real color theory (complementary, analogous, triadic, split-complementary, monochromatic schemes) instead of pure random RGB noise, styled as a set of physical paint chips. Lock a chip, press space to reshuffle the rest, check WCAG contrast at a glance, and copy as CSS variables. Reimagined from html-css-js-projects #02, scoped up to match the Advanced tier on Frontend Mentor.",
      "es": "Generador de paletas de color basado en teoría del color real (esquemas complementario, análogo, triádico, complementario dividido y monocromático) en vez de ruido RGB puramente aleatorio, presentado como un set de muestras físicas de pintura. Bloquea una muestra, presiona espacio para mezclar el resto, revisa el contraste WCAG de un vistazo y copia como variables CSS. Inspirado en html-css-js-projects #02, con el alcance ampliado para acercarse al nivel Advanced en Frontend Mentor."
    },
    "difficulty": "advanced",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "color-theory",
      "accessibility",
      "clipboard"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "30-mise",
    "title": {
      "en": "Mise",
      "es": "Mise"
    },
    "hidden": false,
    "description": {
      "en": "A recipe finder backed by the live TheMealDB API, with category filters, a random-recipe shuffle, localStorage favorites, and a GSAP Flip transition that morphs a clicked card straight into its full recipe view. Reimagined from html-css-js-projects #12, scoped up to match the Advanced tier on Frontend Mentor.",
      "es": "Buscador de recetas conectado en vivo a la API de TheMealDB, con filtros por categoría, una receta aleatoria, favoritos en localStorage y una transición GSAP Flip que convierte la tarjeta en la que haces clic directamente en su vista de receta completa. Inspirado en html-css-js-projects #12, con el alcance ampliado para acercarse al nivel Advanced en Frontend Mentor."
    },
    "difficulty": "advanced",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "API",
      "localStorage"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "31-pokedex",
    "title": {
      "en": "Dex Unit 01",
      "es": "Dex Unit 01"
    },
    "hidden": false,
    "description": {
      "en": "Not a plain search box: a clamshell handheld that flips open on a GSAP timeline, runs a CRT boot sequence with blinking LEDs, then scans live PokeAPI entries onto its screen — animated stat bars, type badges, shiny toggle and entry-to-entry navigation. Reimagined from html-css-js-projects #46, scoped up to match the Advanced tier on Frontend Mentor.",
      "es": "No es una caja de búsqueda plana: un dispositivo tipo concha que se abre con una timeline de GSAP, corre una secuencia de arranque tipo CRT con LEDs parpadeando, y luego escanea entradas en vivo de PokeAPI sobre su pantalla — barras de stats animadas, insignias de tipo, modo shiny y navegación entre entradas. Inspirado en html-css-js-projects #46, con el alcance ampliado para acercarse al nivel Advanced en Frontend Mentor."
    },
    "difficulty": "advanced",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "API",
      "3d-transforms"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "32-overtake",
    "title": {
      "en": "Overtake",
      "es": "Overtake"
    },
    "hidden": false,
    "description": {
      "en": "A live broadcast-style leaderboard where the standings actually move: scores tick up on a simulated feed and rows physically slide past each other using the FLIP technique with GSAP, flashing a rank-change delta as they overtake. Play/pause the feed or force a shake-up round. Reimagined from html-css-js-projects #52, which shipped as a static list with no script at all.",
      "es": "Un leaderboard estilo transmisión en vivo donde las posiciones realmente se mueven: los puntajes suben con un feed simulado y las filas se adelantan físicamente entre ellas usando la técnica FLIP con GSAP, mostrando el cambio de posición al rebasar. Puedes pausar el feed o forzar una ronda de cambios. Inspirado en html-css-js-projects #52, que venía como una lista estática sin script alguno."
    },
    "difficulty": "advanced",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "FLIP",
      "animation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  }
] as Project[];