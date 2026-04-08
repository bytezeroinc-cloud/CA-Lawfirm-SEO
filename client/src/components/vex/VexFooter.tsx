import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Send, ArrowRight, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react'

/* ── Testimonials ─────────────────────────────────────────── */
const testimonials = [
  {
    quote: "Our website went from invisible to the top 3 results for key personal injury terms in just 4 months. The AI-driven approach is a game-changer.",
    name: 'Sarah Chen',
    title: 'Managing Partner, Chen & Associates',
    area: 'Personal Injury',
  },
  {
    quote: "They didn't just build a website — they built a client acquisition machine. We've 3x'd our consultation requests since launch.",
    name: 'Michael Torres',
    title: 'Founding Attorney, Torres Law Group',
    area: 'Immigration Law',
  },
  {
    quote: "The speed was unbelievable — launched in 7 days and we were already ranking for our target keywords within the first month.",
    name: 'Jessica Park',
    title: 'Partner, Park & Williams LLP',
    area: 'Family Law',
  },
]

/* ── Socials ──────────────────────────────────────────────── */
const socials = [
  { name: 'Instagram', url: 'https://instagram.com',  icon: 'https://cdn.simpleicons.org/instagram/ffffff', color: '#E1306C' },
  { name: 'Facebook',  url: 'https://facebook.com',   icon: 'https://cdn.simpleicons.org/facebook/ffffff',  color: '#1877F2' },
  { name: 'LinkedIn',  url: 'https://linkedin.com',   icon: 'https://cdn.simpleicons.org/linkedin/ffffff',  color: '#0A66C2' },
  { name: 'X',         url: 'https://x.com',          icon: 'https://cdn.simpleicons.org/x/ffffff',         color: '#ffffff' },
  { name: 'YouTube',   url: 'https://youtube.com',    icon: 'https://cdn.simpleicons.org/youtube/ffffff',   color: '#FF0000' },
  { name: 'TikTok',    url: 'https://tiktok.com',     icon: 'https://cdn.simpleicons.org/tiktok/ffffff',    color: '#69C9D0' },
]

/* ── Nav columns ──────────────────────────────────────────── */
const navCols = [
  {
    heading: 'Services',
    links: [
      { label: 'AI Website Design',       href: '#services' },
      { label: 'Law Firm SEO',            href: '#services' },
      { label: 'Content Strategy',        href: '#services' },
      { label: 'Conversion Optimization', href: '#services' },
      { label: 'GEO / AI Search',         href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',     href: '#' },
      { label: 'Case Studies', href: '#results' },
      { label: 'Blog',         href: '#' },
      { label: 'Pricing',      href: '#pricing' },
      { label: 'Contact',      href: '#contact' },
    ],
  },
]

export default function VexFooter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({ name: '', email: '', firm: '', practice: '', message: '' })
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => setActiveTestimonial(i => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(iv)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <footer ref={ref} id="contact" className="relative bg-black overflow-hidden">

      {/* ── Full-footer video background ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 0.55 }}
        >
          <source src="/footer-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.60) 30%, rgba(0,0,0,0.70) 70%, rgba(0,0,0,0.88) 100%)',
        }} />
        {/* Top fade — blends with section above */}
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.85), transparent)' }} />
      </div>

      {/* ═══════════════════════════════════════
          ZONE 1 — Available Now + Form
      ═══════════════════════════════════════ */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">Available Now</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Get Your AI
            <br />
            <span className="glow-text-warm">Law Firm Website</span>
          </h2>
          <p className="text-[14px] text-white/35 mt-4 max-w-lg mx-auto">
            Book a free 30-minute strategy call. We'll audit your current site and show you what's possible.
          </p>
        </motion.div>

        {/* Form + Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 glass-card rounded-2xl p-8"
          >
            <form className="relative z-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-white/30 uppercase tracking-wider mb-1.5 block font-medium">Your Name</label>
                  <input type="text" name="name" value={formState.name} onChange={handleChange}
                    className="glass-input w-full px-4 py-3 rounded-xl text-[14px]" placeholder="John Smith" />
                </div>
                <div>
                  <label className="text-[11px] text-white/30 uppercase tracking-wider mb-1.5 block font-medium">Email</label>
                  <input type="email" name="email" value={formState.email} onChange={handleChange}
                    className="glass-input w-full px-4 py-3 rounded-xl text-[14px]" placeholder="john@lawfirm.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-white/30 uppercase tracking-wider mb-1.5 block font-medium">Firm Name</label>
                  <input type="text" name="firm" value={formState.firm} onChange={handleChange}
                    className="glass-input w-full px-4 py-3 rounded-xl text-[14px]" placeholder="Smith & Associates" />
                </div>
                <div>
                  <label className="text-[11px] text-white/30 uppercase tracking-wider mb-1.5 block font-medium">Practice Area</label>
                  <select name="practice" value={formState.practice} onChange={handleChange}
                    className="glass-input w-full px-4 py-3 rounded-xl text-[14px] appearance-none cursor-pointer">
                    <option value="" className="bg-[#0a0a0f]">Select area...</option>
                    <option value="pi"         className="bg-[#0a0a0f]">Personal Injury</option>
                    <option value="family"     className="bg-[#0a0a0f]">Family Law</option>
                    <option value="criminal"   className="bg-[#0a0a0f]">Criminal Defense</option>
                    <option value="immigration" className="bg-[#0a0a0f]">Immigration</option>
                    <option value="estate"     className="bg-[#0a0a0f]">Estate Planning</option>
                    <option value="business"   className="bg-[#0a0a0f]">Business Law</option>
                    <option value="other"      className="bg-[#0a0a0f]">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[11px] text-white/30 uppercase tracking-wider mb-1.5 block font-medium">Tell Us About Your Goals</label>
                <textarea name="message" value={formState.message} onChange={handleChange} rows={4}
                  className="glass-input w-full px-4 py-3 rounded-xl text-[14px] resize-none"
                  placeholder="What's your biggest challenge with your current website?" />
              </div>
              <button type="submit"
                className="w-full py-4 rounded-xl text-[14px] font-semibold flex items-center justify-center gap-2 group text-white transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(255,140,66,0.22) 0%, rgba(108,99,255,0.18) 100%)', border: '1px solid rgba(255,140,66,0.35)' }}
              >
                <Send size={15} />
                Book Free Strategy Call
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Rotating testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="flex-1 rounded-2xl overflow-hidden flex flex-col"
              style={{ background: 'rgba(6,6,14,0.72)', border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 40px rgba(0,0,0,0.50)' }}
            >
              <div className="h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(255,140,66,0.40), transparent)' }} />
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <span className="font-display font-black text-[52px] leading-none select-none block -mb-1"
                    style={{ color: '#FF8C42', opacity: 0.20, letterSpacing: '-0.05em' }}>"</span>
                  <p className="text-[14px] text-white/65 leading-relaxed mb-5">
                    {testimonials[activeTestimonial].quote}
                  </p>
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-[13px]">{testimonials[activeTestimonial].name}</p>
                  <p className="text-[11px] text-white/30 mt-0.5 mb-3">{testimonials[activeTestimonial].title}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                      style={{ background: 'rgba(255,140,66,0.12)', border: '1px solid rgba(255,140,66,0.28)', color: '#FF8C42' }}>
                      {testimonials[activeTestimonial].area}
                    </span>
                    <div className="flex gap-1.5">
                      {testimonials.map((_, i) => (
                        <button key={i} onClick={() => setActiveTestimonial(i)}
                          className="h-1.5 rounded-full transition-all duration-300"
                          style={{ width: i === activeTestimonial ? 20 : 6, background: i === activeTestimonial ? '#FF8C42' : 'rgba(255,255,255,0.18)' }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="rounded-2xl px-6 py-4 flex items-center justify-between"
              style={{ background: 'rgba(6,6,14,0.65)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)' }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse" />
                <span className="text-[11px] text-white/35 uppercase tracking-wider font-medium">Avg Response</span>
              </div>
              <span className="font-display font-bold text-white text-[18px]" style={{ letterSpacing: '-0.02em' }}>&lt; 2 Hours</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          DIVIDER
      ═══════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)' }} />
      </div>

      {/* ═══════════════════════════════════════
          ZONE 2 — Contact strip
      ═══════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <p className="text-[10px] font-semibold text-white/22 uppercase tracking-widest mb-6 text-center">Get In Touch</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-white/[0.06]">

          <motion.a href="tel:4699049904" whileHover={{ y: -2 }}
            className="group flex flex-col items-center text-center px-6">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
              style={{ background: 'rgba(255,140,66,0.12)', border: '1px solid rgba(255,140,66,0.25)' }}>
              <Phone size={16} style={{ color: '#FF8C42' }} strokeWidth={1.8} />
            </div>
            <span className="text-[10px] text-white/25 uppercase tracking-widest font-medium mb-1.5">Call Us</span>
            <span className="font-display font-bold text-white group-hover:text-[#FF8C42] transition-colors text-[18px] leading-tight">
              (469) 904-9904
            </span>
          </motion.a>

          <motion.a href="mailto:contact@bytezeroinc.com" whileHover={{ y: -2 }}
            className="group flex flex-col items-center text-center px-6">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
              style={{ background: 'rgba(139,131,255,0.12)', border: '1px solid rgba(139,131,255,0.25)' }}>
              <Mail size={16} style={{ color: '#8B83FF' }} strokeWidth={1.8} />
            </div>
            <span className="text-[10px] text-white/25 uppercase tracking-widest font-medium mb-1.5">Email Us</span>
            <span className="font-display font-bold text-white group-hover:text-[#8B83FF] transition-colors text-[16px] leading-tight">
              contact@bytezeroinc.com
            </span>
          </motion.a>

          <div className="flex flex-col items-center text-center px-6">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
              style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.25)' }}>
              <MapPin size={16} style={{ color: '#34D399' }} strokeWidth={1.8} />
            </div>
            <span className="text-[10px] text-white/25 uppercase tracking-widest font-medium mb-1.5">Our Offices</span>
            <span className="font-display font-bold text-white text-[18px] leading-tight">San Francisco</span>
            <span className="text-[12px] text-white/28 mt-0.5">& Los Angeles, CA</span>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 3 — Nav / Social / Brand
      ═══════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-8">
        <div className="h-px mb-10" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">

          {/* Brand + socials */}
          <div className="md:col-span-4">
            <a href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center font-display font-black text-white text-[12px]"
                style={{ background: 'linear-gradient(135deg, #FF8C42, #FF5500)' }}>VEX</div>
              <span className="font-display font-bold text-white text-[14px]">California Law Firm SEO</span>
            </a>
            <p className="text-[12px] text-white/25 leading-relaxed max-w-[240px] mb-5">
              AI-powered website development and SEO for California's leading law firms. Built to rank, built to convert.
            </p>
            <p className="text-[10px] font-semibold text-white/25 uppercase tracking-widest mb-3">Follow Us On</p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <motion.a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                  title={s.name} whileHover={{ y: -3, scale: 1.08 }} transition={{ duration: 0.18 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.background = `${s.color}22`
                    el.style.borderColor = `${s.color}55`
                    el.style.boxShadow = `0 0 14px ${s.color}35`
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.background = 'rgba(255,255,255,0.07)'
                    el.style.borderColor = 'rgba(255,255,255,0.10)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <img src={s.icon} alt={s.name} style={{ width: 16, height: 16, objectFit: 'contain' }} draggable={false} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {navCols.map((col) => (
            <div key={col.heading} className="md:col-span-2">
              <h4 className="text-[10px] font-semibold text-white/35 uppercase tracking-widest mb-4">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[12px] text-white/25 hover:text-white/60 transition-colors flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight size={9} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Practice areas */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-semibold text-white/35 uppercase tracking-widest mb-4">Practice Areas</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {['Personal Injury', 'Criminal Defense', 'Family Law', 'Immigration',
                'Estate Planning', 'DUI Defense', 'Employment Law', 'Business Law'].map((area) => (
                <a key={area} href="#services" className="text-[12px] text-white/22 hover:text-white/55 transition-colors">{area}</a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-3">
            <motion.a href="https://bytezeroinc.com" target="_blank" rel="noopener noreferrer"
              whileHover={{ opacity: 0.8 }}>
              <div className="px-2 py-0.5 rounded-md font-display font-black text-white text-[11px]"
                style={{ background: 'linear-gradient(135deg, rgba(255,140,66,0.28), rgba(108,99,255,0.22))', border: '1px solid rgba(255,140,66,0.30)' }}>
                BYTEZERO
              </div>
            </motion.a>
            <span className="text-[11px] text-white/18">&copy; 2026 BYTEZERO Digital. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((label) => (
              <a key={label} href="#" className="text-[11px] text-white/18 hover:text-white/45 transition-colors whitespace-nowrap">{label}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
