import { useState } from 'react'
import { Send, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import {
  PRACTICE_OPTIONS,
  mailtoFallback,
  submitLead,
  validateLead,
  type FieldErrors,
  type LeadPayload,
  type LeadSource,
} from '../lib/leads'

const EMPTY: LeadPayload = { name: '', email: '', firm: '', practice: '', message: '' }

type Status = 'idle' | 'submitting' | 'success' | 'error'

type Props = {
  source: LeadSource
  /** Submit button background/border — the two placements differ slightly. */
  buttonStyle?: React.CSSProperties
}

const labelClass = 'text-[11px] text-white/30 uppercase tracking-wider mb-1.5 block font-medium'
const inputClass = 'glass-input w-full px-4 py-3 rounded-xl text-[14px]'
const errorClass = 'text-[11px] mt-1.5 block'

export default function LeadForm({ source, buttonStyle }: Props) {
  const [values, setValues] = useState<LeadPayload>(EMPTY)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  // Bots fill hidden inputs; humans never see this one.
  const [honeypot, setHoneypot] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear the field's error as soon as the user starts correcting it.
    setErrors((prev) => (prev[name as keyof LeadPayload] ? { ...prev, [name]: undefined } : prev))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'submitting') return

    if (honeypot) {
      // Silently accept — no signal back to the bot that it was caught.
      setStatus('success')
      return
    }

    const nextErrors = validateLead(values)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setStatus('submitting')
    const result = await submitLead(values, source)

    if (result.ok) {
      setStatus('success')
      return
    }

    setErrorMessage(result.message)
    setStatus('error')
  }

  if (status === 'success') {
    return (
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-12">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
          style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.30)' }}
        >
          <CheckCircle2 size={26} style={{ color: '#34D399' }} strokeWidth={1.8} />
        </div>
        <h3 className="font-display font-bold text-white text-[20px] mb-2">Request received</h3>
        <p className="text-[13px] text-white/40 max-w-sm leading-relaxed">
          Thanks{values.name ? `, ${values.name.split(' ')[0]}` : ''} — we've got your details.
          Expect a reply within 2 hours during business hours.
        </p>
      </div>
    )
  }

  return (
    <form className="relative z-10 space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${source}-name`} className={labelClass}>
            Your Name
          </label>
          <input
            id={`${source}-name`}
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={inputClass}
            placeholder="John Smith"
          />
          {errors.name && (
            <span className={errorClass} style={{ color: '#FF8C6B' }} role="alert">
              {errors.name}
            </span>
          )}
        </div>
        <div>
          <label htmlFor={`${source}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${source}-email`}
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={inputClass}
            placeholder="john@lawfirm.com"
          />
          {errors.email && (
            <span className={errorClass} style={{ color: '#FF8C6B' }} role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${source}-firm`} className={labelClass}>
            Firm Name
          </label>
          <input
            id={`${source}-firm`}
            type="text"
            name="firm"
            value={values.firm}
            onChange={handleChange}
            autoComplete="organization"
            className={inputClass}
            placeholder="Smith & Associates"
          />
        </div>
        <div>
          <label htmlFor={`${source}-practice`} className={labelClass}>
            Practice Area
          </label>
          <select
            id={`${source}-practice`}
            name="practice"
            value={values.practice}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="" className="bg-[#0a0a0f]">
              Select area...
            </option>
            {PRACTICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value} className="bg-[#0a0a0f]">
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${source}-message`} className={labelClass}>
          Tell Us About Your Goals
        </label>
        <textarea
          id={`${source}-message`}
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="What's your biggest challenge with your current website?"
        />
      </div>

      {/* Honeypot — hidden from humans and assistive tech, irresistible to bots. */}
      <input
        type="text"
        name="company_website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />

      {status === 'error' && (
        <div
          className="rounded-xl px-4 py-3 flex items-start gap-2.5"
          style={{ background: 'rgba(255,90,90,0.08)', border: '1px solid rgba(255,90,90,0.25)' }}
          role="alert"
        >
          <AlertCircle size={15} style={{ color: '#FF8C6B', flexShrink: 0, marginTop: 1 }} />
          <p className="text-[12px] text-white/55 leading-relaxed">
            {errorMessage}{' '}
            <a
              href={mailtoFallback(values)}
              className="underline underline-offset-2"
              style={{ color: '#FF8C42' }}
            >
              Send it by email instead
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 rounded-xl text-[14px] font-semibold flex items-center justify-center gap-2 group text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        style={
          buttonStyle ?? {
            background: 'linear-gradient(135deg, rgba(255,140,66,0.2) 0%, rgba(108,99,255,0.15) 100%)',
            border: '1px solid rgba(255,140,66,0.3)',
          }
        }
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={15} />
            Book Free Strategy Call
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  )
}
