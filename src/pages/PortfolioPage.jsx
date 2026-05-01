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

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Client Type', value: 'Fitness Coach' },
                { label: 'Goal', value: 'Generate leads and sell a fitness program' },
                { label: 'Deliverables', value: 'Landing page, 6-email funnel, and sales page copy' },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl border border-white/8 bg-slate-950/50 px-5 py-4">
                  <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">{label}</p>
                  <p className="text-sm font-medium text-slate-200">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-indigo-500/25 bg-indigo-500/8 px-6 py-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-indigo-400">Outcome</p>
              <p className="mt-1 text-sm leading-relaxed text-indigo-100">
                Increased conversions, stronger email engagement, and clearer message consistency from opt-in to checkout.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-indigo-500/25 bg-indigo-500/8 p-6 sm:col-span-2">
                <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-widest text-indigo-400">Landing page positioning</p>
                <p className="text-lg font-bold leading-snug text-white sm:text-xl">
                  Are you trying to eat healthy but don&apos;t know how?
                </p>
                <p className="mt-2 text-sm text-indigo-200">
                  With our dietary regimen, you can enjoy the food you like while building a healthier routine that lasts.
                </p>
              </div>

              <div className="rounded-xl border border-white/8 bg-slate-950/50 p-5">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Core body direction</p>
                <p className="text-sm leading-relaxed text-slate-300">
                  The copy removes daily guesswork, frames the plan for real schedules, and reinforces simple behavior patterns that make consistency practical.
                </p>
              </div>

              <div className="rounded-xl border border-white/8 bg-slate-950/50 p-5">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Primary CTA</p>
                <p className="text-sm font-medium text-indigo-300">Click here to join</p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-white/8 bg-slate-950/50 p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Email funnel sequence</p>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                  6 emails
                </span>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {emails.map((email) => (
                  <div key={email.title} className="rounded-xl border border-white/8 bg-white/[0.04] p-4">
                    <div className="flex items-center gap-2">
                      <span className={`rounded-full border px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider ${tagColors[email.tag]}`}>
                        {email.tag}
                      </span>
                      <p className="truncate text-sm font-medium text-slate-200">{email.subject}</p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {email.copy.split('\n\n')[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/8 bg-slate-950/50 p-5">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Sales page promise</p>
                <p className="text-sm leading-relaxed text-slate-300">
                  Your problem is not your workout routine, it is your system. The page reframes random effort into a guided method designed for busy dads tired of restarting.
                </p>
              </div>

              <div className="rounded-xl border border-white/8 bg-slate-950/50 p-5">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Offer and risk reversal</p>
                <p className="text-sm leading-relaxed text-slate-300">
                  The offer combines training structure, nutrition framework, accountability, and implementation support at $497, backed by a 30-day guarantee.
                </p>
              </div>
            </div>
          </article>
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