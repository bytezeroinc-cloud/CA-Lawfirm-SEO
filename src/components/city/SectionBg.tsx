import type { ReactNode } from 'react'

/**
 * Renders a section backdrop — auto-detects mp4 vs image by extension.
 * Adds a tinted gradient overlay using the accent color so sections feel
 * connected to the city's identity without losing readability.
 */
export default function SectionBg({
  src,
  accentRgb,
  overlay = 0.72,
  tintStrength = 0.10,
  children,
  position = 'center',
  isLight = false,
}: {
  src?: string
  accentRgb?: string
  overlay?: number
  tintStrength?: number
  children: ReactNode
  position?: string
  /** Light mode renders white-tinted overlays so dark images become silvery */
  isLight?: boolean
}) {
  const isVideo = !!src && /\.(mp4|webm|mov)$/i.test(src)

  if (!src) {
    return <div className="relative">{children}</div>
  }

  // Light mode now PRESERVES nebula color — gentle frosted veil instead of heavy wash.
  // Apple-style "Pro" pages: white cards on iridescent backgrounds, color comes through.
  const baseRgb = isLight ? '245,245,247' : '5,5,10'
  const lightOpacity = isLight ? 0.85 : 1
  const lightFilter = isLight ? 'saturate(1.05) brightness(1.10)' : 'none'

  // In light mode, overlay is soft + translucent so nebula color shines through.
  // Stronger at top/bottom for edge transitions, much lighter mid-section.
  const overlayBase = isLight ? 0.55 : Math.min(overlay + 0.10, 1)
  const overlayMid = isLight ? 0.18 : Math.max(overlay - 0.15, 0)
  const overlayBottom = isLight ? 0.55 : Math.min(overlay + 0.08, 1)

  const tintColor = isLight ? '255,255,255' : accentRgb ?? baseRgb

  return (
    <div className="relative overflow-hidden">
      {isVideo ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ zIndex: 0, opacity: lightOpacity, filter: lightFilter }}
        />
      ) : (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 0,
            backgroundImage: `url('${src}')`,
            backgroundSize: 'cover',
            backgroundPosition: position,
            opacity: lightOpacity,
            filter: lightFilter,
          }}
        />
      )}

      {/* Base overlay — keeps text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: `linear-gradient(180deg, rgba(${baseRgb},${overlayBase}) 0%, rgba(${baseRgb},${overlayMid}) 50%, rgba(${baseRgb},${overlayBottom}) 100%)`,
        }}
      />

      {/* Accent / white tint */}
      {accentRgb && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 2,
            background: `radial-gradient(ellipse at 50% 30%, rgba(${tintColor},${tintStrength}) 0%, transparent 60%)`,
          }}
        />
      )}

      {/* Top + bottom edge fades — extended in light mode so colorful sections blend smoothly into white */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          zIndex: 3,
          height: isLight ? '160px' : '96px',
          background: `linear-gradient(to bottom, rgba(${baseRgb},${isLight ? 1 : 0.85}), rgba(${baseRgb},${isLight ? 0.4 : 0}) 60%, transparent)`,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          zIndex: 3,
          height: isLight ? '160px' : '96px',
          background: `linear-gradient(to top, rgba(${baseRgb},${isLight ? 1 : 0.85}), rgba(${baseRgb},${isLight ? 0.4 : 0}) 60%, transparent)`,
        }}
      />

      <div className="relative" style={{ zIndex: 4 }}>
        {children}
      </div>
    </div>
  )
}
