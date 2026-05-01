import SectionHeader from '../components/SectionHeader'

const stats = [
  { value: '50+', label: 'Funnels Built' },
  { value: '3x', label: 'Avg. Conversion Lift' },
  { value: '100%', label: 'Revenue Focused' },
]

const values = [
  {
    icon: '◎',
    title: 'Clarity over cleverness',
    desc: 'I don\'t chase witty headlines. I write words that make the next step obvious.',
  },
  {
    icon: '◈',
    title: 'Systems, not sentences',
    desc: 'Every piece of copy fits into a larger funnel designed around buyer behavior.',
  },
  {
    icon: '◇',
    title: 'Outcomes over output',
    desc: 'You\'re not paying for words on a page. You\'re paying for results those words produce.',
  },
]

const clients = ['Coaches', 'SaaS Founders', 'Agencies', 'Online Businesses']

function AboutPage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative mx-auto max-w-5xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 80px)',
          }}
        />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <SectionHeader
              eyebrow="About Edwin Torres"
              title="I help businesses turn better messaging into better revenue."
              description="Direct response copywriter focused on one thing: conversion. Every headline, hook, and CTA is built around buyer psychology and real business outcomes."
            />

            {/* Client types */}
            <div className="mt-8 flex flex-wrap gap-2">
              {clients.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Avatar / monogram card */}
          <div className="flex items-start justify-center lg:justify-end">
            <div className="relative">
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-indigo-500/15 text-5xl font-black text-indigo-400 ring-1 ring-indigo-500/30 sm:h-40 sm:w-40">
                ET
              </div>
              <span className="absolute -bottom-3 -right-3 rounded-xl bg-indigo-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                Copywriter
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/8 bg-slate-900/40">
        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-white/8 px-4 sm:px-6 lg:px-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="py-10 text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">{value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-indigo-400">
              <span className="h-px w-5 bg-indigo-400" />
              My Approach
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-snug text-white sm:text-3xl">
              Process built around{' '}
              <em className="not-italic text-indigo-400">movement.</em>
            </h2>
          </div>

          <div className="space-y-5 text-[0.95rem] leading-relaxed text-slate-400">
            <p className="rounded-xl border border-white/8 bg-white/[0.04] px-6 py-5">
              I work with coaches, SaaS founders, agencies, and online businesses
              that are tired of copy that sounds good but{' '}
              <span className="font-medium text-slate-200">underperforms</span>.
            </p>
            <p className="rounded-xl border border-white/8 bg-white/[0.04] px-6 py-5">
              My process is simple: identify friction in your messaging, tighten
              the offer, map your funnel, and write copy that drives{' '}
              <span className="font-medium text-slate-200">clear next actions</span>.
            </p>
            <p className="rounded-xl border border-white/8 bg-white/[0.04] px-6 py-5">
              I don't chase clever words. I build{' '}
              <span className="font-medium text-slate-200">conversion systems</span>{' '}
              that move prospects from interest to action.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="border-t border-white/8 bg-slate-900/30">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-indigo-400">
            <span className="h-px w-5 bg-indigo-400" />
            How I Work
          </p>
          <h2 className="mt-3 mb-10 text-2xl font-bold text-white sm:text-3xl">
            Principles behind every project
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/8 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.07]"
              >
                <span className="mb-4 block text-2xl text-indigo-400 transition group-hover:scale-110">
                  {icon}
                </span>
                <p className="mb-2 text-sm font-semibold text-white">{title}</p>
                <p className="text-sm leading-relaxed text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-indigo-400">
            <span className="h-px w-5 bg-indigo-400" />
            Work Together
          </p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to fix your copy and{' '}
            <em className="not-italic text-indigo-400">grow your revenue?</em>
          </h2>
          <p className="max-w-md text-sm text-slate-400">
            One free call. No pitch. Just an honest look at where your messaging
            is leaking conversions.
          </p>
          <a
            href="/book-a-call"
            className="rounded-full bg-indigo-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400 active:scale-95"
            style={{ boxShadow: '0 10px 30px -8px rgba(99,102,241,0.8)' }}
          >
            Book a Free Call
          </a>
        </div>
      </section>

    </div>
  )
}

export default AboutPage