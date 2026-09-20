import{b as E,g as r,e as H,h as z,t as L,W,c as D,O as X,P as _,d as G,V as y,M as N,f as A,S as q,i as g,a as V,T as R,j as Y,k as S,l as b,m as K,w as k}from"./animated-copy-RwOj4JyF.js";import"./footer-nr4OpydQ.js";document.addEventListener("DOMContentLoaded",J);function J(){const o=sessionStorage.getItem(E.preloaderSeen)==="true",e=document.querySelector(".preloader");if(e){if(o){e.style.display="none";return}document.documentElement.classList.add("is-loading"),window.lenis?.stop(),Q()}}function Q(){const o=document.querySelector(".progress-bar-indicator"),e=document.querySelector(".progress-value"),t=document.querySelector(".progress-bar");if(!o||!e||!t)return;r.to(t,{opacity:1,duration:.075,ease:"power2.inOut",delay:.5,repeat:1,yoyo:!0,onComplete:()=>{r.set(t,{opacity:1}),n()}});function n(){let a=0;const l=5;let s=0;const c=Z(l);function i(){if(s>=l){ee();return}const d=c[s],u=Math.min(a+d,100),U=200+Math.random()*400;setTimeout(()=>{r.to(o,{"--progress":u/100,duration:.5,ease:"power2.out",onUpdate:()=>{const B=Math.round(r.getProperty(o,"--progress")*100);e.textContent=`${B}%`},onComplete:()=>{a=u,s++,i()}})},U)}i()}}function Z(o){const e=[];let t=100;const n=30;for(let a=0;a<o-1;a++){const l=Math.min(n,t-(o-1-a)),s=Math.max(5,Math.floor(t/(o-a)*.5)),c=Math.floor(Math.random()*(l-s))+s;e.push(c),t-=c}return e.push(t),e.sort(()=>Math.random()-.5)}function ee(){const o=document.querySelector(".progress-bar"),e=document.querySelector(".preloader-enter"),t=e?[...e.querySelectorAll("[data-enter]")]:[];r.to(o,{opacity:0,duration:.075,ease:"power2.inOut",delay:.3,repeat:1,yoyo:!0,onComplete:()=>{if(r.set(o,{opacity:0,display:"none"}),!e){P();return}e.hidden=!1,r.fromTo(e.children,{opacity:0},{opacity:1,duration:.06,repeat:3,yoyo:!1,stagger:.08,ease:"steps(1)",onComplete:()=>t[0]?.focus({preventScroll:!0})}),t.forEach(n=>n.addEventListener("click",()=>{n.dataset.enter==="sound"&&H(),r.to(e,{opacity:0,duration:.06,repeat:1,yoyo:!0,onComplete:()=>{e.hidden=!0,P()}})},{once:!0}))}})}function P(){const o=document.querySelector(".preloader"),e=document.querySelectorAll(".preloader-block");if(!o)return;sessionStorage.setItem(E.preloaderSeen,"true"),document.documentElement.classList.remove("is-loading"),window.lenis?.start(),window.__preloaderDone=!0,window.dispatchEvent(new Event("preloader:complete"));const t=[...e].sort(()=>Math.random()-.5);t.forEach((n,a)=>{r.to(n,{opacity:0,duration:.075,ease:"power2.inOut",delay:.1+a*.025,repeat:1,yoyo:!0,onComplete:()=>{r.set(n,{opacity:0}),a===t.length-1&&(o.style.display="none")}})})}const v=z(L.bg),w=z(L.fg),te=document.getElementById("skyline"),oe=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),re=oe?1:1.25,h=new W({canvas:te,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!1}),I=new D,ne=new X(-1,1,1,-1,0,1),$=new _(2,2),f=new G({uniforms:{iTime:{value:0},iResolution:{value:new y},uColorBg:{value:new y(v.r,v.g,v.b)},uColorFg:{value:new y(w.r,w.g,w.b)},uPulse:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,fragmentShader:`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif

    uniform float iTime;
    uniform vec3 iResolution;
    uniform vec3 uColorBg;
    uniform vec3 uColorFg;
    uniform float uPulse;
    varying vec2 vUv;

    float hash(float n) {
      return fract(sin(n) * 43758.5453123);
    }

    float hash2(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      float a = hash2(i);
      float b = hash2(i + vec2(1.0, 0.0));
      float c = hash2(i + vec2(0.0, 1.0));
      float d = hash2(i + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    // niebla: dos octavas bastan y esto corre en cada píxel
    float fog(vec2 p) {
      return 0.65 * noise(p) + 0.35 * noise(p * 2.07);
    }

    // Una fila de edificios, en unidades cuadradas: 1 unidad = el ancho de una
    // columna, en x y en y, para que las ventanas salgan cuadradas.
    //   x = máscara del edificio (1 dentro)
    //   y = luz de las ventanas
    //   z = baliza en la azotea
    vec3 block(vec2 uv, float seed, float hmax, float windowSize) {
      float column = floor(uv.x);
      float local = fract(uv.x);

      // ancho irregular: algunas columnas se fusionan con la vecina
      float merge = step(0.72, hash(column * 1.7 + seed));
      float id = column - merge;
      float rnd = hash(id * 7.31 + seed);

      float height = (0.30 + rnd * 0.70) * hmax;
      // escalón: la silueta no siempre termina plana
      float stepped = step(0.58, hash(id * 3.17 + seed));
      float inner = step(0.24, local) * step(local, 0.76);
      height -= stepped * inner * hmax * 0.22 * hash(id * 5.11 + seed);

      float body = step(uv.y, height) * step(0.0, uv.y);

      // ventanas: rejilla cuadrada dentro del edificio
      vec2 grid = floor(uv / windowSize);
      vec2 cell = fract(uv / windowSize);
      float pane =
        step(0.26, cell.x) * step(cell.x, 0.74) *
        step(0.28, cell.y) * step(cell.y, 0.72);
      float lit = step(0.74, hash2(grid + seed));
      // unas pocas parpadean de vez en cuando
      float flicker = step(0.992, hash2(grid + floor(iTime * 1.6) * 13.0 + seed));
      float rim = step(uv.y, height - windowSize * 0.5);
      float windows = body * pane * rim *
        max(lit * (0.35 + 0.65 * hash2(grid * 1.3 + seed)), flicker);

      // baliza roja parpadeante en algunas azoteas
      float hasLight = step(0.84, hash(id * 11.7 + seed));
      float blink = 0.5 + 0.5 * sin(iTime * 2.2 + rnd * 20.0);
      float dist = length(vec2(local - 0.5, (uv.y - height - windowSize * 0.6) * 1.2));
      float beacon = hasLight * blink * smoothstep(windowSize * 0.45, 0.0, dist);

      return vec3(body, windows, beacon);
    }

    void main() {
      vec2 uv = vUv;
      float aspect = iResolution.x / max(iResolution.y, 1.0);

      // cielo negro arriba, bruma azul pegada al horizonte, más viva con el kick
      float haze = 0.30 + uPulse * 0.32;
      float horizon = smoothstep(0.75, -0.05, uv.y);
      vec3 color = mix(uColorBg, uColorFg * haze, horizon * 0.85);

      // estrellas tenues en la parte alta
      vec2 sp = floor(vec2(uv.x * aspect, uv.y) * 240.0);
      float star = step(0.9977, hash2(sp));
      float twinkle = 0.55 + 0.45 * sin(iTime * 2.0 + hash2(sp) * 40.0);
      color += uColorFg * star * twinkle * 0.45 * smoothstep(0.42, 1.0, uv.y);

      // cinco filas de edificios, de la más lejana a la más cercana.
      // La ciudad vive en la franja baja: arriba queda cielo.
      // en pantallas estrechas los edificios se estrechan también: si no,
      // en un móvil caben cuatro manzanas y la ciudad deja de leerse
      float dense = clamp(iResolution.x / 1600.0, 0.5, 1.25);

      for (int i = 0; i < 5; i++) {
        float f = float(i);
        float depth = 1.0 - f / 4.0;              // 1 = lejos, 0 = cerca
        float scale = (34.0 - f * 5.5) / dense;   // unidades por alto de pantalla
        float ground = 0.30 - f * 0.065;          // dónde apoya cada fila
        float hmax = (0.21 + f * 0.05) * scale;   // alto máximo, en unidades

        vec2 p = vec2(
          uv.x * aspect * scale + iTime * (0.3 + f * 0.45) + f * 31.7,
          (uv.y - ground) * scale
        );
        vec3 b = block(p, f * 17.3, hmax, 0.26 + f * 0.035);

        // la bruma aclara lo lejano y oscurece lo cercano
        vec3 silhouette = mix(uColorBg * 0.15, uColorFg * 0.2, depth * depth);
        color = mix(color, silhouette, b.x);
        color += uColorFg * b.y * (0.32 + (1.0 - depth) * 0.45);
        color += vec3(1.0, 0.32, 0.26) * b.z * 0.55;
      }

      // niebla baja entre las filas
      float mist = fog(vec2(uv.x * aspect * 2.4 + iTime * 0.06, uv.y * 3.2 - iTime * 0.02));
      color = mix(color, uColorFg * (0.14 + uPulse * 0.10), mist * smoothstep(0.38, 0.0, uv.y) * 0.45);

      // lluvia en primer plano: dos capas de gotas alargadas
      for (int r = 0; r < 2; r++) {
        float fr = float(r);
        vec2 rp = vec2(uv.x * aspect, uv.y) * (56.0 - fr * 20.0);
        rp.x += rp.y * 0.12;
        float col = floor(rp.x);
        float off = hash(col + fr * 7.0);
        float y = fract(rp.y + off * 10.0 + iTime * (7.0 + off * 5.0));
        float drop = smoothstep(0.0, 0.06, y) * smoothstep(0.30, 0.02, y);
        float line = smoothstep(0.34, 0.0, abs(fract(rp.x) - 0.5));
        float alive = step(0.6, off);
        color += uColorFg * drop * line * alive * (0.05 - fr * 0.015);
      }

      // viñeta para que el texto del hero respire
      float vig = smoothstep(1.35, 0.35, length((vUv - 0.5) * vec2(aspect, 1.0)));
      color *= 0.7 + 0.3 * vig;

      // grano fino, en el mismo espíritu que el resto del sitio
      float grain = hash2(vUv * iResolution.xy + fract(iTime)) - 0.5;
      color += grain * 0.015;

      gl_FragColor = vec4(color, 1.0);
    }
  `,depthTest:!1,depthWrite:!1}),ae=new N($,f);I.add(ae);let M;function T(){clearTimeout(M),M=setTimeout(()=>{const o=window.innerWidth,e=window.innerHeight;h.setSize(o,e),h.setPixelRatio(Math.min(window.devicePixelRatio,re)),f.uniforms.iResolution.value.set(o,e,1)},100)}let O=!0,x=0;function C(o){O=o}function j(o){if(requestAnimationFrame(j),!O)return;const{kick:e}=A();x+=(e-x)*.35,f.uniforms.uPulse.value=x,f.uniforms.iTime.value=o*.001,h.render(I,ne)}function F(){$.dispose(),f.dispose(),h.dispose(),window.removeEventListener("resize",T),window.removeEventListener("beforeunload",F)}T();window.addEventListener("resize",T);window.addEventListener("beforeunload",F);requestAnimationFrame(j);r.registerPlugin(q,g);const m=window.matchMedia("(prefers-reduced-motion: reduce)").matches,se=window.matchMedia("(hover: hover) and (pointer: fine)").matches,p="expo.out",ie=Date.UTC(2026,10,13,6,0,0);ce();le();ue();document.addEventListener("DOMContentLoaded",()=>{document.fonts.ready.then(()=>{de(),me(),fe(),pe(),he(),ge(),ye(),ve(),we(),q.refresh()})});function ce(){document.querySelectorAll(".inline-img[data-img]").forEach(o=>{o.style.backgroundImage=`url("${V(o.dataset.img)}")`,o.setAttribute("aria-hidden","true")})}function le(){const o=document.querySelector(".home-tracks-rail");o&&(o.innerHTML=R.map((e,t)=>{const n=e.feat?`<p class="type-mono track-card-feat">feat. ${e.feat}</p>`:"";return`
      <a class="track-card" href="${Y(e)}" data-cursor="${S("cursor.view")}">
        <span class="track-card-num" aria-hidden="true">${b(t)}</span>
        <figure class="track-card-media">
          <img src="${K(t)}" alt="" loading="lazy" />
        </figure>
        <div class="track-card-info">
          <div>
            <h3>${e.title}</h3>
            ${n}
          </div>
          <p class="type-mono track-card-meta">
            <span>${e.length}</span><span>${e.bpm} BPM</span><span>${e.key}</span>
          </p>
        </div>
        <p class="track-card-tagline">${S(e.tagline)}</p>
      </a>
    `}).join(""))}function ue(){const o=document.querySelector(".marquee-track"),e=o?.querySelector(".marquee-item");if(!e)return;const t=Array.from({length:4},()=>e.outerHTML).join("");o.innerHTML=t+t}function de(){const o=r.utils.toArray(".hero-word > span"),e=document.querySelector(".hero-cover-inner"),t=e?.querySelector("img"),n=o.flatMap(a=>g.create(a,{type:"chars"}).chars);if(m){r.set(e,{opacity:0}),r.set(n,{opacity:0}),k(()=>{r.to([e,...n],{opacity:1,duration:.6,ease:"power1.out"})});return}r.set(n,{yPercent:105}),r.set(e,{clipPath:"inset(50% 0% 50% 0%)"}),r.set(t,{scale:1.35}),k(()=>{r.timeline({delay:.15}).to(e,{clipPath:"inset(0% 0% 0% 0%)",duration:1.4,ease:"expo.inOut"},0).to(t,{scale:1,duration:2,ease:p},.2).to(n,{yPercent:0,duration:1.3,ease:p,stagger:{each:.045,from:"center"}},.35)})}function me(){if(!se||m)return;const o=document.querySelector(".hero-cover"),e=o?.querySelector(".hero-cover-inner"),t=o?.querySelector(".hero-cover-shine");if(!e)return;const n=r.quickTo(e,"rotationX",{duration:.9,ease:"power3.out"}),a=r.quickTo(e,"rotationY",{duration:.9,ease:"power3.out"}),l=r.quickTo(t,"xPercent",{duration:.9,ease:"power3.out"});window.addEventListener("pointermove",s=>{const c=s.clientX/window.innerWidth-.5,i=s.clientY/window.innerHeight-.5;a(c*16),n(-i*12),l(c*120)})}function fe(){const o=document.querySelector(".hero-cover");if(!o||m)return;const e=document.createElement("span");e.className="hero-cover-glow",o.prepend(e);let t=0;r.ticker.add(()=>{const{kick:n}=A();t+=(n-t)*.3,e.style.opacity=String(.35+t*.65),e.style.transform=`scale(${1+t*.12})`})}function pe(){const o=document.querySelector(".hero"),e=document.querySelector(".home-bg-fade");q.create({trigger:".manifesto",start:"top bottom",end:"top 20%",scrub:!0,animation:r.fromTo(e,{opacity:0},{opacity:1,ease:"none"}),onUpdate:t=>C(t.progress<.99),onLeaveBack:()=>C(!0)}),!m&&r.timeline({scrollTrigger:{trigger:o,start:"top top",end:"bottom top",scrub:!0}}).to(".hero-word[data-word='left']",{xPercent:-22,ease:"none"},0).to(".hero-word[data-word='right']",{xPercent:22,ease:"none"},0).to(".hero-title",{opacity:.15,ease:"none"},0).to(".hero-stage",{yPercent:-18,scale:.86,opacity:0,ease:"none"},0).to(".hero-top, .hero-footer",{opacity:0,ease:"none"},0)}function he(){const o=document.querySelector(".manifesto-copy");if(!o)return;const e=g.create(o,{type:"words",wordsClass:"manifesto-word"}),t=o.querySelectorAll(".inline-img"),n=document.querySelectorAll(".manifesto-meta li");if(m)return;r.set(e.words,{opacity:.14}),r.set(t,{clipPath:"inset(0% 50% 0% 50% round 999px)"});const a=r.timeline({scrollTrigger:{trigger:o,start:"top 78%",end:"bottom 45%",scrub:!0}});a.to(e.words,{opacity:1,ease:"none",stagger:.1,duration:.3},0);const l=e.words.length*.1;t.forEach(s=>{const c=s.nextElementSibling,i=Math.max(0,e.words.indexOf(c));a.to(s,{clipPath:"inset(0% 0% 0% 0% round 999px)",ease:"none",duration:.6},Math.max(0,i/e.words.length*l-.3))}),r.from(n,{opacity:0,y:16,duration:.8,ease:p,stagger:.1,scrollTrigger:{trigger:".manifesto-meta",start:"top 90%",once:!0}})}function ge(){const o=document.querySelector(".home-tracks"),e=o?.querySelector(".home-tracks-pin"),t=o?.querySelector(".home-tracks-rail"),n=o?.querySelector(".home-tracks-bar i"),a=o?.querySelector(".home-tracks-count");if(!t)return;const l=R.length,s=i=>{const d=Math.min(l,Math.floor(i*l)+1);a.textContent=`${b(d-1)} / ${b(l-1)}`},c=r.matchMedia();c.add("(min-width: 1001px) and (prefers-reduced-motion: no-preference)",()=>{const i=()=>t.scrollWidth-window.innerWidth,d=r.to(t,{x:()=>-i(),ease:"none",scrollTrigger:{trigger:e,start:"top top",end:()=>`+=${i()}`,pin:!0,scrub:!0,invalidateOnRefresh:!0,onUpdate:u=>{r.set(n,{scaleX:u.progress}),s(u.progress)}}});t.querySelectorAll(".track-card-media img").forEach(u=>{r.fromTo(u,{xPercent:-7},{xPercent:7,ease:"none",scrollTrigger:{trigger:u.closest(".track-card"),containerAnimation:d,start:"left right",end:"right left",scrub:!0}})})}),c.add("(max-width: 1000px), (prefers-reduced-motion: reduce)",()=>{const i=()=>{const d=t.scrollWidth-t.clientWidth,u=d>0?t.scrollLeft/d:0;r.set(n,{scaleX:u}),s(u)};return t.addEventListener("scroll",i,{passive:!0}),i(),()=>t.removeEventListener("scroll",i)})}function ye(){const o=r.utils.toArray(".artist-name-line"),e=r.utils.toArray(".artist-photo");!o.length||m||(o.forEach(t=>{const{chars:n}=g.create(t,{type:"chars",mask:"chars",charsClass:"char"});r.from(n,{yPercent:110,duration:1.2,ease:p,stagger:.04,scrollTrigger:{trigger:t,start:"top 85%",once:!0}})}),e.forEach(t=>{const n=t.querySelector("img");r.fromTo(t,{clipPath:"inset(100% 0% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1.4,ease:"expo.inOut",scrollTrigger:{trigger:t,start:"top 88%",once:!0}}),r.fromTo(n,{scale:1.25},{scale:1,duration:2,ease:p,scrollTrigger:{trigger:t,start:"top 88%",once:!0}});const a=parseFloat(t.dataset.speed)||0;r.fromTo(t,{yPercent:a},{yPercent:-a,ease:"none",scrollTrigger:{trigger:t,start:"top bottom",end:"bottom top",scrub:!0}})}))}function ve(){const o=document.querySelector(".marquee-track");if(!o||m)return;const e=r.to(o,{xPercent:-50,duration:40,ease:"none",repeat:-1});let t=0;window.lenis?.on("scroll",({velocity:n})=>{t=Math.min(6,Math.abs(n)*.25)}),r.ticker.add(()=>{t*=.92,e.timeScale(1+t)})}function we(){const o={days:document.querySelector('[data-unit="days"]'),hours:document.querySelector('[data-unit="hours"]'),minutes:document.querySelector('[data-unit="minutes"]'),seconds:document.querySelector('[data-unit="seconds"]')};if(!o.days)return;const e=n=>String(n).padStart(2,"0");function t(){const n=ie-Date.now();if(n<=0){const s=document.querySelector(".countdown");return s.innerHTML=`<span class="countdown-value countdown-out">${S("home.release.out")}</span>`,!1}const a=Math.floor(n/1e3),l={days:e(Math.floor(a/86400)),hours:e(Math.floor(a%86400/3600)),minutes:e(Math.floor(a%3600/60)),seconds:e(a%60)};return Object.entries(l).forEach(([s,c])=>{const i=o[s];i.textContent!==c&&(i.textContent=c,m||r.fromTo(i,{opacity:.25},{opacity:1,duration:.12,ease:"steps(2)"}))}),!0}if(t()){const n=setInterval(()=>{t()||clearInterval(n)},1e3)}}
