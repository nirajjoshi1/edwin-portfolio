import SectionHeader from '../components/SectionHeader'
 
const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:edwin@torrescopy.com',
    meta: 'edwin@torrescopy.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/19145134730',
    meta: '+1 (914) 513-4730',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M16.74 13.96c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.31-.79-.7-1.33-1.57-1.49-1.84-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.33.97 2.62 1.1 2.8.13.18 1.9 2.89 4.6 4.05.64.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31Z" />
        <path d="M12.03 2.01a9.98 9.98 0 0 0-8.65 14.97L2 22l5.17-1.36a9.97 9.97 0 0 0 4.85 1.24h.01a9.99 9.99 0 0 0 0-19.97Zm0 18.16h-.01a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.06.8.82-2.99-.2-.31a8.18 8.18 0 1 1 6.91 3.82Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/eddiewrites44',
    meta: 'eddiewrites44',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163C8.708 0 8.448.012 7.203.06 2.825.227 1.016 2.015 0 6.082.012 7.287.06 8.07 0 12.033c.012 1.245.06 2.052.06 5.07 0 3.005-.012 3.809-.06 4.563-.149 4.068-1.961 5.856-5.375 6.032-1.245.048-2.052.06-5.07.06-3.005 0-3.808-.012-4.563-.06-4.066-.149-5.852-1.96-6.032-5.374-.048-1.244-.06-2.048-.06-5.067 0-3.004.013-3.808.06-4.563.149-4.068 1.961-5.856 5.375-6.032 1.245-.048 2.052-.06 5.07-.06Zm0 16.25a4.12 4.12 0 0 1-4.117-4.12 4.12 4.12 0 0 1 4.117-4.12 4.12 4.12 0 0 1 4.117 4.12 4.12 4.12 0 0 1-4.117 4.12Zm0-7.875a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/eddie.torres.76141',
    meta: 'eddie.torres.76141',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M13.5 21v-7h2.34l.35-2.73H13.5V9.53c0-.79.22-1.33 1.35-1.33h1.44V5.76c-.25-.03-1.1-.11-2.1-.11-2.08 0-3.5 1.27-3.5 3.6v2.02H8.33V14h2.36v7h2.81Z" />
      </svg>
    ),
  },
]

function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Connect with me."
        description="Pick the channel that’s easiest for you."
      />

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100 shadow-[0_24px_80px_-32px_rgba(99,102,241,0.35)] transition hover:border-indigo-300/60 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-indigo-500/15 p-2 text-indigo-300">{item.icon}</span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="truncate text-xs text-slate-400">{item.meta}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ContactPage
