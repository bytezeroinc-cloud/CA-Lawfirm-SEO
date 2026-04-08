import { motion } from 'framer-motion'
import { Scale, Shield, Briefcase, Building2, Gavel, BadgeCheck, Award, Globe } from 'lucide-react'

const logos = [
  { icon: Scale,      name: 'LegalTech AI' },
  { icon: Shield,     name: 'SecureCase'   },
  { icon: Briefcase,  name: 'FirmStack'    },
  { icon: Building2,  name: 'CourtFlow'    },
  { icon: Gavel,      name: 'JurisCore'    },
  { icon: BadgeCheck, name: 'BarVerify'    },
  { icon: Award,      name: 'TopVerdict'   },
  { icon: Globe,      name: 'LawNet Pro'   },
]

interface LogoTickerProps {
  /** Light-glass variant for use on VEX page */
  light?: boolean
}

export default function LogoTicker({ light = false }: LogoTickerProps) {
  const doubledLogos = [...logos, ...logos]

  return (
    <section
      className="relative py-14 overflow-hidden"
      style={
        light
          ? {
              background: 'rgba(245,245,248,0.82)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(0,0,0,0.06)',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
            }
          : {
              borderTop: '1px solid rgba(255,255,255,0.04)',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
            }
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p
          className="text-[11px] uppercase tracking-[0.25em] font-medium"
          style={{ color: light ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.25)' }}
        >
          Powering the digital presence of leading firms
        </p>
      </motion.div>

      {/* Alpha-masked marquee */}
      <div className={light ? 'alpha-mask-x-dark' : 'alpha-mask-x'}>
        <div
          className="flex gap-12"
          style={{ animation: 'marquee 30s linear infinite', width: 'max-content' }}
        >
          {doubledLogos.map((logo, i) => {
            const Icon = logo.icon
            return (
              <div
                key={i}
                className="flex items-center gap-3 shrink-0 transition-opacity duration-300 cursor-default"
                style={{ opacity: light ? 0.35 : 0.25 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = light ? '0.7' : '0.55')}
                onMouseLeave={e => (e.currentTarget.style.opacity = light ? '0.35' : '0.25')}
              >
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  style={{ color: light ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.6)' }}
                />
                <span
                  className="text-[14px] font-medium whitespace-nowrap"
                  style={{ color: light ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.6)' }}
                >
                  {logo.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
