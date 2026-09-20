import{T as u,j as c,m,k as w,l as v,c as p,n as f,W as S,P as y,d as g,G as x,o as d,M,p as z}from"./animated-copy-RwOj4JyF.js";import"./footer-nr4OpydQ.js";const C=`
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
    float bend = dist * dist * uScrollVelocity * 7.5;
    pos.z += bend;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,E=`
  precision highp float;
  uniform sampler2D uTexture;
  in vec2 vUvCover;
  out vec4 outColor;

  void main() {
    outColor = vec4(texture(uTexture, vUvCover).rgb, 1.0);
  }
`;function P(){const a=document.querySelector(".tracklist-items .container");a&&(a.innerHTML=u.map((e,i)=>{const s=e.feat?` <span>(feat. ${e.feat})</span>`:"";return`
      <div class="tracklist-item-row">
        <a href="${c(e)}">
          <div class="tracklist-item">
            <img src="${m(i)}" alt="${e.title} — ${w(e.tagline)}" />
            <div class="tracklist-item-info">
              <p>${v(i)} — ${e.title}${s}</p>
              <p>${e.length}</p>
            </div>
          </div>
        </a>
      </div>`}).join(""))}P();class T{constructor(){this.scrollVelocity=0,this.smoothVelocity=0,this.mediaStore=[],this.scene=null,this.camera=null,this.renderer=null,this.geometry=null,this.material=null,this.isMobile=window.innerWidth<1e3,this.init()}init(){this.setupScene(),this.setupCamera(),this.setupRenderer(),this.setupGeometry(),this.setupMaterial(),this.createMeshes(),this.setupLenisListener(),this.addEventListeners(),this.render()}setupScene(){this.scene=new p}setupCamera(){const i=s=>2*Math.atan(window.innerHeight/2/s)*180/Math.PI;this.camera=new f(50,window.innerWidth/window.innerHeight,10,1e3),this.camera.position.z=400,this.camera.fov=i(400),this.camera.updateProjectionMatrix()}setupRenderer(){this.isMobile||(this.renderer=new S({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.domElement.style.position="fixed",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",this.renderer.domElement.style.pointerEvents="none",this.renderer.domElement.style.zIndex="10",document.body.appendChild(this.renderer.domElement))}setupGeometry(){this.geometry=new y(1,1,100,100)}setupMaterial(){this.material=new g({uniforms:{uScrollVelocity:{value:0},uTexture:{value:null},uTextureSize:{value:new d(100,100)},uQuadSize:{value:new d(100,100)}},vertexShader:C,fragmentShader:E,glslVersion:x})}createMeshes(){const e=window.scrollY||window.pageYOffset,i=[...document.querySelectorAll(".tracklist-item img")],s=t=>new Promise(r=>{t.complete&&t.naturalWidth>0?r(t):(t.onload=()=>r(t),t.onerror=()=>r(t))});Promise.all(i.map(s)).then(t=>{this.mediaStore=t.map(r=>{r.style.opacity=this.isMobile?"1":"0";const n=r.getBoundingClientRect(),o=this.material.clone(),l=new M(this.geometry,o),h=new z(r);return h.needsUpdate=!0,o.uniforms.uTexture.value=h,o.uniforms.uTextureSize.value.x=r.naturalWidth||1,o.uniforms.uTextureSize.value.y=r.naturalHeight||1,o.uniforms.uQuadSize.value.x=n.width,o.uniforms.uQuadSize.value.y=n.height,l.scale.set(n.width,n.height,1),this.isMobile||this.scene.add(l),{media:r,material:o,mesh:l,width:n.width,height:n.height,top:n.top+e,left:n.left}})})}setupLenisListener(){const e=()=>{window.lenis?window.lenis.on("scroll",({velocity:i})=>{this.scrollVelocity=i}):setTimeout(e,50)};e()}setPositions(){const e=window.scrollY||window.pageYOffset;this.mediaStore.forEach(i=>{const s=i.left-window.innerWidth/2+i.width/2,t=-i.top+e+window.innerHeight/2-i.height/2;i.mesh.position.x=s,i.mesh.position.y=t})}addEventListeners(){window.addEventListener("resize",()=>this.handleResize())}handleResize(){const e=this.isMobile;if(this.isMobile=window.innerWidth<1e3,this.isMobile!==e){this.toggleMode();return}if(this.isMobile)return;this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight);const i=window.scrollY||window.pageYOffset;this.mediaStore.forEach(s=>{const t=s.media.getBoundingClientRect();s.width=t.width,s.height=t.height,s.top=t.top+i,s.left=t.left,s.mesh.scale.set(t.width,t.height,1),s.material.uniforms.uQuadSize.value.x=t.width,s.material.uniforms.uQuadSize.value.y=t.height})}toggleMode(){this.isMobile?(this.renderer&&(this.renderer.domElement.style.display="none"),this.mediaStore.forEach(e=>{e.media.style.opacity="1"})):(this.renderer||this.setupRenderer(),this.renderer&&(this.renderer.domElement.style.display="block"),this.mediaStore.forEach(e=>{e.media.style.opacity="0",this.scene.children.includes(e.mesh)||this.scene.add(e.mesh)}))}render(){if(this.isMobile){requestAnimationFrame(()=>this.render());return}this.smoothVelocity+=(this.scrollVelocity-this.smoothVelocity)*.1,this.mediaStore.forEach(e=>{e.material.uniforms.uScrollVelocity.value=this.smoothVelocity}),this.setPositions(),this.renderer&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(()=>this.render())}}document.addEventListener("DOMContentLoaded",()=>new T);
