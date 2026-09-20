import{T as u,L as x,a as v,k as c,l as f,j as M,c as z,n as k,W as E,P as C,d as P,G as L,o as p,M as T,p as R}from"./animated-copy-RwOj4JyF.js";import"./footer-nr4OpydQ.js";const V=new URLSearchParams(window.location.search).get("t");let h=u.findIndex(a=>a.slug===V);h===-1&&(h=u.findIndex(a=>a.slug===x));const s=u[h],y=u[(h+1)%u.length];function n(a,e){const i=document.getElementById(a);i&&(i.textContent=e)}document.title=`${s.title} — Santo Vøid`;const S=document.getElementById("track-hero-img");S.src=v(`shoot/wide-${h%3+1}.jpg`);S.alt=s.title;const g=[...document.querySelectorAll(".track-img img")];g.forEach((a,e)=>{a.src=v(`shoot/gallery-${(h+e)%g.length+1}.jpg`)});n("track-title",s.title);n("track-tagline",c(s.tagline));n("track-number",`Track ${f(h)} / ${f(u.length-1)}`);n("track-feat-meta",s.feat?`feat. ${s.feat}`:"Solo");n("track-about",c(s.about));n("track-producer",s.producer);n("track-feat",s.feat??c("track.none"));n("track-outro",c(s.outro));n("track-length",s.length);n("track-bpm",`${s.bpm} BPM`);n("track-key",s.key);n("track-recorded",c(s.recorded));document.getElementById("track-next").href=M(y);n("track-next-title",y.title);const A=`
  uniform float uScrollVelocity;
  uniform vec2 uTextureSize;
  uniform vec2 uQuadSize;
  out vec2 vUvCover;

  vec2 getCoverUv(vec2 uv, vec2 textureSize, vec2 quadSize) {
    vec2 ratio = vec2(
      min((quadSize.x / quadSize.y) / (textureSize.x / textureSize.y), 1.0),
      min((quadSize.y / quadSize.x) / (textureSize.y / textureSize.x), 1.0)
    );
    return vec2(
      uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      uv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );
  }

  void main() {
    vUvCover = getCoverUv(uv, uTextureSize, uQuadSize);
    vec3 pos = position;
    float dist = length(uv - vec2(0.5));
    float bend = dist * dist * uScrollVelocity * 5.0;
    pos.z += bend;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,b=`
  precision highp float;
  uniform sampler2D uTexture;
  in vec2 vUvCover;
  out vec4 outColor;

  void main() {
    outColor = vec4(texture(uTexture, vUvCover).rgb, 1.0);
  }
`;class W{constructor(){this.scrollVelocity=0,this.smoothVelocity=0,this.mediaStore=[],this.scene=null,this.camera=null,this.renderer=null,this.geometry=null,this.material=null,this.isMobile=window.innerWidth<1e3,this.init()}init(){this.setupScene(),this.setupCamera(),this.setupRenderer(),this.setupGeometry(),this.setupMaterial(),this.createMeshes(),this.setupLenisListener(),this.addEventListeners(),this.render()}setupScene(){this.scene=new z}setupCamera(){const i=r=>2*Math.atan(window.innerHeight/2/r)*180/Math.PI;this.camera=new k(50,window.innerWidth/window.innerHeight,10,1e3),this.camera.position.z=400,this.camera.fov=i(400),this.camera.updateProjectionMatrix()}setupRenderer(){this.isMobile||(this.renderer=new E({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.domElement.style.position="fixed",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",this.renderer.domElement.style.pointerEvents="none",this.renderer.domElement.style.zIndex="10",document.body.appendChild(this.renderer.domElement))}setupGeometry(){this.geometry=new C(1,1,100,100)}setupMaterial(){this.material=new P({uniforms:{uScrollVelocity:{value:0},uTexture:{value:null},uTextureSize:{value:new p(100,100)},uQuadSize:{value:new p(100,100)}},vertexShader:A,fragmentShader:b,glslVersion:L})}createMeshes(){const e=window.scrollY||window.pageYOffset,i=[...document.querySelectorAll(".track-img img")],r=t=>new Promise(o=>{t.complete&&t.naturalWidth>0?o(t):(t.onload=()=>o(t),t.onerror=()=>o(t))});Promise.all(i.map(r)).then(t=>{this.mediaStore=t.map(o=>{o.style.opacity=this.isMobile?"1":"0";const l=o.getBoundingClientRect(),d=this.material.clone(),m=new T(this.geometry,d),w=new R(o);return w.needsUpdate=!0,d.uniforms.uTexture.value=w,d.uniforms.uTextureSize.value.x=o.naturalWidth||1,d.uniforms.uTextureSize.value.y=o.naturalHeight||1,d.uniforms.uQuadSize.value.x=l.width,d.uniforms.uQuadSize.value.y=l.height,m.scale.set(l.width,l.height,1),this.isMobile||this.scene.add(m),{media:o,material:d,mesh:m,width:l.width,height:l.height,top:l.top+e,left:l.left}})})}setupLenisListener(){const e=()=>{window.lenis?window.lenis.on("scroll",({velocity:i})=>{this.scrollVelocity=i}):setTimeout(e,50)};e()}setPositions(){const e=window.scrollY||window.pageYOffset;this.mediaStore.forEach(i=>{const r=i.left-window.innerWidth/2+i.width/2,t=-i.top+e+window.innerHeight/2-i.height/2;i.mesh.position.x=r,i.mesh.position.y=t})}addEventListeners(){window.addEventListener("resize",()=>this.handleResize())}handleResize(){const e=this.isMobile;if(this.isMobile=window.innerWidth<1e3,this.isMobile!==e){this.toggleMode();return}if(this.isMobile)return;this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight);const i=window.scrollY||window.pageYOffset;this.mediaStore.forEach(r=>{const t=r.media.getBoundingClientRect();r.width=t.width,r.height=t.height,r.top=t.top+i,r.left=t.left,r.mesh.scale.set(t.width,t.height,1),r.material.uniforms.uQuadSize.value.x=t.width,r.material.uniforms.uQuadSize.value.y=t.height})}toggleMode(){this.isMobile?(this.renderer&&(this.renderer.domElement.style.display="none"),this.mediaStore.forEach(e=>{e.media.style.opacity="1"})):(this.renderer||this.setupRenderer(),this.renderer&&(this.renderer.domElement.style.display="block"),this.mediaStore.forEach(e=>{e.media.style.opacity="0",this.scene.children.includes(e.mesh)||this.scene.add(e.mesh)}))}render(){if(this.isMobile){requestAnimationFrame(()=>this.render());return}this.smoothVelocity+=(this.scrollVelocity-this.smoothVelocity)*.1,this.mediaStore.forEach(e=>{e.material.uniforms.uScrollVelocity.value=this.smoothVelocity}),this.setPositions(),this.renderer&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(()=>this.render())}}document.addEventListener("DOMContentLoaded",()=>new W);
