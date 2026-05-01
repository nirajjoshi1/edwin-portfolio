import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Testimonials', to: '/testimonials' },
]

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_38%),radial-gradient(circle_at_75%_30%,rgba(16,185,129,0.16),transparent_32%)]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="text-lg font-semibold tracking-tight text-white">
            Edwin Torres
          </NavLink>
          <button
            type="button"
            className="rounded-md border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-slate-200 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            Menu
          </button>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/book-a-call"
              className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Book a Call
            </NavLink>
          </nav>
        </div>
        {mobileOpen && (
          <nav className="border-t border-white/10 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-slate-200"
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/book-a-call"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white"
              >
                Book a Call
              </NavLink>
            </div>
          </nav>
        )}
      </header>

      <main className="relative z-10">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Edwin Torres</p>
            <p className="mt-1 text-sm text-slate-300">
              Direct Response Copy That Converts
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <NavLink to="/" className="hover:text-white">
              Home
            </NavLink>
            <NavLink to="/services" className="hover:text-white">
              Services
            </NavLink>
            <NavLink to="/portfolio" className="hover:text-white">
              Portfolio
            </NavLink>
            <NavLink to="/contact" className="hover:text-white">
              Contact
            </NavLink>
            <a href="mailto:edwin@torrescopy.com" className="hover:text-white">
              edwin@torrescopy.com
            </a>
            <a href="https://www.linkedin.com" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
