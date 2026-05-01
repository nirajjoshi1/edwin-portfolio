import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { submitLead } from '../lib/leadCapture'

function BookCallPage() {
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const calendlyUrl =
    import.meta.env.VITE_CALENDAR_EMBED_URL || 'https://calendly.com/'

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    const formData = new FormData(event.currentTarget)
    const payload = {
      source: 'book-a-call',
      name: formData.get('name'),
      email: formData.get('email'),
      notes: formData.get('notes'),
      submittedAt: new Date().toISOString(),
    }

    const result = await submitLead(payload)
    setStatus({
      type: result.ok ? 'success' : 'error',
      message: result.ok
        ? 'Request sent. Now pick your preferred slot below.'
        : result.message,
    })

    if (result.ok) {
      event.currentTarget.reset()
    }

    setIsSubmitting(false)
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Book a Call"
        title="Let us map your conversion bottlenecks and next actions."
        description="Short strategy call focused on your offer, messaging, and funnel performance."
      />

      <div className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick intake</h3>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-indigo-400 transition focus:ring"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-indigo-400 transition focus:ring"
          />
          <textarea
            name="notes"
            rows="4"
            placeholder="What do you need help converting?"
            className="w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-indigo-400 transition focus:ring"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </button>
          {status.message && (
            <p
              className={`text-sm ${
                status.type === 'success' ? 'text-emerald-300' : 'text-rose-300'
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
        <div className="rounded-2xl border border-dashed border-indigo-300/40 bg-indigo-500/10 p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-indigo-200">
            Calendar
          </p>
          <p className="mt-3 text-slate-300">
            Connect your scheduler using <code>VITE_CALENDAR_EMBED_URL</code>.
          </p>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full border border-indigo-300/50 px-4 py-2 text-sm font-semibold text-indigo-100 transition hover:border-indigo-200"
          >
            Open Calendar
          </a>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          <p className="font-semibold text-white">1. Choose time</p>
          Pick a slot that works for your schedule.
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          <p className="font-semibold text-white">2. Discuss project</p>
          We review your goals, audience, and current funnel.
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          <p className="font-semibold text-white">3. Get strategy</p>
          You leave with clear conversion priorities and next steps.
        </div>
      </div>
    </section>
  )
}

export default BookCallPage
