import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { submitLead } from '../lib/leadCapture'

const calendarBaseUrl = import.meta.env.VITE_CALENDAR_EMBED_URL || ''
const hasCalendarUrl = Boolean(calendarBaseUrl)

function ContactPage() {
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    const formData = new FormData(event.currentTarget)
    const payload = {
      source: 'contact-page',
      name: formData.get('name'),
      email: formData.get('email'),
      project: formData.get('project'),
      submittedAt: new Date().toISOString(),
    }

    const result = await submitLead(payload)

    setStatus({
      type: result.ok ? 'success' : 'error',
      message: result.message,
    })

    if (result.ok) {
      event.currentTarget.reset()
    }

    setIsSubmitting(false)
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Tell me about your project."
        description="Share your current offer, goals, and where your funnel is underperforming."
      />

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-5 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_-32px_rgba(99,102,241,0.45)]"
      >
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-indigo-400 transition focus:ring"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-indigo-400 transition focus:ring"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="project" className="mb-2 block text-sm text-slate-300">
            Project details
          </label>
          <textarea
            id="project"
            name="project"
            rows="5"
            className="w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-indigo-400 transition focus:ring"
            placeholder="What are you selling, who is it for, and what needs to improve?"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
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
        {!import.meta.env.VITE_LEAD_WEBHOOK_URL && (
          <p className="text-xs text-amber-200/90">
            Set <code>VITE_LEAD_WEBHOOK_URL</code> in your environment to capture
            leads.
          </p>
        )}
      </form>

      <div className="mt-8 rounded-2xl border border-indigo-300/30 bg-indigo-500/10 p-6">
        <p className="text-sm uppercase tracking-[0.18em] text-indigo-200">Prefer to book directly?</p>
        {hasCalendarUrl ? (
          <>
            <p className="mt-3 text-slate-300">
              Skip the form and lock in a time on the calendar.
            </p>
            <a
              href={calendarBaseUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-indigo-300/50 px-5 py-2 text-sm font-semibold text-indigo-100 transition hover:border-indigo-200"
            >
              Open booking calendar
            </a>
          </>
        ) : (
          <p className="mt-3 text-slate-300">
            Add <code>VITE_CALENDAR_EMBED_URL</code> to enable direct booking from this
            section.
          </p>
        )}
      </div>
    </section>
  )
}

export default ContactPage
