import LegalPage, { A, B, H3, List, P, Ph, Table } from '../components/Legal'

const sections = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <P>
          <Ph>[Legal company name]</Ph> ("<B>JobHopper</B>", "we", "us") runs
          the JobHopper app and its servers. We decide how and why your personal
          data is used (we are the "controller").
        </P>
        <P>
          Contact for privacy questions: <Ph>[privacy email address]</Ph> ·{' '}
          <Ph>[postal address]</Ph>
        </P>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    body: (
      <>
        <H3>2.1 Information you give us</H3>
        <Table
          head={['What', 'When / why']}
          rows={[
            [
              'Full name, email, phone number (US mobile), password, date of birth',
              'Creating and securing your account, verifying that you are 16 or older, sending one-time codes.',
            ],
            [
              'Profile photo and (workers) a short bio',
              'Shown to the other person on a job so they know who they are dealing with.',
            ],
            [
              'Addresses (street, city, state, ZIP, optional notes, map position)',
              'Where a job takes place, your saved addresses and your default address.',
            ],
            [
              'Service preferences (customers) · services, experience level and availability (workers)',
              'Showing you relevant workers and jobs, and matching jobs to workers.',
            ],
            [
              'Job posts: title, description, photos (up to 5), budget, urgency, preferred date/time, applications, counter-offers',
              'Running the marketplace.',
            ],
            [
              'Chat messages and photos you send',
              'Letting the customer and worker of a job talk to each other.',
            ],
            [
              'Ratings and reviews',
              'Building trust between customers and workers. Reviews are visible on profiles.',
            ],
            [
              'Reports, blocks, support tickets, dispute messages and evidence photos',
              'Keeping the community safe and resolving problems.',
            ],
            [
              'Payment details',
              'Typed into the secure form of our payment provider, Stripe. We receive the result, the card brand and last four digits, and your transaction history — not the full card number. Workers who withdraw money give their payout details to Stripe.',
            ],
            [
              <>
                Identity check (workers,{' '}
                <em>only if you choose to verify and when the feature is available</em>)
              </>,
              'Photos of an ID document and a face check are collected by our verification partner, Veriff. We receive the result (for example approved / declined) and a verified badge.',
            ],
          ]}
        />

        <H3>2.2 Information collected automatically</H3>
        <List>
          <li>
            <B>Location.</B> With your permission, your device's precise
            location <em>while the app is open</em> — to set your address, show
            jobs and workers nearby, and (for workers on their way to a job) to
            show the customer the worker's live route. The app does not collect
            location in the background.
          </li>
          <li>
            <B>Device and app information.</B> A device identifier created for
            the app, device model, platform (iOS or Android), app version, and
            push-notification tokens, so we can sign you in, keep your session
            secure and send you notifications and incoming-call alerts.
          </li>
          <li>
            <B>Voice calls.</B> When you call the other person on a job, the
            audio travels through our call provider (Agora) in real time. We do
            not record call audio. We keep basic call records (who, when, and
            how it ended).
          </li>
          <li>
            <B>Usage logs.</B> Our servers keep standard technical logs (for
            example IP address, time and requests) for security and to fix
            problems.
          </li>
        </List>

        <H3>2.3 Information from sign-in providers</H3>
        <P>
          If you continue with <B>Google</B> or <B>Sign in with Apple</B>, we
          receive your name and email (Apple may give us a private relay email)
          and a sign-in token from that provider. We never see your Google or
          Apple password.
        </P>

        <H3>2.4 What we do not collect</H3>
        <P>
          We do not use advertising or analytics SDKs, we do not track you
          across apps or websites, and we do not access your contacts, calendar
          or health data.
        </P>
      </>
    ),
  },
  {
    id: 'how-we-use-it',
    title: 'How we use your information',
    body: (
      <>
        <List>
          <li>To create your account, sign you in and keep it secure.</li>
          <li>
            To let customers post jobs, hire workers, chat, call, track a job
            and pay safely; and to let workers find jobs, get hired and get
            paid.
          </li>
          <li>
            To hold payments in escrow and release or refund them according to
            the <A href="/terms-and-conditions">Terms &amp; Conditions</A>.
          </li>
          <li>To send notifications about your jobs, messages, calls and payments.</li>
          <li>
            To personalise results (for example nearby and recommended jobs and
            workers).
          </li>
          <li>
            To prevent fraud and abuse, enforce our Terms, handle reports,
            disputes and support requests, and meet legal obligations.
          </li>
          <li>To improve the app and fix problems.</li>
        </List>
        <P>
          Our legal bases (where such laws apply): performing our contract with
          you, your consent (for example location, camera, notifications), our
          legitimate interests in running a safe marketplace, and legal
          obligations.
        </P>
      </>
    ),
  },
  {
    id: 'who-we-share-with',
    title: 'Who we share it with',
    body: (
      <>
        <P>
          <B>Other users.</B> The person on the other side of a job sees what
          they need: your name, photo, rating, job details, address, chat, and
          (for workers) live route while travelling to the job. Reviews and
          profile information are visible to other users.
        </P>
        <P>
          <B>Service providers</B> who process data for us under their own
          privacy terms:
        </P>
        <Table
          head={['Provider', 'What for']}
          rows={[
            ['Stripe', 'Card payments, escrow and worker payouts'],
            ['Veriff', 'Worker identity verification (optional)'],
            ['Agora', 'In-app voice calls'],
            [
              'Google (Firebase Authentication, Cloud Messaging, Remote Config, Google Sign-In, Google Maps / Places)',
              'Sign-in, push notifications, remote app settings, maps and address search',
            ],
            [
              'Apple (Sign in with Apple, push notification service)',
              'Sign-in and notifications on iPhone',
            ],
            [
              <Ph key="p">[hosting / email / SMS provider names]</Ph>,
              'Running our servers, and sending one-time codes and emails',
            ],
          ]}
        />
        <P>
          <B>Legal and safety.</B> We may disclose information if the law
          requires it, to protect people's safety, or to defend our rights. If
          we are part of a merger or sale, data may move to the new owner under
          this policy.
        </P>
        <P>
          We do not sell your personal information and do not share it for
          advertising.
        </P>
      </>
    ),
  },
  {
    id: 'how-long-we-keep-it',
    title: 'How long we keep it',
    body: (
      <P>
        We keep your information while your account is active. When you delete
        your account we delete or anonymise your personal data, except what we
        must keep for legal, tax, fraud-prevention or dispute reasons (for
        example payment and transaction records), which we keep for{' '}
        <Ph>[retention period, e.g. 7 years]</Ph>. Chat and job history may
        remain visible to the other person in an anonymised form where needed
        to keep their records complete. Backups are removed within{' '}
        <Ph>[number]</Ph> days.
      </P>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your choices and rights',
    body: (
      <List>
        <li>
          <B>Permissions.</B> You can turn Location, Camera, Photos, Microphone
          and Notifications on or off at any time in your phone's Settings.
          There is also a Push Notifications switch under Profile → Edit
          Profile.
        </li>
        <li>
          <B>Access and correct.</B> Edit your name, photo, bio, addresses and
          preferences in the app.
        </li>
        <li>
          <B>Block and report.</B> Block or report another user from their
          profile or chat.
        </li>
        <li>
          <B>Change password.</B> Profile → Change Password.
        </li>
        <li>
          <B>Delete your data.</B> See <A href="#delete-account">section 7</A>.
        </li>
        <li>
          <B>Other rights.</B> Depending on where you live (for example
          California or the EU/UK) you may have the right to access, correct,
          delete, export or object to the use of your data, and to complain to
          a regulator. Email <Ph>[privacy email address]</Ph> and we will
          answer within <Ph>[30]</Ph> days.
        </li>
      </List>
    ),
  },
  {
    id: 'delete-account',
    title: 'Delete your account',
    body: (
      <>
        <P>
          <B>In the app:</B> open <em>Profile → Delete Account</em> and confirm.
          Your account is deleted permanently and you are signed out.
        </P>
        <P>
          <B>Without the app:</B> email <Ph>[privacy email address]</Ph> from
          the email address on your account with the subject "Delete my
          account". We will verify it is you and delete the account, then tell
          you when it is done.
        </P>
        <P>
          What happens: your profile, photos, addresses and messages are deleted
          or anonymised as described in section 5. Records we must keep by law
          (payments, refunds, disputes) are kept for the period above. Some jobs
          you took part in may remain visible to the other person without your
          name or photo.
        </P>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <P>
        We use encrypted connections (HTTPS) for all traffic, store your
        session securely on the device, and limit who can access data on our
        servers. No system is perfectly secure; please use a strong password
        and tell us if you think your account was accessed by someone else.
      </P>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <P>
        JobHopper is for people aged <B>16 and over</B>. We do not knowingly
        collect data from anyone younger. If you think a child has an account,
        contact us and we will delete it.
      </P>
    ),
  },
  {
    id: 'international-transfers',
    title: 'International transfers',
    body: (
      <P>
        We and our providers may process data in the United States and other
        countries. Where required, we use legal safeguards for these transfers.{' '}
        <Ph>[adjust to where your servers and users are]</Ph>
      </P>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <P>
        If we change this policy in a way that matters, we will tell you in the
        app or by email before the change takes effect and update the date at
        the top.
      </P>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: (
      <P>
        <Ph>[Legal company name]</Ph>
        <br />
        <Ph>[postal address]</Ph>
        <br />
        <Ph>[privacy email address]</Ph>
        <br />
        Or use <em>Profile → Help &amp; Support</em> in the app.
      </P>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="JobHopper connects people who need a local service done (customers) with people who do it (workers). To make that work we collect the details you give us, your location while you use the app, your photos and messages for your jobs, and the information our payment, call and sign-in partners need. We do not sell your data, we do not show ads, and we do not track you across other apps or websites. You can delete your account from inside the app."
      sections={sections}
    />
  )
}
