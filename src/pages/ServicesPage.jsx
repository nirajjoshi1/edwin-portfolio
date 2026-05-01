import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const services = [
  {
    number: '01',
    name: 'Landing Page Copy',
    icon: '◎',
    what: 'High-converting landing pages that clarify your offer and remove friction.',
    who: 'Coaches, agencies, and SaaS teams with traffic but low conversion.',
    outcome: 'More qualified leads and stronger conversion rates.',
    tags: ['Lead Gen', 'Conversion'],
  },
  {
    number: '02',
    name: 'Email Sequences',
    icon: '◈',
    what: 'Strategic email flows that nurture leads and drive decisions.',
    who: 'Founders and operators who need better follow-up and retention.',
    outcome: 'Higher engagement, better response rates, and more sales conversations.',
    tags: ['Nurture', 'Retention'],
  },
  {
    number: '03',
    name: 'Sales Pages',
    icon: '◇',
    what: 'Long-form sales pages built to handle objections and close buyers.',
    who: 'Programs, offers, and launches that need stronger conversion copy.',
    outcome: 'More purchases and higher confidence at checkout.',
    tags: ['Launch', 'High-Ticket'],
  },
  {
    number: '04',
    name: 'Funnel Strategy',
    icon: '⬡',
    what: 'Offer messaging + journey architecture that aligns each stage to conversion.',
    who: 'Businesses that need a complete client acquisition system.',
    outcome: 'Clearer positioning and a predictable funnel path from click to sale.',
    tags: ['Strategy', 'Full Funnel'],
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We audit your current messaging, offer, and funnel gaps.' },
  { step: '02', title: 'Strategy', desc: 'I map the copy system and define the conversion architecture.' },
  { step: '03', title: 'Copy', desc: 'I write, you review. Fast turnaround, clear revision process.' },
  { step: '04', title: 'Launch', desc: 'Copy goes live. We track, iterate, and optimize.' },
]

function ServicesPage() {
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
            eyebrow="Services"
            title="Conversion-focused copy for growth-stage brands."
            description="Every deliverable is built around one outcome: clarity that drives action."
          />
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.name}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.07]"
              >
                {/* Accent line */}
                <span className="absolute left-0 top-0 h-full w-0.5 bg-indigo-500/0 transition-all duration-300 group-hover:bg-indigo-500/60" />

                {/* Top row */}
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-lg text-indigo-400 ring-1 ring-indigo-500/20">
                      {service.icon}
                    </span>
                    <div>
                      <p className="text-[0.6rem] font-semibold uppercase tracking-widest text-slate-600">
                        {service.number}
                      </p>
                      <h3 className="text-lg font-bold leading-tight text-white">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[0.6rem] font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="space-y-3 text-sm">
                  <div className="rounded-lg bg-white/[0.03] px-4 py-3">
                    <p className="mb-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-500">
                      What it is
                    </p>
                    <p className="leading-relaxed text-slate-300">{service.what}</p>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] px-4 py-3">
                    <p className="mb-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-500">
                      Who it's for
                    </p>
                    <p className="leading-relaxed text-slate-300">{service.who}</p>
                  </div>
                </div>

                {/* Outcome */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
                  <span className="text-indigo-400">↑</span>
                  {service.outcome}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="border-t border-white/8 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-indigo-400">
            <span className="h-px w-5 bg-indigo-400" />
            How It Works
          </p>
          <h2 className="mt-3 mb-12 text-2xl font-bold text-white sm:text-3xl">
            From first call to live copy
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, title, desc }, i) => (
              <div key={step} className="relative">
                {/* Connector line */}
                {i < process.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-5 hidden h-px w-full translate-x-1/2 bg-white/8 lg:block"
                  />
                )}
                <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-6 transition hover:border-indigo-500/20 hover:bg-white/[0.06]">
                  <p className="mb-3 text-3xl font-black text-white/10">{step}</p>
                  <p className="mb-1.5 text-sm font-semibold text-white">{title}</p>
                  <p className="text-sm leading-relaxed text-slate-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-indigo-400">
            <span className="h-px w-5 bg-indigo-400" />
            Get Started
          </p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Not sure which service you need?{' '}
            <em className="not-italic text-indigo-400">Let's figure it out.</em>
          </h2>
          <p className="max-w-md text-sm text-slate-400">
            Book a free 30-minute call. We'll identify where your copy is losing
            conversions and map the right solution.
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

export default ServicesPage