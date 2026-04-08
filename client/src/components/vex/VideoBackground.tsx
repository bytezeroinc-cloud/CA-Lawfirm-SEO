import { useEffect, useRef } from 'react'

interface Props {
  src: string
  zoom?: boolean
  className?: string
}

/** Handles both MP4/WebM and HLS (.m3u8) streams */
export default function VideoBackground({ src, zoom = false, className = '' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isHLS = src.includes('.m3u8')

  useEffect(() => {
    if (!isHLS || !videoRef.current) return

    let hls: InstanceType<typeof import('hls.js').default> | null = null

    import('hls.js').then(({ default: Hls }) => {
      if (!videoRef.current) return
      if (Hls.isSupported()) {
        hls = new Hls({ maxBufferLength: 30, maxMaxBufferLength: 60, startLevel: -1 })
        hls.loadSource(src)
        hls.attachMedia(videoRef.current)
        hls.on(Hls.Events.MANIFEST_PARSED, () => { videoRef.current?.play().catch(() => {}) })
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = src
        videoRef.current.play().catch(() => {})
      }
    })

    return () => { hls?.destroy() }
  }, [src, isHLS])

  return (
    <video
      ref={videoRef}
      src={isHLS ? undefined : src}
      autoPlay={!isHLS}
      muted
      loop
      playsInline
      className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none ${className}`}
      style={{ zIndex: 0, transform: zoom ? 'scale(1.1)' : 'scale(1)' }}
    />
  )
}
