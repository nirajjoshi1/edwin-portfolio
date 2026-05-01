import SectionHeader from '../components/SectionHeader'

const services = [
  {
    name: 'Landing Page Copy',
    what: 'High-converting landing pages that clarify your offer and remove friction.',
    who: 'For coaches, agencies, and SaaS teams with traffic but low conversion.',
    outcome: 'More qualified leads and stronger conversion rates.',
  },
  {
    name: 'Email Sequences',
    what: 'Strategic email flows that nurture leads and drive decisions.',
    who: 'For founders and operators who need better follow-up and retention.',
    outcome: 'Higher engagement, better response rates, and more sales conversations.',
  },
  {
    name: 'Sales Pages',
    what: 'Long-form sales pages built to handle objections and close buyers.',
    who: 'For programs, offers, and launches that need stronger conversion copy.',
    outcome: 'More purchases and higher confidence at checkout.',
  },
  {
    name: 'Funnel Strategy',
    what: 'Offer messaging + journey architecture that aligns each stage to conversion.',
    who: 'For businesses that need a complete client acquisition system.',
    outcome: 'Clearer positioning and a predictable funnel path from click to sale.',
  },
]

function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Services"
        title="Conversion-focused copy services for growth-stage brands."
        description="Every deliverable is built to increase clarity, trust, and action."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-7"
          >
            <h3 className="text-xl font-semibold text-white">{service.name}</h3>
            <p className="mt-4 text-sm text-slate-300">
              <span className="font-semibold text-slate-100">What it is:</span>{' '}
              {service.what}
            </p>
            <p className="mt-3 text-sm text-slate-300">
              <span className="font-semibold text-slate-100">Who it is for:</span>{' '}
              {service.who}
            </p>
            <p className="mt-3 text-sm text-indigo-300">
              <span className="font-semibold">Outcome:</span> {service.outcome}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesPage
