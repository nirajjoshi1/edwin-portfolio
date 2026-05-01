import SectionHeader from '../components/SectionHeader'

const emails = [
  {
    title: 'Welcome Email',
    copy: `Subject: Welcome - Your Fitness Reset Starts Here

Hey [First Name],

Glad you are here. You just took the first step toward building a body and routine you can actually maintain.

Over the next few days, I will show you how to:
- eat without overcomplicating your life
- train without burning out
- stay consistent even with a busy schedule

Talk soon,
Edwin`,
  },
  {
    title: 'Nurture Email',
    copy: `Subject: Why most plans fail by week 3

Most people do not fail from lack of motivation. They fail because the plan does not fit real life.

If your strategy requires perfect days, it is broken.

Our system is built for busy people who need progress they can sustain.`,
  },
  {
    title: 'Story Email (Dan story)',
    copy: `Subject: Dan was doing everything right... and still stuck

Dan trained hard for months. He still felt frustrated.

The problem was not effort. The problem was structure.

Once he followed a clear nutrition + training system, he stopped guessing and started seeing visible progress.`,
  },
  {
    title: 'Value Email (3-meal rule)',
    copy: `Subject: The 3-meal rule that keeps clients consistent

Simple framework:
1) Protein in every meal
2) One high-fiber carb source
3) One serving of healthy fats

This keeps energy stable, reduces cravings, and makes fat loss easier to sustain.`,
  },
  {
    title: 'Problem Agitation Email',
    copy: `Subject: If you keep restarting, nothing changes

Starting over feels productive, but it keeps you stuck in the same cycle.

Without a repeatable system, progress stays temporary.

That is exactly what this program fixes.`,
  },
  {
    title: 'Closing Email',
    copy: `Subject: Doors close tonight

Enrollment closes at midnight.

If you want a structured plan, direct coaching, and a clear roadmap, this is your window.

Join now before spots are gone.`,
  },
]

function PortfolioPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Portfolio / Case Study"
        title="Fitness Coach Funnel - Full Conversion System"
        description="A complete direct response funnel designed to generate leads and convert them into paid program clients."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-white">Client Type:</span> Fitness
            Coach
          </p>
          <p className="mt-3 text-sm text-slate-300">
            <span className="font-semibold text-white">Goal:</span> Generate leads
            and sell a fitness program
          </p>
          <p className="mt-3 text-sm text-slate-300">
            <span className="font-semibold text-white">What Edwin Delivered:</span>{' '}
            Landing page, 6-email sequence, and full sales page
          </p>
        </div>
        <div className="rounded-2xl border border-indigo-400/30 bg-indigo-500/10 p-6">
          <p className="text-sm text-indigo-100">
            <span className="font-semibold text-white">Result:</span> Increased
            conversions, stronger email engagement, and clearer messaging across
            the full funnel.
          </p>
        </div>
      </div>

      <article className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-2xl font-semibold text-white">Landing Page Copy</h3>
        <div className="mt-6 space-y-4 text-slate-300">
          <p>
            <span className="font-semibold text-white">Headline:</span> Are you trying
            to eat healthy but do not know how?
          </p>
          <p>
            <span className="font-semibold text-white">Subheadline:</span> With our new
            dietary regimen, you can eat your favorite food and still be healthy.
          </p>
          <div>
            <p className="font-semibold text-white">Body:</p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Stop guessing what to eat every day.</li>
              <li>Use a practical plan designed for real schedules.</li>
              <li>Build habits that make healthy choices easier to maintain.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Testimonials:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Dr. Susan Walters</li>
              <li>John Stevens</li>
            </ul>
          </div>
          <p>
            <span className="font-semibold text-white">CTA:</span> Click here to join
          </p>
        </div>
      </article>

      <article className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-2xl font-semibold text-white">Email Funnel (6 Emails)</h3>
        <div className="mt-6 grid gap-4">
          {emails.map((email) => (
            <div key={email.title} className="rounded-xl border border-white/10 p-5">
              <h4 className="text-lg font-semibold text-white">{email.title}</h4>
              <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-300">
                {email.copy}
              </pre>
            </div>
          ))}
        </div>
      </article>

      <article className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-2xl font-semibold text-white">Sales Page</h3>
        <div className="mt-6 space-y-4 text-slate-300">
          <p>
            <span className="font-semibold text-white">Headline:</span> Your problem
            is not your workout routine, it is your system.
          </p>
          <p>
            <span className="font-semibold text-white">Subheadline:</span> Here is a
            workout plan for dads tired of starting over.
          </p>
          <p>
            <span className="font-semibold text-white">Problem explanation:</span> Most
            dads jump between random workouts and restrictive diets, then burn out.
            Without a repeatable system, results never stick.
          </p>
          <p>
            <span className="font-semibold text-white">Story (Edwin transformation):</span>{' '}
            Edwin went from inconsistent training and stalled progress to a structured
            method that fit real life, produced measurable changes, and removed daily
            guesswork.
          </p>
          <div>
            <p className="font-semibold text-white">Testimonials:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Marcus</li>
              <li>Derek</li>
              <li>James</li>
            </ul>
          </div>
          <p>
            <span className="font-semibold text-white">Offer breakdown:</span> Training
            structure, nutrition framework, accountability, and implementation support.
          </p>
          <p>
            <span className="font-semibold text-white">Pricing:</span> $497
          </p>
          <p>
            <span className="font-semibold text-white">Guarantee:</span> Follow the
            system completely for 30 days. If you do not feel more in control of your
            fitness routine, you get your money back.
          </p>
        </div>
      </article>
    </section>
  )
}

export default PortfolioPage
