import SectionHeader from '../components/SectionHeader'

const testimonials = [
  {
    quote:
      'Edwin rebuilt our offer messaging and landing page. Lead quality improved almost immediately.',
    name: 'Maya R.',
    role: 'Business Coach',
  },
  {
    quote:
      'His email sequence gave our funnel structure. Open rates and booked calls both went up.',
    name: 'Kevin L.',
    role: 'Agency Founder',
  },
  {
    quote:
      'Sharp strategy, clear writing, and no fluff. The copy finally matches the value of our product.',
    name: 'Sophie T.',
    role: 'SaaS Co-founder',
  },
]

function TestimonialsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Testimonials / Results"
        title="Client feedback focused on clarity, conversion, and outcomes."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-7"
          >
            <p className="text-slate-300">"{item.quote}"</p>
            <p className="mt-5 font-semibold text-white">{item.name}</p>
            <p className="text-sm text-indigo-300">{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsPage
