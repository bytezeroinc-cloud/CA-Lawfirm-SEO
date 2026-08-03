/**
 * Lead capture pipeline.
 *
 * The site is a static SPA with no backend of its own, so submissions are
 * POSTed as JSON to an external collector (n8n webhook, Formspree, Zapier —
 * anything that accepts a JSON POST) configured at build time via
 * VITE_LEAD_ENDPOINT.
 *
 * If that endpoint is missing or the request fails, we never pretend the
 * submission succeeded: the caller surfaces an error and a mailto fallback so
 * the prospect still has a way to reach us.
 */

export type LeadPayload = {
  name: string
  email: string
  firm: string
  practice: string
  message: string
}

export type LeadSource = 'contact-section' | 'footer'

/** Where leads are POSTed. Unset in dev → mailto fallback path. */
export const LEAD_ENDPOINT: string | undefined = import.meta.env.VITE_LEAD_ENDPOINT

/** Inbox shown to the user whenever the POST can't be completed. */
export const LEAD_EMAIL: string =
  import.meta.env.VITE_LEAD_EMAIL || 'contact@bytezeroinc.com'

export const PRACTICE_OPTIONS = [
  { value: 'pi', label: 'Personal Injury' },
  { value: 'family', label: 'Family Law' },
  { value: 'criminal', label: 'Criminal Defense' },
  { value: 'immigration', label: 'Immigration' },
  { value: 'estate', label: 'Estate Planning' },
  { value: 'business', label: 'Business Law' },
  { value: 'other', label: 'Other' },
] as const

const practiceLabel = (value: string) =>
  PRACTICE_OPTIONS.find((o) => o.value === value)?.label ?? ''

/* ── Validation ──────────────────────────────────────────── */

export type FieldErrors = Partial<Record<keyof LeadPayload, string>>

// Deliberately permissive: the collector and a human both see this address, so
// the goal is catching typos, not enforcing RFC 5322.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateLead(lead: LeadPayload): FieldErrors {
  const errors: FieldErrors = {}
  if (!lead.name.trim()) errors.name = 'Please enter your name.'
  if (!lead.email.trim()) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(lead.email.trim())) errors.email = 'Please enter a valid email address.'
  return errors
}

/* ── Attribution ─────────────────────────────────────────── */

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'] as const

function attribution() {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const utm: Record<string, string> = {}
  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value) utm[key] = value
  }
  return {
    page_url: window.location.href,
    page_path: window.location.pathname,
    referrer: document.referrer || null,
    ...utm,
  }
}

/* ── Mailto fallback ─────────────────────────────────────── */

export function mailtoFallback(lead: LeadPayload): string {
  const body = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.firm && `Firm: ${lead.firm}`,
    lead.practice && `Practice Area: ${practiceLabel(lead.practice)}`,
    '',
    lead.message,
  ]
    .filter(Boolean)
    .join('\n')

  const subject = lead.firm
    ? `Strategy call request — ${lead.firm}`
    : 'Strategy call request'

  return `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/* ── Submission ──────────────────────────────────────────── */

export type SubmitResult =
  | { ok: true }
  | { ok: false; message: string }

const TIMEOUT_MS = 15_000

const GENERIC_ERROR =
  "We couldn't send that just now. Please email us directly — your details are ready to go."

export async function submitLead(lead: LeadPayload, source: LeadSource): Promise<SubmitResult> {
  if (!LEAD_ENDPOINT) {
    // Misconfigured build. Failing loudly beats dropping the lead on the floor.
    console.error(
      '[leads] VITE_LEAD_ENDPOINT is not set — form submissions cannot be delivered.',
    )
    return { ok: false, message: GENERIC_ERROR }
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const response = await fetch(LEAD_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: lead.name.trim(),
        email: lead.email.trim(),
        firm: lead.firm.trim(),
        practice: practiceLabel(lead.practice),
        message: lead.message.trim(),
        source,
        site: 'ca-lawfirm-seo',
        submitted_at: new Date().toISOString(),
        ...attribution(),
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      console.error(`[leads] Collector responded ${response.status}`)
      return { ok: false, message: GENERIC_ERROR }
    }

    return { ok: true }
  } catch (error) {
    console.error('[leads] Submission failed', error)
    return { ok: false, message: GENERIC_ERROR }
  } finally {
    clearTimeout(timeout)
  }
}
