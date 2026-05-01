import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const featureProjects = [
  {
    title: 'Fitness Coach Funnel - Full Conversion System',
    summary:
      'Built a full-funnel copy system: lead capture page, 6-email sequence, and long-form sales page designed to drive paid program sales.',
    result: 'Higher lead quality, stronger engagement, and lift in checkout conversion.',
  },
  {
    title: 'SaaS Trial Activation Sequence',
    summary:
      'Reframed onboarding messaging and lifecycle emails around user outcomes instead of feature lists.',
    result: 'More trial-to-paid conversions in 30 days.',
  },
]

function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          Direct Response Copywriter
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          I Write Copy That Turns Attention Into Revenue
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Landing pages, emails, and sales funnels designed to convert - not just
          look good.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/book-a-call"
            className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_45px_-18px_rgba(99,102,241,0.95)] transition hover:-translate-y-0.5 hover:bg-indigo-400"
          >
            Book a Call
          </Link>
          <Link
            to="/portfolio"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
          >
            View Portfolio
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            ['Offers sharpened', 'Positioning and message clarity that sells faster'],
            ['Funnels aligned', 'Each step intentionally moves the buyer forward'],
            ['Revenue focused', 'Copy written for outcomes, not applause'],
          ].map(([title, subtitle]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300"
            >
              <p className="font-semibold text-white">{title}</p>
              <p className="mt-2">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <SectionHeader
            eyebrow="Problem"
            title="Most copy does not fail because of design. It fails because it does not sell."
            description="Weak messaging, no clear offer, and no conversion strategy leave money on the table."
          />
          <ul className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-slate-200">
            <li>- Weak messaging that sounds generic</li>
            <li>- No clear offer that drives action</li>
            <li>- No conversion strategy behind the words</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <SectionHeader
          eyebrow="Solution"
          title="I build systems - not just copy."
          description="Every project is built around movement: click, reply, book, buy."
        />
        <div className="grid gap-4">
          {['Sales pages', 'Email funnels', 'Conversion-focused messaging'].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-lg font-medium text-white"
              >
                {item}
              </div>
            ),
          )}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured Work"
            title="Portfolio Preview"
            description="A look at conversion-focused projects built to drive measurable growth."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {featureProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-indigo-300/40 hover:bg-white/[0.07]"
              >
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-slate-300">{project.summary}</p>
                <p className="mt-4 text-sm font-medium text-indigo-300">
                  Outcome: {project.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
