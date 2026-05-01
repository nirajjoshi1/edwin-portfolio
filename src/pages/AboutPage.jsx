import SectionHeader from '../components/SectionHeader'

function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="About Edwin Torres"
        title="I help businesses turn better messaging into better revenue."
        description="I am a direct response copywriter focused on one thing: conversion. Every headline, hook, and CTA is built around buyer psychology and business outcomes."
      />
      <div className="mt-10 space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-slate-300">
        <p>
          I work with coaches, SaaS founders, agencies, and online businesses
          that are tired of copy sounding good but underperforming.
        </p>
        <p>
          My process is simple: identify friction in your messaging, tighten the
          offer, map your funnel, and write copy that drives clear next actions.
        </p>
        <p>
          I do not chase clever words. I build conversion systems that move
          prospects from interest to action.
        </p>
      </div>
    </section>
  )
}

export default AboutPage
