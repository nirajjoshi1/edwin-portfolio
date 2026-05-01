import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const emails = [
  {
    tag: 'Welcome Email',
    subject: 'Hey Adam Here is your 30 minute workout regimen.',
    copy: `Adam attached to this email is a PDF on how to get the dad body you've always wanted.

The following email contains information on how to get fit in just 30 minutes a day.

No expensive equipment, no gym membership, no supplements.

Doing this regimen just 3x a week can help you like thousands of dads get in shape and look lean.

CLICK HERE: to hear from people getting real results with our program.

Visit us online for more information.

Fitness coach`,
  },
  {
    tag: 'Nurture Email',
    subject: "The reason your diet is failing isn't what you think.",
    copy: `Hello Rick
I'm glad you clicked on my email.

Before you read this email I want to share with you what fitness experts don't want you to know.

You think your eating habits are the reason your diet isn't effective?

The problem is you haven't found a system designed to fit your schedule.

If your career is fitness the multiple meals and countless hours at the gym is great.

But you're a dad working 9-5 with 2 children. And just 40 minutes to yourself.

Over the next few days I will share with you my proven and effective system used by my clients, dads just like you are losing 10-15 pounds with this system.

No gimmicks, no early morning gym sessions, just a system that works on your time.

Fitness Coach

P.S. Tomorrow I'll share with you the number 1 mistake busy dads make during their first week.`,
  },
  {
    tag: 'Story Email',
    subject: 'On day 3 he was ready to quit.',
    copy: `HELLO [John]

Let me tell you about Dan. Dan is a 40 year old father of 2 kids 6,and 8. Dan is an executive director at a major company. The type of person who has time for his job, and family.

But never has time for himself.

He attempted many different workout routines and programs but didn't get the results he expected. So he attempted to fasten for a couple of weeks and even purchased a gym membership in January but by February he stopped going.

During our first call Dan stated that his biggest obstacle was staying consistent.

That statement made me think how I've heard that same exact pretext before. So he contacted me on the 3rd day ready to quit.

But the reason wasn't because it was difficult.

His family and work conflicted with his workout routine. He missed 2 consecutive days and thought he failed.

I explained to him the failure doesn't come from missing 2 days in a row. It comes from quitting after missing 2 consecutive days.

He continued with the program and lost 10 pounds in 12 weeks. His wife also noticed the difference without Dan telling her. He told me he slept better and felt better.

Dan told me the most important factor for him was finally finding a program that works around his hectic schedule.
That's exactly what I'll be sharing with you throughout the course of the next few days.

FITNESS COACH

P.S. Throughout the week I'll show you the 30 day framework Dan used to lose weight and feel great without a gym, expensive equipment, and no supplements.`,
  },
  {
    tag: 'Value Email',
    subject: 'The 3-meal rule that keeps clients consistent',
    copy: `Hey [First Name],

Most fitness advice assumes you have time.

You don't.
So here's the one shift that's made the biggest difference for the busy dads I work with:

Stop trying to eat perfectly. Start trying to eat strategically.

Here's what that looks like in practice — I call it the 3-meal rule:

1) Anchor your breakfast
Pick one high-protein breakfast you can make in under 5 minutes and eat it every single weekday.

2) Control your lunch, not your dinner
Dinner is social. It's family time. Control what you can — pack your lunch.

3) Treat the weekend differently
Don't try to diet on weekends. Just don't binge.

No calorie counting. No food scales.

Just three simple anchors that keep you consistent 80% of the time.

One of my clients, Derek, dropped 11 lbs in 8 weeks doing nothing else but this.

Try it for 7 days and see what happens.

Tomorrow I'm going to show you the workout side of this.

Talk soon,
[Coach Name]`,
  },
  {
    tag: 'Problem Agitation Email',
    subject: "The real cost of a year with the same I'll start Monday mentality.",
    copy: `HEY [DARREN]
I want to ask you something and I need you to really absorb it for a second.

How long has it been since you planned to start getting in shape?

A year or two or has it been longer?
Has anything changed in that time?

Because here's what I notice happens to guys who keep procrastinating.
The weight doesn't stay the same it accumulates.

The worst part isn't even the physical part. It's the energy.

The question is how much longer are you going to let it continue?
The cost of doing nothing isn't zero. It's compounding.

TOMORROW I'm going to show you how my clients closed that gap sooner than they hoped.

Talk soon
[FITNESS COACH]

P.S. If reading this made you think then act on that thought.`,
  },
  {
    tag: 'Last Chance Email',
    subject: 'Very little time left door closes tonight.',
    copy: `Hey [Lawrence]
You must be thinking to yourself, this sounds good but I don't have time right now.

This plan is designed for a 25 minute workout 3 days a week for a total of 75 minutes a week.

You don't have to sacrifice your favorite foods because the meal plan is designed to work around your eating habits.

This offer expires at midnight tonight and there's a max of 20 spots.

If you miss out now you won't get a chance again until the next open enrollment.

CLAIM YOUR SPOT before it's too late click link below
CLICK HERE

This is the final email regarding this offer.

Fitness Coach

P.S. Here is a testimony from one of my clients Dave. "The truth is I didn't have time until I came across this program. Now I lost 20 lbs"`,
  },
]

function PortfolioPage() {
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [activeEmailIndex, setActiveEmailIndex] = useState(0)

  const activeEmail = emails[activeEmailIndex]

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
                  With our new dietary regimen you can eat your favorite food and still be healthy.
                </p>
              </div>

              <div className="rounded-xl border border-white/8 bg-slate-950/50 p-5 sm:col-span-2">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Landing page body</p>
                <p className="whitespace-pre-line text-sm leading-relaxed text-slate-300">
{`Stop being fooled into buying organic food to eat healthy.

Our workout regimen has been recommended by dietary experts like nutritionist Dr. Susan Walters:
"I recommend it to all my patients because it's quick and easy."

Customer John Stevens:
"I love this regimen because it's not about what you eat but how you eat."

You don't have to give up your favorite foods or exercise.`}
                </p>
              </div>

              <div className="rounded-xl border border-white/8 bg-slate-950/50 p-5">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Primary CTA</p>
                <p className="text-sm font-medium text-indigo-300">
                  All you have to do is CLICK HERE to join our program.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Join now and get an entire meal plan absolutely free. Scan QR code and start eating healthy today.
                </p>
              </div>

              <div className="rounded-xl border border-white/8 bg-slate-950/50 p-5">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Email sequence access</p>
                <p className="text-sm text-slate-300">
                  Full 6-email funnel is included as part of this case study.
                </p>
                <button
                  type="button"
                  onClick={() => setShowEmailModal(true)}
                  className="mt-4 rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
                >
                  Click here to view emails
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/8 bg-slate-950/50 p-5">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Sales page promise</p>
                <p className="text-sm leading-relaxed text-slate-300">
                  Your problem isn&apos;t your workout routine, it&apos;s your system. Here&apos;s a workout plan for dads tired of starting over.
                </p>
              </div>

              <div className="rounded-xl border border-white/8 bg-slate-950/50 p-5">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Sales page detail</p>
                <p className="whitespace-pre-line text-sm leading-relaxed text-slate-300">
{`You've made several attempts to start over. Work, wife, and kids get in the way.
Then 3 days off becomes 3 weeks off.

My name is Edwin. I help dads get fit because I also faced obesity, low energy, and failed plans.
I designed a system that fits a busy schedule and lost 40 lbs in 15 weeks.

Busy Dads Method includes:
12 week training program, 25 minute workouts, no-prep nutrition framework, weekly check-ins, direct coaching access.

Single investment: $497. 30-day full reimbursement if no results in the first month.

CTA: CLICK HERE to start getting in shape today.`}
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

      {showEmailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4">
          <div className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
                Email Funnel Viewer
              </p>
              <button
                type="button"
                onClick={() => setShowEmailModal(false)}
                className="rounded-md border border-white/20 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="grid max-h-[calc(90vh-65px)] gap-0 md:grid-cols-[260px_1fr]">
              <div className="overflow-y-auto border-r border-white/10 bg-slate-950/60 p-3">
                {emails.map((email, idx) => (
                  <button
                    key={email.subject}
                    type="button"
                    onClick={() => setActiveEmailIndex(idx)}
                    className={`mb-2 w-full rounded-lg border px-3 py-2 text-left transition ${
                      activeEmailIndex === idx
                        ? 'border-indigo-400/40 bg-indigo-500/15'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <p className="text-xs font-semibold text-indigo-300">{email.tag}</p>
                    <p className="mt-1 text-sm text-slate-200">{email.subject}</p>
                  </button>
                ))}
              </div>

              <div className="overflow-y-auto p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  Subject
                </p>
                <p className="mt-1 text-base font-semibold text-white">{activeEmail.subject}</p>
                <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-300">
                  {activeEmail.copy}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default PortfolioPage