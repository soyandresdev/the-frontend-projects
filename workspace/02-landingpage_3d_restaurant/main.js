// <!-- Menú móvil -->

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// <!-- THREE JS -->
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(70, 10, 50);
camera.lookAt(0, 0, 0);

// RENDERER
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  powerPreference: "high-performance",
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.75;
document.querySelector("#three-canvas").appendChild(renderer.domElement);

// LIGHTING
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(50, 50, 50);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(2048, 2048);
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffd600, 3, 50);
pointLight.position.set(4.5, 25, 25);
pointLight.decay = 5;
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xea00ff, 1.25, 50);
pointLight2.position.set(0, 10, -10);
pointLight2.decay = 2;
scene.add(pointLight2);

const pointLight3 = new THREE.PointLight(0xff4c00, 2.5, 50);
pointLight3.position.set(-20, 5, 15);
pointLight3.decay = 2;
scene.add(pointLight3);

const pointLight4 = new THREE.PointLight(0xffd600, 3, 47);
pointLight4.position.set(52, -25, 25);
pointLight4.decay = 0.5;
scene.add(pointLight4);

// BLOOM POSTPROCESSING
const composer = new THREE.EffectComposer(renderer);
const renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);

const bloomPass = new THREE.UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.6,
  1,
  0.1,
);
composer.addPass(bloomPass);

// CONTROLS
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = true;
controls.dampingFactor = 0.05;
controls.minDistance = 5;
controls.maxDistance = 100;
controls.autoRotate = true;
controls.enableZoom = true;
controls.enableRotate = true;

// MODEL LOADING
const loader = new THREE.GLTFLoader();
loader.load(
  "./assets/scene.gltf",
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // Calcular el tamaño del modelo
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());

    // Centrar el modelo en el origen
    model.position.sub(center);

    // Ajustar cámara para encuadrar bien el modelo
    const distance = size;
    camera.position.set(
      center.x + distance * 0.2,
      center.y - 0.2 * distance,
      center.z + distance * 0.7,
    );
    camera.lookAt(center.x, center.y, center.z);
    controls.target.set(center.x, center.y - distance * 0.1, center.z);
    controls.update();
  },
  undefined,
  (error) => {
    console.error("Error loading model:", error);
  },
);

// ANIMATION LOOP
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  composer.render();
  console.log("Camera Pos:", camera.position);
  console.log("Camera LookAt Target:", controls.target);
}
animate();

// RESIZE HANDLER
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});
