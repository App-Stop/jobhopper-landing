import LegalPage, { A, B, H3, List, P, Ph, Table } from '../components/Legal'

const sections = [
  {
    id: 'agreeing',
    title: 'Agreeing to these Terms',
    body: (
      <P>
        By creating an account or using JobHopper you agree to these Terms
        &amp; Conditions and to our <A href="/privacy-policy">Privacy Policy</A>.
        If you do not agree, do not use the app. The app is provided by{' '}
        <Ph>[Legal company name]</Ph> ("<B>JobHopper</B>", "we", "us").
      </P>
    ),
  },
  {
    id: 'who-can-use',
    title: 'Who can use JobHopper',
    body: (
      <List>
        <li>
          You must be at least <B>16 years old</B> and able to enter into a
          binding contract where you live.
        </li>
        <li>
          You must give true, current information (name, email, US mobile phone
          number, date of birth) and keep it up to date.
        </li>
        <li>
          One person, one account. You can use the same account as a{' '}
          <B>customer</B> and as a <B>worker</B>; switching to the worker role
          asks you for the extra details workers need.
        </li>
        <li>
          Keep your password private. You are responsible for what happens on
          your account. Tell us at once if you think someone else is using it.
        </li>
      </List>
    ),
  },
  {
    id: 'what-jobhopper-is',
    title: 'What JobHopper is — and is not',
    body: (
      <List>
        <li>
          JobHopper is a platform that connects customers and independent
          workers and helps them agree on a job, talk, call, track the job and
          pay.
        </li>
        <li>
          <B>Workers are independent</B>, not our employees, agents or
          partners. The agreement for a job is between the customer and the
          worker.
        </li>
        <li>
          We do not guarantee that a worker will accept or finish a job, that
          work will be of any particular quality, or that a customer will behave
          well. We do not carry out the work and are not responsible for it,
          except as the law requires.
        </li>
        <li>
          A verified badge, rating or review is information only. It is not a
          guarantee, licence or endorsement. Workers are responsible for having
          any licence, insurance or permit their trade needs.
        </li>
      </List>
    ),
  },
  {
    id: 'posting-and-doing-jobs',
    title: 'Posting and doing jobs',
    body: (
      <>
        <H3>Customers</H3>
        <List>
          <li>
            Describe the job accurately: what is needed, where, when, your
            budget and how urgent it is. Add clear photos (up to 5).
          </li>
          <li>
            You can post an <B>open job</B> (workers apply) or{' '}
            <B>hire a specific worker</B> (direct hire). Urgency options are
            standard, within 24 hours and ASAP.
          </li>
          <li>
            When you accept a worker you agree to pay the agreed price plus the
            fees and taxes shown at payment.
          </li>
          <li>
            Make sure the address is correct and someone can give access. Do not
            ask a worker to do anything illegal or unsafe.
          </li>
        </List>
        <H3>Workers</H3>
        <List>
          <li>
            Apply only for jobs you can do. You may counter-offer a different
            price with a note; the customer decides.
          </li>
          <li>
            Keep your services and availability accurate, arrive when agreed,
            and do the work with reasonable skill and care.
          </li>
          <li>
            Use the in-app steps (on the way → arrived → work started →
            completed) so both sides can follow the job.
          </li>
          <li>
            Some features may require identity verification. Where available,
            you agree to the check run by our partner Veriff.
          </li>
        </List>
      </>
    ),
  },
  {
    id: 'payments',
    title: 'Payments',
    body: (
      <List>
        <li>
          Payments are handled by <B>Stripe</B>. By paying or withdrawing you
          also accept Stripe's terms. We do not store full card numbers.
        </li>
        <li>
          <B>Escrow.</B> When the customer accepts a worker they pay in the
          app. The money is held and is <B>not</B> given to the worker until
          the job is completed and the customer confirms it, or the
          confirmation deadline shown on the job passes without a problem being
          reported, after which it is released automatically.
        </li>
        <li>
          <B>Fees and taxes.</B> The price shown at payment can include the
          worker's service fee, a platform fee, an optional priority fee for
          urgent jobs, and any applicable taxes. Current platform fee:{' '}
          <Ph>[amount or percentage]</Ph>. We may change fees for future jobs.
        </li>
        <li>
          <B>Worker payouts.</B> Workers see their earnings in the in-app
          Wallet and withdraw to their bank through Stripe Connect. Workers must
          finish Stripe's onboarding and are responsible for their own taxes.
        </li>
        <li>
          Do not pay or ask to be paid outside the app for jobs found through
          JobHopper. Doing so removes the protection described in these Terms
          and may lead to account removal.
        </li>
      </List>
    ),
  },
  {
    id: 'cancellations-and-refunds',
    title: 'Cancellations and refunds',
    body: (
      <>
        <P>
          Either person can cancel an open or active job from the job screen (
          <em>Cancel this job</em>). The app explains the rule and an estimate
          before you confirm, and the final result is saved when the
          cancellation is accepted.
        </P>
        <Table
          head={['Situation', 'Result']}
          rows={[
            [
              <>
                Customer cancels <B>before paying</B>
              </>,
              'Nothing was charged, so nothing is refunded.',
            ],
            [
              <>
                <B>Worker</B> cancels after the customer paid (before the job is
                confirmed complete)
              </>,
              <>
                The customer gets a <B>full refund</B> of what they paid. The
                worker is not paid.
              </>,
            ],
            [
              <>
                Customer cancels a <B>standard</B> job, paid, work not started,
                at least <B>24 hours</B> before the scheduled time
              </>,
              <>
                The customer is refunded a share of the <em>service fee</em>{' '}
                (the percentage we set, shown in the app before you confirm —
                currently <Ph>[percentage]</Ph>). The rest of the service fee
                goes to the worker. Platform fee, priority fee and taxes are
                kept by us.
              </>,
            ],
            [
              <>
                Customer cancels a standard job <B>less than 24 hours</B> before
                the scheduled time, or <B>after work has started</B>
              </>,
              'No refund. The worker receives the full service fee. Platform fee, priority fee and taxes are kept.',
            ],
            [
              <>
                Customer cancels an <B>ASAP</B> or <B>within-24-hours</B> job
                after paying
              </>,
              'No refund. The worker receives the full service fee.',
            ],
          ]}
        />
        <P>
          Refunds go back to the original payment method and can take several
          business days to appear. Once the customer has confirmed completion,
          or the payment has been released, the job can no longer be cancelled.
        </P>
      </>
    ),
  },
  {
    id: 'problems-and-disputes',
    title: 'Problems and disputes',
    body: (
      <List>
        <li>
          If something is wrong with finished work, the customer can report an
          issue in the app <B>before</B> the confirmation deadline instead of
          confirming. The job is then held for review.
        </li>
        <li>
          Both sides may be asked for details and photos. We review what the
          parties send and decide in good faith whether payment is released to
          the worker, refunded to the customer, or handled in another fair way.
          Our decision is final inside the app; it does not take away rights
          you have under the law.
        </li>
        <li>
          Please try to solve things with the other person first, using the
          in-app chat.
        </li>
      </List>
    ),
  },
  {
    id: 'content-and-conduct',
    title: 'Your content and how you behave',
    body: (
      <>
        <P>
          You own what you post (photos, job descriptions, messages, reviews)
          but give us a worldwide, non-exclusive licence to host, display and
          use it to run and improve JobHopper. You promise you have the right to
          post it.
        </P>
        <P>
          <B>Do not</B> post or do any of the following. We have{' '}
          <B>zero tolerance</B> for it:
        </P>
        <List>
          <li>
            harassment, threats, hate, discrimination, sexual or violent
            content, or content involving minors;
          </li>
          <li>
            fraud, scams, fake jobs, fake or paid reviews, impersonation, or
            false information;
          </li>
          <li>illegal or dangerous work, or anything that breaks someone's rights;</li>
          <li>
            sharing other people's private information, or contacting people
            for anything other than a job;
          </li>
          <li>
            trying to get around fees, hack, scrape or disrupt the app, or use
            it for spam.
          </li>
        </List>
        <P>
          <B>Reporting and blocking.</B> You can <em>report</em> a user (worker
          profile or chat → ⋮ menu) and <em>block</em> a user (chat → ⋮ menu;
          manage in Profile → Blocked Accounts). Blocked people cannot contact
          you. We review reports and may remove content, warn, suspend or close
          accounts. To reach us directly use <em>Profile → Help &amp; Support</em>{' '}
          or <Ph>[support email]</Ph>; we aim to respond within{' '}
          <Ph>[24–48 hours]</Ph>.
        </P>
      </>
    ),
  },
  {
    id: 'safety',
    title: 'Safety',
    body: (
      <P>
        Meeting a stranger and letting them into your home or workplace has
        risks. Check the profile, rating and reviews, keep communication and
        payment in the app, tell someone where you are going, and use your
        judgement. In an emergency call your local emergency number — JobHopper
        is not an emergency service.
      </P>
    ),
  },
  {
    id: 'calls-location-notifications',
    title: 'Calls, location and notifications',
    body: (
      <P>
        The app can make in-app voice calls between the people on a job, share
        a worker's live route with the customer while the worker is travelling
        to the job, and send push notifications. You control these with your
        phone's permissions. Calls are not recorded by us. Details are in the{' '}
        <A href="/privacy-policy">Privacy Policy</A>.
      </P>
    ),
  },
  {
    id: 'ending-your-account',
    title: 'Ending your account',
    body: (
      <List>
        <li>
          You can stop using JobHopper any time and delete your account from{' '}
          <em>Profile → Delete Account</em>. Open jobs, payments and disputes
          must be settled first where the law or these Terms require it.
        </li>
        <li>
          We may suspend or close an account, remove content, or limit features
          if you break these Terms, put others at risk, or if we must by law.
          Where possible we will tell you why.
        </li>
        <li>
          Sections that by nature continue (payments owed, content licence,
          liability, disputes) continue after the account ends.
        </li>
      </List>
    ),
  },
  {
    id: 'our-rights',
    title: 'Our rights in the app',
    body: (
      <P>
        The JobHopper name, logo, design and software belong to us or our
        licensors. You may use the app for its intended purpose only. Do not
        copy, reverse engineer or resell it.
      </P>
    ),
  },
  {
    id: 'third-party-services',
    title: 'Third-party services',
    body: (
      <P>
        The app uses services from others — Stripe (payments), Veriff (identity
        checks), Agora (calls), Google/Firebase and Google Maps, and Apple.
        Their own terms apply when you use those parts, and we are not
        responsible for them.
      </P>
    ),
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers',
    body: (
      <P>
        JobHopper is provided "as is" and "as available". We do not promise
        that it will always work without interruption or errors, or that every
        job will be completed. Some places do not allow limits on certain
        warranties, so parts of this section may not apply to you.
      </P>
    ),
  },
  {
    id: 'limit-of-liability',
    title: 'Limit of liability',
    body: (
      <P>
        To the fullest extent the law allows, JobHopper is not liable for
        indirect, incidental or consequential losses, lost profits or lost
        data, or for the acts, work or omissions of any customer or worker. Our
        total liability to you for anything connected with the app is limited
        to{' '}
        <Ph>
          [the fees you paid us in the 12 months before the claim / a fixed
          amount]
        </Ph>
        . Nothing here limits liability that cannot be limited by law (for
        example for death or personal injury caused by negligence, or for
        fraud).
      </P>
    ),
  },
  {
    id: 'indemnity',
    title: 'If you cause us a claim',
    body: (
      <P>
        You agree to compensate us for losses and costs caused by your breach of
        these Terms, your content, or your misuse of the app, to the extent the
        law allows.
      </P>
    ),
  },
  {
    id: 'changes',
    title: 'Changes',
    body: (
      <P>
        We may update these Terms or the app. If a change matters, we will tell
        you in the app or by email before it starts. Using the app after that
        means you accept the new Terms; if you do not, delete your account.
      </P>
    ),
  },
  {
    id: 'law-and-disputes',
    title: 'Law and disputes',
    body: (
      <P>
        These Terms are governed by the laws of <Ph>[state / country]</Ph>.
        Courts in <Ph>[location]</Ph> have jurisdiction, unless your local
        consumer law gives you the right to use your own courts.{' '}
        <Ph>[Add arbitration / class-action wording if your lawyer recommends it.]</Ph>
      </P>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <P>
        <Ph>[Legal company name]</Ph>
        <br />
        <Ph>[postal address]</Ph>
        <br />
        <Ph>[support email]</Ph>
        <br />
        Or use <em>Profile → Help &amp; Support</em> in the app.
      </P>
    ),
  },
]

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      summary="JobHopper is a marketplace. We help customers find and pay local workers, and workers find and get paid for jobs. We are not the employer of any worker and we do not do the jobs ourselves. Be honest, be respectful, keep payments inside the app, and read how cancellations and refunds work below."
      sections={sections}
    />
  )
}
