import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const emails = [
  {
    tag: 'Welcome',
    title: 'Welcome Email',
    subject: 'Welcome - Your Fitness Reset Starts Here',
    copy: `Hey [First Name],

Glad you are here. You just took the first step toward building a body and routine you can actually maintain.

Over the next few days, I will show you how to:
- Eat without overcomplicating your life
- Train without burning out
- Stay consistent even with a busy schedule

Talk soon,
Edwin`,
  },
  {
    tag: 'Nurture',
    title: 'Nurture Email',
    subject: 'Why most plans fail by week 3',
    copy: `Most people do not fail from lack of motivation. They fail because the plan does not fit real life.

If your strategy requires perfect days, it is broken.

Our system is built for busy people who need progress they can sustain.`,
  },
  {
    tag: 'Story',
    title: 'Story Email',
    subject: 'Dan was doing everything right... and still stuck',
    copy: `Dan trained hard for months. He still felt frustrated.

The problem was not effort. The problem was structure.

Once he followed a clear nutrition + training system, he stopped guessing and started seeing visible progress.`,
  },
  {
    tag: 'Value',
    title: 'Value Email',
    subject: 'The 3-meal rule that keeps clients consistent',
    copy: `Simple framework:
1) Protein in every meal
2) One high-fiber carb source
3) One serving of healthy fats

This keeps energy stable, reduces cravings, and makes fat loss easier to sustain.`,
  },
  {
    tag: 'Agitation',
    title: 'Problem Agitation Email',
    subject: 'If you keep restarting, nothing changes',
    copy: `Starting over feels productive, but it keeps you stuck in the same cycle.

Without a repeatable system, progress stays temporary.

That is exactly what this program fixes.`,
  },
  {
    tag: 'Closing',
    title: 'Closing Email',
    subject: 'Doors close tonight',
    copy: `Enrollment closes at midnight.

If you want a structured plan, direct coaching, and a clear roadmap, this is your window.

Join now before spots are gone.`,
  },
]

const tagColors = {
  Welcome:   'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Nurture:   'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Story:     'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Value:     'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Agitation: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Closing:   'bg-red-500/10 text-red-400 border-red-500/20',
}

function EmailCard({ email }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-xl border border-white/8 bg-white/[0.04] transition hover:border-white/12">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className={`flex-shrink-0 rounded-full border px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider ${tagColors[email.tag]}`}>
            {email.tag}
          </span>
          <span className="truncate text-sm font-medium text-slate-200">
            {email.subject}
          </span>
        </div>
        <span className={`flex-shrink-0 text-slate-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>
      {open && (
        <div className="border-t border-white/8 px-5 py-5">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-400">
            {email.copy}
          </pre>
        </div>
      )}
    </div>
  )
}

function PortfolioPage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 80px)',
          }}
        />
        <div className="relative">
          <SectionHeader
            eyebrow="Portfolio · Case Study"
            title="Fitness Coach — Full Conversion System"
            description="A complete direct response funnel built to generate leads and convert them into paid program clients."
          />
        </div>
      </section>

      {/* ── PROJECT META ── */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Client Type', value: 'Fitness Coach' },
              { label: 'Goal', value: 'Generate leads & sell a fitness program' },
              { label: 'Deliverables', value: 'Landing page · 6-email sequence · Sales page' },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl border border-white/8 bg-white/[0.04] px-5 py-4">
                <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">{label}</p>
                <p className="text-sm font-medium text-slate-200">{value}</p>
              </div>
            ))}
          </div>

          {/* Result callout */}
          <div className="mt-4 flex items-start gap-4 rounded-xl border border-indigo-500/25 bg-indigo-500/8 px-6 py-5">
            <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-sm text-indigo-400">↑</span>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-indigo-400">Result</p>
              <p className="mt-0.5 text-sm leading-relaxed text-indigo-100">
                Increased conversions, stronger email engagement, and clearer messaging across the full funnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LANDING PAGE ── */}
      <section className="border-t border-white/8 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-xs font-bold text-indigo-400">01</span>
            <h2 className="text-xl font-bold text-white sm:text-2xl">Landing Page Copy</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: 'Headline',
                value: 'Are you trying to eat healthy but don\'t know how?',
                accent: true,
              },
              {
                label: 'Subheadline',
                value: 'With our new dietary regimen, you can eat your favorite food and still be healthy.',
              },
              {
                label: 'CTA',
                value: 'Click here to join',
                cta: true,
              },
            ].map(({ label, value, accent, cta }) => (
              <div
                key={label}
                className={`rounded-xl border p-5 ${
                  accent
                    ? 'border-indigo-500/25 bg-indigo-500/8'
                    : 'border-white/8 bg-white/[0.04]'
                }`}
              >
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">{label}</p>
                <p className={`text-sm font-medium leading-relaxed ${cta ? 'text-indigo-300' : 'text-slate-200'}`}>{value}</p>
              </div>
            ))}
          </div>

          {/* Body bullets */}
          <div className="mt-4 rounded-xl border border-white/8 bg-white/[0.04] p-6">
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Body Copy</p>
            <ul className="space-y-2.5">
              {[
                'Stop guessing what to eat every day.',
                'Use a practical plan designed for real schedules.',
                'Build habits that make healthy choices easier to maintain.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonials row */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {['Dr. Susan Walters', 'John Stevens'].map((name) => (
              <div key={name} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-5 py-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/15 text-xs font-bold text-indigo-400">
                  {name[0]}
                </span>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-widest text-slate-500">Testimonial</p>
                  <p className="text-sm font-medium text-slate-200">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAIL FUNNEL ── */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-xs font-bold text-indigo-400">02</span>
              <h2 className="text-xl font-bold text-white sm:text-2xl">Email Funnel</h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
              6 Emails
            </span>
          </div>
          <div className="space-y-2">
            {emails.map((email) => (
              <EmailCard key={email.title} email={email} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SALES PAGE ── */}
      <section className="border-t border-white/8 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-xs font-bold text-indigo-400">03</span>
            <h2 className="text-xl font-bold text-white sm:text-2xl">Sales Page</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-indigo-500/25 bg-indigo-500/8 p-6 sm:col-span-2">
              <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-widest text-indigo-400">Headline</p>
              <p className="text-lg font-bold leading-snug text-white sm:text-xl">
                Your problem is not your workout routine — it is your system.
              </p>
              <p className="mt-2 text-sm text-indigo-200">
                Here is a workout plan for dads tired of starting over.
              </p>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.04] p-5">
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Problem</p>
              <p className="text-sm leading-relaxed text-slate-300">
                Most dads jump between random workouts and restrictive diets, then burn out. Without a repeatable system, results never stick.
              </p>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.04] p-5">
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Transformation Story</p>
              <p className="text-sm leading-relaxed text-slate-300">
                Edwin went from inconsistent training and stalled progress to a structured method that fit real life, produced measurable changes, and removed daily guesswork.
              </p>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.04] p-5">
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Offer Breakdown</p>
              <ul className="space-y-2">
                {['Training structure', 'Nutrition framework', 'Accountability', 'Implementation support'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.04] p-5">
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Social Proof</p>
              <div className="space-y-2">
                {['Marcus', 'Derek', 'James'].map((name) => (
                  <div key={name} className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15 text-[0.6rem] font-bold text-indigo-400">
                      {name[0]}
                    </span>
                    <span className="text-sm text-slate-300">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price + Guarantee */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.04] px-6 py-5">
              <p className="text-sm font-medium text-slate-400">Program Price</p>
              <p className="text-3xl font-black text-white">$497</p>
            </div>
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/8 px-6 py-5">
              <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-widest text-emerald-400">30-Day Guarantee</p>
              <p className="text-sm leading-relaxed text-emerald-100">
                Follow the system completely for 30 days. If you don't feel more in control of your fitness routine, you get your money back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-indigo-400">
            <span className="h-px w-5 bg-indigo-400" />
            Want results like this?
          </p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's build your{' '}
            <em className="not-italic text-indigo-400">conversion system.</em>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/book-a-call"
              className="rounded-full bg-indigo-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400 active:scale-95"
              style={{ boxShadow: '0 10px 30px -8px rgba(99,102,241,0.8)' }}
            >
              Book a Free Call
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5 active:scale-95"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PortfolioPage