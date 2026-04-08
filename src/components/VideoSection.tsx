import VideoBackground from './VideoBackground'

interface VideoSectionProps {
  videoUrl: string
  children: React.ReactNode
  /** dark overlay strength 0–1, default 0.68 */
  overlay?: number
  /** scale the video slightly for a cropped/zoomed look */
  zoom?: boolean
  className?: string
}

export default function VideoSection({
  videoUrl,
  children,
  overlay = 0.68,
  zoom = false,
  className = '',
}: VideoSectionProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* ── Video background ── */}
      <VideoBackground src={videoUrl} zoom={zoom} />

      {/* ── Gradient dark overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: [
            `linear-gradient(to bottom,`,
            `  rgba(5,5,8,${Math.min(overlay + 0.12, 1)}) 0%,`,
            `  rgba(5,5,8,${overlay}) 15%,`,
            `  rgba(5,5,8,${Math.max(overlay - 0.12, 0)}) 50%,`,
            `  rgba(5,5,8,${overlay}) 85%,`,
            `  rgba(5,5,8,${Math.min(overlay + 0.12, 1)}) 100%`,
            `)`,
          ].join(''),
        }}
      />

      {/* ── Content sits above both video + overlay ── */}
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  )
}
