import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'

/**
 * The 3D stage. It owns nothing about scroll — main.js tweens `cam` (a plain
 * object) with GSAP and the render loop reads from it every frame. That keeps
 * the scene reusable and the scroll choreography in one place.
 */
export function createStage({ canvas, onProgress, onReady, reducedMotion = false }) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance'
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
  renderer.setSize(window.innerWidth, window.innerHeight, false)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 0.95

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0a0809)
  scene.fog = new THREE.FogExp2(0x0a0809, 0.045)

  const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 80)

  // Plain state object — GSAP tweens this, the loop applies it.
  const cam = {
    x: 7.5, y: 3.0, z: 8.5, // camera position
    tx: 0, ty: 1.6, tz: 0, // look-at target
    yaw: 0, // model rotation (radians)
    fov: 38
  }

  // Pointer parallax, smoothed
  const pointer = { x: 0, y: 0 }
  const pointerSmooth = { x: 0, y: 0 }

  // ---------- Lights ----------
  scene.add(new THREE.HemisphereLight(0x3a2a44, 0x050405, 0.9))

  const key = new THREE.DirectionalLight(0xffd6b0, 1.6)
  key.position.set(5, 9, 6)
  scene.add(key)

  const magenta = new THREE.PointLight(0xff2d9b, 55, 30, 2)
  magenta.position.set(-4.5, 4.2, -4.5)
  scene.add(magenta)

  const amber = new THREE.PointLight(0xffb443, 40, 24, 2)
  amber.position.set(3.5, 3.2, 4.2)
  scene.add(amber)

  const red = new THREE.PointLight(0xff3b2f, 28, 20, 2)
  red.position.set(-3.2, 1.2, 4.6)
  scene.add(red)

  // ---------- Floor ----------
  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(40, 64),
    new THREE.MeshStandardMaterial({ color: 0x0c0a0b, roughness: 0.32, metalness: 0.55 })
  )
  floor.rotation.x = -Math.PI / 2
  floor.position.y = 0
  scene.add(floor)

  // ---------- Dust / steam particles ----------
  const DUST = 420
  const dustGeo = new THREE.BufferGeometry()
  const dustPos = new Float32Array(DUST * 3)
  const dustSeed = new Float32Array(DUST)
  for (let i = 0; i < DUST; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * 18
    dustPos[i * 3 + 1] = Math.random() * 7
    dustPos[i * 3 + 2] = (Math.random() - 0.5) * 18
    dustSeed[i] = Math.random() * Math.PI * 2
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3))

  // Soft round sprite so the particles read as embers, not pixels
  const spriteCanvas = document.createElement('canvas')
  spriteCanvas.width = spriteCanvas.height = 64
  const ctx = spriteCanvas.getContext('2d')
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  grad.addColorStop(0, 'rgba(255,255,255,1)')
  grad.addColorStop(0.35, 'rgba(255,255,255,0.6)')
  grad.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 64, 64)
  const sprite = new THREE.CanvasTexture(spriteCanvas)

  const dust = new THREE.Points(
    dustGeo,
    new THREE.PointsMaterial({
      map: sprite,
      color: 0xffb443,
      size: 0.09,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    })
  )
  scene.add(dust)

  // ---------- Model ----------
  const rig = new THREE.Group() // rotates with cam.yaw
  scene.add(rig)

  const loader = new GLTFLoader()
  loader.setMeshoptDecoder(MeshoptDecoder)

  const base = import.meta.env.BASE_URL
  loader.load(
    `${base}assets/kiosk.glb`,
    (gltf) => {
      const model = gltf.scene
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      // Center on X/Z, sit on the floor
      model.position.set(-center.x, -box.min.y, -center.z)

      model.traverse((o) => {
        if (!o.isMesh) return
        o.frustumCulled = false
        const m = o.material
        if (m && m.emissive) {
          m.emissiveIntensity = 2.4
          m.needsUpdate = true
        }
      })

      rig.add(model)
      onReady?.()
    },
    (ev) => {
      if (ev.total) onProgress?.(ev.loaded / ev.total)
      else onProgress?.(Math.min(0.95, ev.loaded / 3_400_000))
    },
    (err) => {
      console.error('[stage] model failed to load', err)
      onProgress?.(1)
      onReady?.()
    }
  )

  // ---------- Post ----------
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.55, // strength
    0.65, // radius
    0.72 // threshold
  )
  composer.addPass(bloom)
  composer.addPass(new OutputPass())

  // ---------- Loop ----------
  const clock = new THREE.Clock()
  const target = new THREE.Vector3()
  let running = true

  function frame() {
    if (!running) return
    const t = clock.getElapsedTime()

    // Smooth the pointer for parallax
    pointerSmooth.x += (pointer.x - pointerSmooth.x) * 0.06
    pointerSmooth.y += (pointer.y - pointerSmooth.y) * 0.06

    const sway = reducedMotion ? 0 : Math.sin(t * 0.35) * 0.02
    rig.rotation.y = cam.yaw + sway

    const px = reducedMotion ? 0 : pointerSmooth.x * 0.6
    const py = reducedMotion ? 0 : pointerSmooth.y * 0.35
    const bob = reducedMotion ? 0 : Math.sin(t * 0.6) * 0.05

    camera.position.set(cam.x + px, cam.y + py + bob, cam.z)
    target.set(cam.tx, cam.ty, cam.tz)
    camera.lookAt(target)
    if (camera.fov !== cam.fov) {
      camera.fov = cam.fov
      camera.updateProjectionMatrix()
    }

    // Neon flicker on the magenta sign light
    if (!reducedMotion) {
      magenta.intensity = 55 + Math.sin(t * 17) * 4 + (Math.random() < 0.012 ? -25 : 0)
    }

    // Dust drifts upward and loops
    if (!reducedMotion) {
      const p = dustGeo.attributes.position.array
      for (let i = 0; i < DUST; i++) {
        p[i * 3 + 1] += 0.0035 + Math.sin(dustSeed[i] + t) * 0.0008
        p[i * 3] += Math.sin(t * 0.5 + dustSeed[i]) * 0.0006
        if (p[i * 3 + 1] > 7) p[i * 3 + 1] = 0
      }
      dustGeo.attributes.position.needsUpdate = true
    }

    composer.render()
  }
  renderer.setAnimationLoop(frame)

  // ---------- Resize ----------
  function resize() {
    const w = window.innerWidth
    const h = window.innerHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
    composer.setSize(w, h)
    bloom.setSize(w, h)
  }
  window.addEventListener('resize', resize)

  // ---------- Pointer ----------
  window.addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / window.innerWidth - 0.5) * 2
    pointer.y = -(e.clientY / window.innerHeight - 0.5) * 2
  }, { passive: true })

  document.addEventListener('visibilitychange', () => {
    running = !document.hidden
    if (running) renderer.setAnimationLoop(frame)
  })

  return { cam, camera, scene, renderer, rig }
}
