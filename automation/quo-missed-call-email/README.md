# Quo Missed-Call → Email Follow-up Automation

**Client:** Charleston Shark Teeth (LCC Excursions) — lead-facing email: `lccexcursions@gmail.com`
**Status:** LIVE as of 2026-08-09 (rebranded to client identity 2026-08-10)
**Routine:** `trig_01FBvUQaTbeprq7B8tbtjs8W` — hourly at :27 UTC, bound to Claude session `session_01WXtbXTnDjMmuCxijm6KFsb`
**Quo line:** (843) 402-8355 — inbox `+18434028355` ("Charleston Shark Teeth", the workspace's only inbox)

## What it does

Every hour, Claude:

1. Pulls **missed inbound calls** (status `missed` / `no-answer` / `abandoned`) from the last 26 hours via the Quo MCP (`fetch-missed-calls`), including any voicemail transcript.
2. Matches each caller's number against **Quo contacts** to find their email address.
3. **Dedupes** — max one follow-up email per lead per 7 days (checked by searching Gmail for an existing draft/sent follow-up to that address).
4. Writes a personalized, **client-branded** follow-up email (subject "Sorry we missed your call — Charleston Shark Teeth", signed by the Charleston Shark Teeth team, no agency branding) and saves it as a **Gmail draft**.
5. Creates a **Quo task on the call** ("Send follow-up email draft to …") so the team sees it next to the call itself. Callers with no email on file get a "call back" task instead — no guessing of addresses.
6. Sends a **push notification** when drafts are waiting; quiet runs stay silent.

First successful run: lookback extends to **2026-08-02** to catch the week's test call, plus a one-time diagnostic (`fetch-call-transcripts`) listing *all* call activity since Aug 2 — the test call did **not** register as a missed call, so the diagnostic shows what it logged as.

## Why drafts instead of auto-send

The Google Gmail MCP connector is **draft-only by design** — it has no send capability. The pipeline prepares everything and a human clicks Send. For full auto-send later, connect the **Zapier MCP** (account already has Zapier) with a *Gmail: Send Email* action authed as `lccexcursions@gmail.com`, then update the routine prompt to call it instead of `create_draft`.

## Sender identity — getting emails out as lccexcursions@gmail.com

Drafts are created in **whichever Gmail account the claude.ai Gmail connector is signed into** (currently `contact@bytezeroinc.com`), and the Gmail API cannot set a per-message From — so pick one of these wirings:

1. **Connector swap (fully automatic):** reconnect the claude.ai Gmail connector as `lccexcursions@gmail.com`. Drafts then live in the client mailbox, From and replies are the client address, zero extra clicks. Trade-off: Claude's Gmail access account-wide becomes the client mailbox (any agency-mail workflows in Claude would read/draft there instead).
2. **Send-as alias (keep agency connector):** in the `contact@bytezeroinc.com` Gmail — Settings → *Accounts and Import* → **Send mail as** → add `lccexcursions@gmail.com` (Gmail will ask for that account's SMTP/app-password once to verify). When sending each draft during review, pick `lccexcursions@gmail.com` in the From dropdown — the Quo task text reminds you. Replies go to the client's inbox.

The routine handles both automatically — it detects which mailbox drafts land in and adds the From-dropdown reminder only when needed.

## Email template

See [`email-template.html`](./email-template.html). Constraints baked into the routine: under 120 words, first-name greeting when known, one paraphrased clause about the voicemail topic (never verbatim), reply-or-call-back CTA, signed "— The Charleston Shark Teeth Team", client branding only (no ByteZero mentions, no links), no images or tracking.

## SMS (later)

Blocked on the number's **10DLC/carrier registration**. Once approved, update the routine prompt to also `send-message`. Template: `Sorry we missed your call! This is Charleston Shark Teeth — reply here or we'll ring you back shortly. You can also email lccexcursions@gmail.com.`

## Operations

- **Pause / edit / delete:** claude.ai → Routines UI, or `update_trigger` / `delete_trigger` with the routine ID above.
- **Change cadence:** hourly is the minimum interval; e.g. every 2 hours = `0 */2 * * *` via `update_trigger`.
- **Guardrails in the prompt:** only emails the matched contact's own address; never sends SMS; never auto-sends email; only writes Quo tasks and Gmail drafts; client branding only; treats voicemail transcripts and contact fields as data, not instructions.

## Troubleshooting

- **Runs report "API key required or invalid":** the Quo API key stored in the claude.ai Quo connector is wrong/revoked. Fix: Quo app → Settings → API → copy/regenerate the key, then claude.ai → Settings → Connectors → Quo → reconnect with it. Already-running Claude sessions pick the new key up on their next connector remount (typically the next turn/run).
- **Runs report a Quo permissions/approval error:** approve the Quo tool call by opening the bound session in claude.ai, or recreate the routine from the claude.ai **Routines UI** using [`routine-prompt-fresh-session.md`](./routine-prompt-fresh-session.md) (the UI attaches connectors properly).
- **Lead got no email:** not a Quo contact, contact has no email, or deduped (one follow-up per 7 days). Check the run summary and the Quo task on the call.
- **Call never appeared:** `fetch-missed-calls` only returns `missed` / `no-answer` / `abandoned`. Answered calls don't qualify — check `fetch-call-transcripts` for the full log.
