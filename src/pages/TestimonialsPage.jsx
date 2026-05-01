import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const testimonials = [
  {
    quote:
      'Edwin rebuilt our offer messaging and landing page. Lead quality improved almost immediately.',
    name: 'Maya R.',
    role: 'Business Coach',
    initial: 'M',
    color: 'bg-purple-500/15 text-purple-400 ring-purple-500/20',
    metric: 'Lead quality',
    metricColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  },
  {
    quote:
      'His email sequence gave our funnel structure. Open rates and booked calls both went up.',
    name: 'Kevin L.',
    role: 'Agency Founder',
    initial: 'K',
    color: 'bg-blue-500/15 text-blue-400 ring-blue-500/20',
    metric: 'Open rates & booked calls',
    metricColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  },
  {
    quote:
      'Sharp strategy, clear writing, and no fluff. The copy finally matches the value of our product.',
    name: 'Sophie T.',
    role: 'SaaS Co-founder',
    initial: 'S',
    color: 'bg-emerald-500/15 text-emerald-400 ring-emerald-500/20',
    metric: 'Messaging clarity',
    metricColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
]

const stats = [
  { value: '100%', label: 'Client satisfaction' },
  { value: '3x', label: 'Avg. conversion lift' },
  { value: '50+', label: 'Projects delivered' },
]

function TestimonialsPage() {
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
            eyebrow="Testimonials · Results"
            title="Client feedback focused on clarity, conversion, and outcomes."
            description="Real results from real clients — coaches, founders, and agencies who needed copy that actually converts."
          />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/8 bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/8 px-4 sm:px-6 lg:px-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="py-10 text-center">
              <p className="text-3xl font-black text-white sm:text-4xl">{value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="border-b border-white/8">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="group flex flex-col justify-between rounded-2xl border border-white/8 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/25 hover:bg-white/[0.07]"
              >
                {/* Quote mark */}
                <div>
                  <span className="mb-4 block text-3xl font-black leading-none text-indigo-500/40 group-hover:text-indigo-500/60 transition">
                    "
                  </span>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {item.quote}
                  </p>

                  {/* Metric pill */}
                  <div className={`mt-5 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider ${item.metricColor}`}>
                    <span>↑</span>
                    {item.metric}
                  </div>
                </div>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                  <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ring-1 ${item.color}`}>
                    {item.initial}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-indigo-400">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Featured large quote */}
          <div className="mt-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/6 p-8 sm:p-10">
            <span className="mb-4 block text-5xl font-black leading-none text-indigo-500/40">"</span>
            <p className="max-w-3xl text-lg font-medium leading-relaxed text-slate-200 sm:text-xl">
              Working with Edwin was the highest-leverage move we made during our launch.
              The funnel copy alone paid for itself within the first week.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-bold text-indigo-300 ring-1 ring-indigo-500/30">
                A
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Alex M.</p>
                <p className="text-xs text-indigo-400">Online Course Creator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Clients include
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Fitness Coaches', 'SaaS Founders', 'Agency Owners', 'Course Creators', 'Online Businesses', 'Consultants'].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/8 bg-white/[0.04] px-5 py-2 text-sm font-medium text-slate-400"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-indigo-400">
            <span className="h-px w-5 bg-indigo-400" />
            Your turn
          </p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get results like{' '}
            <em className="not-italic text-indigo-400">these?</em>
          </h2>
          <p className="max-w-md text-sm text-slate-400">
            Book a free 30-minute call. We'll find where your copy is losing
            conversions and map the fix.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/book-a-call"
              className="rounded-full bg-indigo-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400 active:scale-95"
              style={{ boxShadow: '0 10px 30px -8px rgba(99,102,241,0.8)' }}
            >
              Book a Free Call
            </Link>
            <Link
              to="/portfolio"
              className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5 active:scale-95"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default TestimonialsPage