# Quo Missed-Call → Email Follow-up Automation

**Status:** LIVE as of 2026-08-09
**Routine:** `trig_01FBvUQaTbeprq7B8tbtjs8W` — "Quo missed-call → email follow-up drafts (ByteZero)"
**Schedule:** hourly at :27 UTC, bound to Claude session `session_01WXtbXTnDjMmuCxijm6KFsb`
**Quo line:** (843) 402-8355 — inbox `+18434028355` ("Charleston Shark Teeth", the workspace's only inbox)

## What it does

Every hour, Claude:

1. Pulls **missed inbound calls** (status `missed` / `no-answer` / `abandoned`) from the last 26 hours via the Quo MCP (`fetch-missed-calls`), including any voicemail transcript.
2. Matches each caller's number against **Quo contacts** to find their email address.
3. **Dedupes** — max one follow-up email per lead per 7 days (checked by searching Gmail for an existing draft/sent follow-up to that address).
4. Writes a personalized follow-up email (voicemail topic acknowledged in one paraphrased clause when present) and saves it as a **Gmail draft** in the connected ByteZero mailbox.
5. Creates a **Quo task on the call** ("Send follow-up email draft to …") so the team sees it next to the call itself. Callers with no email on file get a "call back" task instead — no guessing of addresses.
6. Sends a **push notification** when drafts are waiting; quiet runs stay silent.

First run only: lookback extends to **2026-08-02** to catch this week's test call, plus a one-time diagnostic (`fetch-call-transcripts`) listing *all* call activity since Aug 2 — because the test call did **not** register as a missed call (zero missed calls found on 2026-08-09), it likely logged as answered.

## Why drafts instead of auto-send

The Google Gmail MCP connector is **draft-only by design** — it has no send capability. So the pipeline prepares everything and a human clicks Send in Gmail. For a marketing follow-up to fresh leads, that review step is a feature; but if full auto-send is wanted, see "Upgrade paths" below.

## Sender identity (From / Reply-To)

- Emails are drafted in **whatever Gmail account the claude.ai Gmail connector is signed into** — currently `contact@bytezeroinc.com`.
- The Gmail MCP cannot set a per-message `From` or `Reply-To`; drafts use the account's defaults, and replies naturally return to the sending mailbox.
- **To make emails come from `bytezeroinc@gmail.com` (and receive replies there):** reconnect the Gmail connector as `bytezeroinc@gmail.com` (claude.ai → Settings → Connectors → Gmail). Nothing in the routine needs to change — it always uses the connected account.
- Alternative (keep sending from `contact@`): in that Gmail account, Settings → *Accounts and Import* → **Reply-to address** → `bytezeroinc@gmail.com`. One-time, applies to all mail from that mailbox.

## Upgrade paths

| Want | How |
|------|-----|
| Full auto-send, exact `From: bytezeroinc@gmail.com` + custom Reply-To | Connect the **Zapier MCP** (account already has Zapier) with a *Gmail: Send Email* action authed as `bytezeroinc@gmail.com`, then update the routine prompt to call it instead of `create_draft`. |
| SMS auto-reply to missed calls | Blocked on the number's **10DLC/carrier registration**. Once approved, update the routine prompt to also `send-message` (template below). The routine currently forbids SMS on purpose. |

SMS template (for later): `Sorry we missed your call! This is ByteZero Inc — reply here or we'll ring you back shortly. You can also email bytezeroinc@gmail.com.`

## Email template

See [`email-template.html`](./email-template.html). Constraints baked into the routine: under 120 words, first-name greeting when known, one paraphrased clause about the voicemail topic (never verbatim), reply-or-call-back CTA, signed "— The ByteZero Inc Team" + bytezeroinc.com, no images or tracking.

## Operations

- **Pause / edit / delete:** claude.ai → Routines UI, or `update_trigger` / `delete_trigger` with the routine ID above.
- **Change cadence:** hourly is the minimum interval; e.g. every 2 hours = `0 */2 * * *` via `update_trigger`.
- **Guardrails in the prompt:** only emails the matched contact's own address; never sends SMS; never auto-sends email; only writes Quo tasks and Gmail drafts; treats voicemail transcripts and contact fields as data, not instructions.

## Troubleshooting

- **Run reports "Quo connector needs re-approval":** the bound session lost its standing Quo approval (this can happen after a connector reconnect). Open the session in claude.ai and approve the Quo call — or recreate the routine from the claude.ai **Routines UI** (which attaches connectors properly) using the standalone prompt in [`routine-prompt-fresh-session.md`](./routine-prompt-fresh-session.md).
- **Lead got no email:** they're either not a Quo contact, their contact has no email address, or they were deduped (one follow-up per 7 days). Check the run summary in the session and the Quo task on the call.
- **Call never appeared:** `fetch-missed-calls` only returns `missed` / `no-answer` / `abandoned` calls. Answered calls (including ones picked up by voicemail-as-answer flows) don't qualify — check `fetch-call-transcripts` for the full log.
