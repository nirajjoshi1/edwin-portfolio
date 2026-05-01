import { useState, useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Testimonials', to: '/testimonials' },
]

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Shrink header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">

      {/* Background radial gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at 15% 10%, rgba(99,102,241,0.18) 0%, transparent 40%), radial-gradient(circle at 80% 25%, rgba(16,185,129,0.12) 0%, transparent 35%)',
        }}
      />

      {/* ── HEADER ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/8 bg-slate-950/90 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl'
            : 'border-b border-transparent bg-slate-950/60 py-4 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <NavLink
            to="/"
            className="group flex items-center gap-2 text-lg font-bold tracking-tight text-white"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-xs font-black text-white transition group-hover:bg-indigo-400"
            >
              ET
            </span>
            <span className="hidden sm:inline">Edwin Torres</span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-white/8 text-white'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/book-a-call"
              className="ml-3 rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400 active:scale-95"
              style={{ boxShadow: '0 8px 24px -8px rgba(99,102,241,0.7)' }}
            >
              Book a Call
            </NavLink>
          </nav>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((p) => !p)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 md:hidden"
          >
            <span
              className={`h-px w-5 bg-white transition-all duration-300 ${
                mobileOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-5 bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`h-px w-5 bg-white transition-all duration-300 ${
                mobileOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* ── MOBILE DRAWER ── */}
        {/* Backdrop */}
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className={`fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Slide-in panel */}
        <div
          className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-slate-900 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between border-b border-white/8 px-6 py-5">
            <span className="text-base font-bold text-white">Edwin Torres</span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
            {navItems.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-indigo-500/15 text-indigo-300'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
                style={{
                  transitionDelay: mobileOpen ? `${i * 40}ms` : '0ms',
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(16px)',
                }}
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-xs"
                >
                  {item.label[0]}
                </span>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA at bottom of drawer */}
          <div className="border-t border-white/8 px-4 py-6">
            <NavLink
              to="/book-a-call"
              className="flex w-full items-center justify-center rounded-full bg-indigo-500 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 active:scale-95"
              style={{ boxShadow: '0 8px 24px -8px rgba(99,102,241,0.8)' }}
            >
              Book a Call →
            </NavLink>
            <p className="mt-3 text-center text-xs text-slate-500">
              Free 30-min strategy call
            </p>
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-white/8 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

            {/* Brand */}
            <div className="max-w-xs">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-xs font-black text-white">
                  ET
                </span>
                <p className="text-base font-bold text-white">Edwin Torres</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Direct response copy engineered to convert — not just look good.
              </p>
              <a
                href="mailto:edwin@torrescopy.com"
                className="mt-4 inline-block text-sm text-indigo-400 transition hover:text-indigo-300"
              >
                edwin@torrescopy.com
              </a>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
              <p className="col-span-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Navigation
              </p>
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/book-a-call" className="text-indigo-400 transition hover:text-indigo-300">
                Book a Call
              </NavLink>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/8 pt-6 text-center text-xs text-slate-600 sm:flex-row sm:text-left">
            <p>© {new Date().getFullYear()} Edwin Torres. All rights reserved.</p>
            <p>Direct Response Copywriter</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout