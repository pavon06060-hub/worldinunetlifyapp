import { createFileRoute } from '@tanstack/react-router'
import { FormEvent, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Send,
  ShieldCheck,
} from 'lucide-react'

export const Route = createFileRoute('/apply')({ component: ApplyPage })

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

function ApplyPage() {
  const [status, setStatus] = useState<SubmitState>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const formData = new FormData(event.currentTarget)
    const encoded = new URLSearchParams()
    formData.forEach((value, key) => encoded.append(key, String(value)))

    try {
      const response = await fetch('/inu-passport-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded.toString(),
      })

      if (!response.ok) throw new Error('Submission failed')
      event.currentTarget.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="apply-page">
      <style>{`
        .apply-page{min-height:100vh;padding:28px 0 70px;background:
          radial-gradient(circle at 82% 0%,rgba(94,69,255,.18),transparent 30%),
          radial-gradient(circle at 10% 40%,rgba(32,216,255,.08),transparent 28%),
          #020811;color:#f5f8ff}
        .apply-shell{width:min(960px,calc(100% - 32px));margin:0 auto}
        .apply-top{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:10px 0 28px}
        .apply-back,.apply-x{display:inline-flex;align-items:center;gap:8px;color:#b7c6db;font-size:12px;font-weight:700}
        .apply-brand{display:flex;align-items:center;gap:10px;font:700 18px 'Space Grotesk',sans-serif}
        .apply-brand svg{color:#34dcff}
        .apply-hero{border:1px solid rgba(100,188,255,.18);border-radius:24px;padding:34px;background:linear-gradient(145deg,rgba(8,23,40,.94),rgba(4,14,26,.84));box-shadow:0 30px 80px rgba(0,0,0,.28)}
        .apply-kicker{color:#72a8e3;font:600 10px/1.3 'Space Grotesk',sans-serif;letter-spacing:.24em;text-transform:uppercase}
        .apply-hero h1{margin:12px 0 12px;font:700 clamp(42px,7vw,72px)/.95 'Space Grotesk',sans-serif;letter-spacing:-.055em}
        .apply-hero h1 span{background:linear-gradient(90deg,#35d8ff,#8664ff);-webkit-background-clip:text;background-clip:text;color:transparent}
        .apply-intro{max-width:740px;color:#a9bad1;line-height:1.7;font-size:14px}
        .apply-badges{display:flex;flex-wrap:wrap;gap:9px;margin:22px 0 30px}
        .apply-badge{display:inline-flex;align-items:center;gap:7px;border:1px solid rgba(74,191,255,.22);border-radius:999px;padding:9px 12px;color:#a9bbd3;font-size:10px;background:rgba(7,19,34,.75)}
        .passport-form{display:grid;gap:20px;margin-top:10px}
        .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .field{display:grid;gap:7px}
        .field.full{grid-column:1/-1}
        .field label{color:#cbd8ea;font-size:11px;font-weight:700}
        .field small{color:#758aa8;font-size:9px;line-height:1.4}
        .field input,.field select,.field textarea{width:100%;border:1px solid rgba(94,174,255,.23);border-radius:12px;background:#06111f;color:#f5f8ff;padding:13px 14px;outline:none;font:500 13px Inter,system-ui,sans-serif}
        .field textarea{min-height:128px;resize:vertical}
        .field input:focus,.field select:focus,.field textarea:focus{border-color:#43dfff;box-shadow:0 0 0 3px rgba(32,216,255,.08)}
        .form-divider{height:1px;background:rgba(100,188,255,.15);margin:4px 0}
        .submit-row{display:flex;align-items:center;justify-content:space-between;gap:18px}
        .submit-copy{color:#7f93af;font-size:10px;line-height:1.55;max-width:560px}
        .submit-button{min-height:52px;border:0;border-radius:12px;padding:0 22px;color:#fff;background:linear-gradient(105deg,#6e35ff,#315fff 52%,#20c7ff);display:inline-flex;align-items:center;justify-content:center;gap:9px;font-weight:800;cursor:pointer;box-shadow:0 12px 34px rgba(61,91,255,.22)}
        .submit-button:disabled{opacity:.55;cursor:wait}
        .apply-status{margin-top:18px;border-radius:12px;padding:14px 16px;font-size:12px;line-height:1.55}
        .apply-status.success{border:1px solid rgba(37,226,191,.35);background:rgba(16,96,79,.18);color:#aef8e7}
        .apply-status.error{border:1px solid rgba(255,112,132,.35);background:rgba(112,29,44,.18);color:#ffbec8}
        .review-panel{margin-top:18px;border:1px solid rgba(100,188,255,.14);border-radius:18px;padding:22px;background:rgba(5,16,29,.72)}
        .review-panel h2{font:700 22px 'Space Grotesk';margin:0 0 12px}
        .review-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .review-step{border:1px solid rgba(100,188,255,.12);border-radius:13px;padding:15px;color:#91a5c2;font-size:10px;line-height:1.55}
        .review-step strong{display:block;color:#eef5ff;font-size:12px;margin-bottom:5px}
        .hidden-field{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}
        @media(max-width:700px){
          .apply-page{padding-top:16px}
          .apply-hero{padding:22px}
          .apply-top{padding-bottom:18px}
          .apply-brand{font-size:15px}
          .form-grid{grid-template-columns:1fr}
          .field.full{grid-column:auto}
          .submit-row{align-items:stretch;flex-direction:column}
          .submit-button{width:100%}
          .review-steps{grid-template-columns:1fr}
        }
      `}</style>

      <div className="apply-shell">
        <header className="apply-top">
          <a className="apply-back" href="/"><ArrowLeft size={16} /> Back to WorldInu</a>
          <div className="apply-brand"><Globe2 size={23} /> WorldInu Hub</div>
          <a className="apply-x" href="https://x.com/XWORLDINU" target="_blank" rel="noreferrer">𝕏 @XWORLDINU</a>
        </header>

        <section className="apply-hero">
          <span className="apply-kicker">INU PASSPORT APPLICATION</span>
          <h1>Join the <span>Inuverse.</span></h1>
          <p className="apply-intro">
            Submit your Inu project for review by WorldInu. An application does not guarantee listing, endorsement,
            security, or investment quality. WorldInu reviews submitted information and official project links before
            considering a project for the ecosystem.
          </p>

          <div className="apply-badges">
            <span className="apply-badge"><ShieldCheck size={14} /> Information review</span>
            <span className="apply-badge"><Globe2 size={14} /> Multi-chain applications welcome</span>
            <span className="apply-badge"><CheckCircle2 size={14} /> Clear official links required</span>
          </div>

          <form
            className="passport-form"
            name="inu-passport"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="inu-passport" />
            <p className="hidden-field" aria-hidden="true">
              <label>Do not fill this out <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
            </p>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="projectName">Project name *</label>
                <input id="projectName" name="projectName" required placeholder="Example: Shiba Inu" />
              </div>

              <div className="field">
                <label htmlFor="ticker">Ticker *</label>
                <input id="ticker" name="ticker" required placeholder="Example: SHIB" />
              </div>

              <div className="field full">
                <label htmlFor="contractAddress">Contract address / Mint *</label>
                <input id="contractAddress" name="contractAddress" required placeholder="Paste the official contract or mint address" />
              </div>

              <div className="field">
                <label htmlFor="network">Blockchain *</label>
                <select id="network" name="network" required defaultValue="">
                  <option value="" disabled>Select network</option>
                  <option>Solana</option>
                  <option>Ethereum</option>
                  <option>Base</option>
                  <option>BNB Chain</option>
                  <option>HyperEVM</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="launchLink">Official trading / launch link *</label>
                <input id="launchLink" name="launchLink" type="url" required placeholder="https://..." />
              </div>

              <div className="field">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="url" placeholder="https://..." />
              </div>

              <div className="field">
                <label htmlFor="xLink">Official X / Twitter *</label>
                <input id="xLink" name="xLink" type="url" required placeholder="https://x.com/..." />
              </div>

              <div className="field">
                <label htmlFor="telegram">Telegram</label>
                <input id="telegram" name="telegram" type="url" placeholder="https://t.me/..." />
              </div>

              <div className="field">
                <label htmlFor="logoUrl">Logo / image URL</label>
                <input id="logoUrl" name="logoUrl" type="url" placeholder="https://..." />
                <small>Use a public link to your official project logo.</small>
              </div>

              <div className="field full">
                <label htmlFor="description">Project description *</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  maxLength={1200}
                  placeholder="What is the project, what is it building, and why should the Inu community know about it?"
                />
              </div>

              <div className="field">
                <label htmlFor="contactName">Team / contact name *</label>
                <input id="contactName" name="contactName" required placeholder="Name or team alias" />
              </div>

              <div className="field">
                <label htmlFor="contact">Contact email or Telegram *</label>
                <input id="contact" name="contact" required placeholder="contact@example.com or @username" />
              </div>
            </div>

            <div className="form-divider" />

            <div className="submit-row">
              <p className="submit-copy">
                By submitting, you confirm the information and links are official and may be reviewed for a potential
                WorldInu listing. WorldInu does not guarantee token safety, performance, or acceptance.
              </p>
              <button className="submit-button" type="submit" disabled={status === 'submitting'}>
                <Send size={17} />
                {status === 'submitting' ? 'SUBMITTING…' : 'SUBMIT INU PROJECT'}
              </button>
            </div>
          </form>

          <div aria-live="polite">
            {status === 'success' && (
              <div className="apply-status success">
                Application received. WorldInu can review it from the Netlify Forms dashboard.
              </div>
            )}
            {status === 'error' && (
              <div className="apply-status error">
                The form could not be submitted. Make sure Netlify Form Detection is enabled, then try again or contact @XWORLDINU.
              </div>
            )}
          </div>
        </section>

        <section className="review-panel">
          <h2>What happens after submission?</h2>
          <div className="review-steps">
            <div className="review-step"><strong>1. Submitted</strong>WorldInu receives the project information and official links.</div>
            <div className="review-step"><strong>2. Links Reviewed</strong>Basic links and public project details can be checked for consistency.</div>
            <div className="review-step"><strong>3. Listed on WorldInu</strong>Selected projects may receive an INU Passport profile and future Explorer listing.</div>
          </div>
        </section>
      </div>
    </main>
  )
}
