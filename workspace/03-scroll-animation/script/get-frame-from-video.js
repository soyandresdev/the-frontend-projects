const ffmpeg = require('fluent-ffmpeg')
const sharp = require('sharp')
const fs = require('fs/promises')
const fsSync = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

// Rutas
const videoPath = path.resolve(__dirname, 'car-video.mp4')
const outputDir = path.resolve(__dirname, '../public/assets/frames')
const outputJs = path.resolve(__dirname, '../src/frames.js')

// Crear carpeta si no existe
if (!fsSync.existsSync(outputDir)) {
  fsSync.mkdirSync(outputDir, { recursive: true })
}

// Obtener duración y FPS
async function getVideoMetadata() {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(videoPath, (err, metadata) => {
      if (err) return reject(err)
      const stream = metadata.streams.find((s) => s.codec_type === 'video')
      const { duration, avg_frame_rate } = stream
      const [num, den] = avg_frame_rate.split('/').map(Number)
      const fps = num / den
      resolve({ duration, fps })
    })
  })
}

// Extraer frames como JPG
async function extractFrames({ duration, fps }) {
  const estimatedFrames = Math.floor(duration * fps)
  console.log(
    `🎯 Duración: ${duration.toFixed(2)}s — FPS: ${fps.toFixed(2)} — Estimado: ${estimatedFrames} frames`
  )

  return new Promise((resolve, reject) => {
    let lastFrame = 0

    ffmpeg(videoPath)
      .outputOptions(['-vsync 0', '-qscale:v 2'])
      .outputFormat('image2')
      .output(`${outputDir}/frame-%04d.jpg`)
      .on('start', (cmd) => console.log('🚀 FFmpeg:\n', cmd))
      .on('stderr', (line) => {
        const match = line.match(/frame=\s*(\d+)/)
        if (match) {
          const current = parseInt(match[1])
          if (current > lastFrame) {
            lastFrame = current
            const percent = Math.floor((current / estimatedFrames) * 100)
            process.stdout.write(`📸 Progreso: ${percent}% (${current}/${estimatedFrames})\r`)
          }
        }
      })
      .on('end', () => {
        console.log('\n✅ Extracción completada.')
        resolve()
      })
      .on('error', (err) => {
        console.error('\n❌ FFmpeg error:', err.message)
        reject(err)
      })
      .run()
  })
}

// Leer JPG y convertir a base64 WebP
async function framesToObject() {
  const files = await fs.readdir(outputDir)
  const frameFiles = files.filter((f) => f.endsWith('.jpg')).sort()

  const frames = await Promise.all(
    frameFiles.map(async (filename) => {
      const jpgBuffer = await fs.readFile(path.join(outputDir, filename))

      const webpBuffer = await sharp(jpgBuffer).webp({ quality: 80 }).toBuffer()

      return {
        id: uuidv4(),
        name: filename,
        base64: `data:image/webp;base64,${webpBuffer.toString('base64')}`
      }
    })
  )

  return frames
}

// Escribir archivo frames.js con export
async function saveFramesAsJs(frames) {
  const content = `export const frames = ${JSON.stringify(frames, null, 2)};`
  await fs.writeFile(outputJs, content)
  console.log(`📦 frames.js generado con ${frames.length} frames`)
}

// Ejecutar
async function main() {
  try {
    const metadata = await getVideoMetadata()
    await extractFrames(metadata)

    const frames = await framesToObject()
    await saveFramesAsJs(frames)
  } catch (err) {
    console.error('❌ Error:', err.message)
  }
}

main()
