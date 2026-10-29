import { CircleAlert, CircleCheck, Clock, MessageCircle, ShieldAlert } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button, container, Eyebrow } from '../components/ui'

// Any service that accepts a JSON POST works here (Formspree, Basin, a
// serverless function...). Set it in .env as VITE_SUPPORT_FORM_ENDPOINT.
const endpoint = import.meta.env.VITE_SUPPORT_FORM_ENDPOINT

const roles = ['Customer', 'Worker', 'Not using the app yet']

const topics = [
  'Account & sign-in',
  'Payments, refunds & payouts',
  'A job or a dispute',
  'Report a user or safety concern',
  'Delete my account / my data',
  'Something else',
]

const notes = [
  {
    Icon: MessageCircle,
    title: 'Already in the app?',
    body: 'Profile → Help & Support reaches the same team and includes your account details, so we can help faster.',
  },
  {
    Icon: Clock,
    title: 'When we reply',
    body: 'We aim to respond within 24–48 hours, by email to the address you give us.',
  },
  {
    Icon: ShieldAlert,
    title: 'In an emergency',
    body: 'Call your local emergency number. JobHopper is not an emergency service.',
  },
]

const field =
  'w-full rounded-[14px] border border-stroke bg-white px-4 py-3.5 text-[16px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-navy focus:ring-2 focus:ring-navy/15'

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="text-[14px] font-semibold text-navy">
      {children}
    </label>
  )
}

export default function Support() {
  const [role, setRole] = useState(roles[0])
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  useEffect(() => {
    document.title = 'JobHopper — Contact Support'
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    if (!endpoint) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), role }),
      })
      if (!res.ok) throw new Error(res.statusText)
      form.reset()
      setRole(roles[0])
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="bg-blue-bg-soft py-14 lg:py-[100px]">
        <div className={`${container} flex flex-col items-start gap-5`}>
          <Eyebrow variant="outline">Support</Eyebrow>
          <h1 className="text-[34px] leading-tight font-extrabold text-navy sm:text-[44px] lg:text-[56px]">
            Contact Us
          </h1>
          <p className="max-w-[720px] text-[16px] leading-[28px] text-muted sm:text-[18px]">
            Questions about a job, a payment or your account? Send us a message
            and a real person on the JobHopper team will get back to you.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-[100px]">
        <div
          className={`${container} flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-20`}
        >
          <div className="w-full max-w-[900px] flex-1 rounded-[20px] p-6 shadow-card sm:p-10">
            {status === 'sent' ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <CircleCheck className="size-14 text-green" strokeWidth={1.8} />
                <h2 className="text-[24px] font-extrabold text-navy sm:text-[28px]">
                  Message sent
                </h2>
                <p className="max-w-[480px] text-[16px] leading-[26px] text-muted">
                  Thanks for getting in touch. We'll reply to your email within
                  24–48 hours.
                </p>
                <Button variant="navy" onClick={() => setStatus('idle')} className="mt-2">
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Full name</Label>
                    <input id="name" name="name" required autoComplete="name" className={field} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="The one on your account, if you have one"
                      className={field}
                    />
                  </div>
                </div>

                <fieldset className="flex flex-col gap-2">
                  <legend className="mb-2 text-[14px] font-semibold text-navy">
                    I am a
                  </legend>
                  <div className="flex flex-wrap gap-2.5">
                    {roles.map((r) => (
                      <button
                        key={r}
                        type="button"
                        aria-pressed={role === r}
                        onClick={() => setRole(r)}
                        className={`rounded-full px-5 py-2.5 text-[15px] font-bold transition-colors ${
                          role === r
                            ? 'bg-navy text-white'
                            : 'border border-stroke text-muted hover:border-navy hover:text-navy'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="topic">What is it about?</Label>
                  <select id="topic" name="topic" required defaultValue="" className={field}>
                    <option value="" disabled>
                      Choose a topic
                    </option>
                    {topics.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="jobId">
                    Job ID <span className="font-normal text-muted">(optional)</span>
                  </Label>
                  <input
                    id="jobId"
                    name="jobId"
                    placeholder="Shown on the job screen in the app"
                    className={field}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    minLength={10}
                    placeholder="Tell us what happened and how we can help"
                    className={`${field} resize-y`}
                  />
                </div>

                {status === 'error' && (
                  <p
                    role="alert"
                    className="flex items-start gap-2.5 rounded-[14px] bg-[#fdecec] px-4 py-3 text-[15px] text-[#b42318]"
                  >
                    <CircleAlert className="mt-0.5 size-5 shrink-0" />
                    We couldn't send your message. Please try again, or use
                    Profile → Help &amp; Support in the app.
                  </p>
                )}

                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[14px] text-muted">
                    We use your details only to answer you. See our{' '}
                    <a
                      href="/privacy-and-policy"
                      className="font-semibold text-green underline decoration-green/40 underline-offset-4 hover:decoration-green"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <Button
                    type="submit"
                    variant="green"
                    arrow
                    disabled={status === 'sending'}
                    className="disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </Button>
                </div>
              </form>
            )}
          </div>

          <aside className="flex w-full flex-col gap-5 lg:w-[400px] lg:shrink-0">
            {notes.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-4 rounded-[20px] bg-green-bg-soft p-6"
              >
                <Icon className="size-7 shrink-0 text-green" strokeWidth={1.8} />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[17px] font-bold text-navy">{title}</h3>
                  <p className="text-[15px] leading-[24px] text-muted">{body}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  )
}
