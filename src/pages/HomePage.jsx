import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const featureProjects = [
  {
    title: 'Fitness Coach Funnel - Full Conversion System',
    summary:
      'Built a full-funnel copy system: lead capture page, 6-email sequence, and long-form sales page designed to drive paid program sales.',
    result: 'Higher lead quality, stronger engagement, and lift in checkout conversion.',
  },
]

const stats = [
  ['Offers sharpened', 'Positioning and message clarity that sells faster'],
  ['Funnels aligned', 'Each step intentionally moves the buyer forward'],
  ['Revenue focused', 'Copy written for outcomes, not applause'],
]

const problems = [
  'Weak messaging that sounds like everyone else',
  'No clear offer that compels action',
  'No conversion strategy behind the words',
  'Traffic that arrives — and quietly disappears',
]

const solutions = [
  { label: 'Sales Pages', desc: 'Long-form pages engineered to close.' },
  { label: 'Email Funnels', desc: 'Sequences that nurture and convert.' },
  { label: 'Conversion Messaging', desc: 'Words built around one outcome: buy.' },
]

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

function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        {/* subtle grid bg */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 80px)',
          }}
        />

        <p className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-indigo-400">
          <span className="h-px w-6 bg-indigo-400" />
          Direct Response Copywriter
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
          Copy that turns{' '}
          <em className="not-italic text-indigo-400">attention</em>{' '}
          into revenue.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Landing pages, emails, and sales funnels designed to convert —
          not just look good.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/book-a-call"
            className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400 active:scale-95"
            style={{ boxShadow: '0 12px 40px -12px rgba(99,102,241,0.8)' }}
          >
            Book a Call
          </Link>
          <Link
            to="/portfolio"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5 active:scale-95"
          >
            View Portfolio
          </Link>
        </div>

        {/* stat cards */}
        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          {stats.map(([title, subtitle]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur-sm transition hover:border-indigo-500/30 hover:bg-white/[0.07]"
            >
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        aria-hidden="true"
        className="overflow-hidden border-y border-white/8 bg-slate-900/60 py-3"
      >
        <div
          className="flex gap-10 whitespace-nowrap"
          style={{ animation: 'marquee 22s linear infinite' }}
        >
          {[
            'Sales Pages','Email Funnels','Lead Capture','Conversion Copy',
            'Offer Positioning','Checkout Optimization',
            'Sales Pages','Email Funnels','Lead Capture','Conversion Copy',
            'Offer Positioning','Checkout Optimization',
          ].map((item, i) => (
            <span
              key={i}
              className="text-sm italic text-slate-500"
            >
              {i % 6 === 5 ? (
                <span className="text-indigo-500">◆</span>
              ) : item}
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>

      {/* ── PROBLEM ── */}
      <section className="border-y border-white/8 bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <SectionHeader
            eyebrow="The Problem"
            title="Most copy fails — not because of design."
            description="Weak messaging, no clear offer, and zero conversion strategy leave money on the table every single day."
          />
          <ul className="space-y-2">
            {problems.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-5 py-4 text-sm text-slate-300"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-400">
                  ✕
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <SectionHeader
          eyebrow="The Solution"
          title="I build systems — not just copy."
          description="Every project is built around a single goal: movement. Click, reply, book, buy."
        />
        <div className="flex flex-col gap-2">
          {solutions.map(({ label, desc }) => (
            <div
              key={label}
              className="group flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.04] px-6 py-5 transition hover:border-indigo-500/40 hover:bg-white/[0.07]"
            >
              <div>
                <p className="text-base font-semibold text-white">{label}</p>
                <p className="mt-0.5 text-sm text-slate-400">{desc}</p>
              </div>
              <span className="ml-4 text-indigo-400 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Featured Work"
              title="Portfolio Preview"
              description="A look at conversion-focused projects built to drive measurable results."
            />
            <Link
              to="/portfolio"
              className="mb-1 text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
            >
              See all projects →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {featureProjects.map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.07]"
              >
                {/* accent line */}
                <span className="absolute left-0 top-0 h-full w-0.5 bg-indigo-500/0 transition-all duration-300 group-hover:bg-indigo-500/60" />

                <span className="mb-3 inline-block text-[0.65rem] font-semibold uppercase tracking-widest text-indigo-400">
                  Full Funnel · Fitness
                </span>
                <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {project.summary}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
                  <span className="text-indigo-400">↑</span>
                  {project.result}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="border-t border-white/8 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Testimonials"
              title="Client feedback that reflects real conversion gains."
              description="Coaches, founders, and agencies trust this copy to improve lead quality, response, and sales."
            />
            <Link
              to="/testimonials"
              className="mb-1 text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
            >
              Read all testimonials →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="group flex flex-col justify-between rounded-2xl border border-white/8 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/25 hover:bg-white/[0.07]"
              >
                <div>
                  <span className="mb-4 block text-3xl font-black leading-none text-indigo-500/40 transition group-hover:text-indigo-500/60">
                    "
                  </span>
                  <p className="text-sm leading-relaxed text-slate-300">{item.quote}</p>
                  <div
                    className={`mt-5 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider ${item.metricColor}`}
                  >
                    <span>↑</span>
                    {item.metric}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ring-1 ${item.color}`}
                  >
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
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="border-t border-white/8 bg-slate-900/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            Let's Work Together
          </p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to build a funnel that actually <em className="not-italic text-indigo-400">converts?</em>
          </h2>
          <p className="max-w-md text-slate-400">
            One conversation is all it takes to find where your copy is leaking revenue — and fix it.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/book-a-call"
              className="rounded-full bg-indigo-500 px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400 active:scale-95"
              style={{ boxShadow: '0 12px 40px -12px rgba(99,102,241,0.8)' }}
            >
              Book a Call
            </Link>
            <Link
              to="/portfolio"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5 active:scale-95"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage