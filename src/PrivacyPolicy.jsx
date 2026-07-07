import { Link } from 'react-router-dom'

function Brand() {
  return (
    <div className="brand">
      <span className="brand-mark" aria-hidden="true" />
      <span>
        <span className="b1">Just</span><span className="b2">ab</span>
      </span>
    </div>
  )
}

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <header className="legal-nav">
        <div className="container legal-nav-inner">
          <Link to="/"><Brand /></Link>
          <Link className="legal-back" to="/">← Back to home</Link>
        </div>
      </header>

      <main className="legal-content container">
        <h1>Privacy Policy</h1>

        <p className="legal-meta">
          <strong>Effective date:</strong> July 6, 2026<br />
          <strong>Last updated:</strong> July 6, 2026
        </p>

        <p>
          This Privacy Policy describes how <strong>Justab</strong> ("we," "us," or "our")
          collects, uses, stores, and shares information when you use our mobile
          application (the "App").
        </p>
        <p>
          By using Justab, you agree to the collection and use of information in
          accordance with this policy.
        </p>

        <hr />

        <h2>1. Who we are</h2>
        <p>
          Justab is a mobile bill-splitting app that helps groups scan receipts,
          review items, and split costs.
        </p>
        <p>
          <strong>Developer / Data Controller:</strong> Justab, Inc.<br />
          <strong>Contact email:</strong>{' '}
          <a href="mailto:justabofficial@gmail.com">justabofficial@gmail.com</a><br />
          <strong>Support URL:</strong>{' '}
          <a href="mailto:justabofficial@gmail.com">justabofficial@gmail.com</a>
        </p>

        <h2>2. Information we collect</h2>

        <h3>2.1 Camera access</h3>
        <p>
          Justab requests access to your device <strong>camera</strong> so you can
          photograph receipts directly in the app.
        </p>
        <ul>
          <li><strong>What we collect:</strong> Photos you take of receipts using the in-app camera.</li>
          <li><strong>Why we collect it:</strong> To read receipt line items and prices and create a bill-splitting session for your group.</li>
          <li><strong>When it is used:</strong> Only when you choose to scan a receipt with the camera. We do not access your camera in the background.</li>
        </ul>
        <p>
          You can deny camera permission; in that case, you may still upload a receipt
          from your photo library if you grant photo access.
        </p>

        <h3>2.2 Photo library access</h3>
        <p>
          Justab requests access to your <strong>photo library</strong> so you can
          upload existing receipt images.
        </p>
        <ul>
          <li><strong>What we collect:</strong> Receipt image(s) you select from your device.</li>
          <li><strong>Why we collect it:</strong> To process the receipt and extract items and prices for splitting.</li>
          <li><strong>When it is used:</strong> Only when you choose to upload from your gallery.</li>
        </ul>
        <p>
          We do not access your entire photo library. We only receive the specific
          image(s) you select.
        </p>

        <h3>2.3 Receipt data</h3>
        <p>
          When you scan or upload a receipt, we process and store receipt-related
          information, including:
        </p>
        <ul>
          <li>Receipt image files</li>
          <li>Item names and prices extracted from the receipt (via OCR)</li>
          <li>Tax amounts</li>
          <li>Tip percentage you enter</li>
          <li>Party / session identifiers and join codes</li>
          <li>Item claim and split information shared among party members</li>
        </ul>
        <p>This data is used to power the core bill-splitting experience.</p>

        <h3>2.4 User-provided information</h3>
        <p>You may enter information such as:</p>
        <ul>
          <li>A <strong>username</strong> or display name for a split session</li>
          <li><strong>Manual edits</strong> to receipt items or prices</li>
          <li><strong>Party codes</strong> to join an existing split</li>
        </ul>
        <p>
          We do not require you to create an account with an email address or
          password to use the App.
        </p>

        <h3>2.5 Device and usage information</h3>
        <p>
          We may automatically collect limited technical information needed to
          operate the App, such as:
        </p>
        <ul>
          <li>Device type and operating system version</li>
          <li>App version</li>
          <li>General network/connectivity information when communicating with our servers</li>
        </ul>
        <p>
          We do not use this information to track you across other companies' apps
          or websites for advertising purposes.
        </p>

        <h2>3. How we use your information</h2>
        <p>We use the information described above to:</p>
        <ul>
          <li>Scan and process receipt images</li>
          <li>Extract and display line items and prices</li>
          <li>Create and manage bill-splitting sessions ("parties")</li>
          <li>Calculate per-person totals, including tax and tip</li>
          <li>Allow group members to claim items and view shared totals</li>
          <li>Operate, maintain, and improve the App</li>
          <li>Respond to support requests</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>We do <strong>not</strong> sell your personal information.</p>

        <h2>4. How we store and process data (Supabase)</h2>
        <p>
          Receipt images and related session data are transmitted from the App to our
          backend servers and stored using <strong>Supabase</strong>, a third-party
          cloud platform that provides:
        </p>
        <ul>
          <li><strong>Object storage</strong> for receipt image files</li>
          <li><strong>Database storage</strong> for receipt details, party information, usernames, item claims, and split calculations</li>
        </ul>
        <p>
          Data is stored on servers operated by Supabase and its infrastructure
          providers. Supabase may process data in the United States and/or other
          countries depending on project configuration.
        </p>
        <p>
          For more information about Supabase's privacy practices, see:{' '}
          <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
            https://supabase.com/privacy
          </a>
        </p>
        <p>
          We retain receipt and session data only as long as needed to provide the
          service and for reasonable operational, legal, or security purposes, unless
          a longer retention period is required by law.
        </p>

        <h2>5. How we share information</h2>
        <p>We may share information in the following situations:</p>

        <h3>5.1 With other users in your party</h3>
        <p>If you join or create a split session, other members of that party may see:</p>
        <ul>
          <li>Your username</li>
          <li>Items you claim</li>
          <li>Split totals associated with the session</li>
        </ul>

        <h3>5.2 With service providers</h3>
        <p>We use trusted third-party providers to help operate the App, including:</p>
        <ul>
          <li><strong>Supabase</strong> — cloud storage and database hosting</li>
          <li><strong>Hosting providers</strong> for our backend API (if applicable)</li>
        </ul>
        <p>
          These providers may access information only to perform services on our
          behalf and are expected to protect it appropriately.
        </p>

        <h3>5.3 For legal reasons</h3>
        <p>
          We may disclose information if required to do so by law, regulation, legal
          process, or governmental request, or when we believe disclosure is
          necessary to protect rights, safety, security, or integrity of users or
          the App.
        </p>

        <h2>6. Your choices and permissions</h2>
        <p>You can control certain data collection through your device settings:</p>
        <ul>
          <li><strong>Camera:</strong> Settings → Justab → Camera</li>
          <li><strong>Photos:</strong> Settings → Justab → Photos</li>
        </ul>
        <p>
          You may choose not to provide camera or photo access, but some features
          (receipt scanning or gallery upload) will not work without the relevant
          permission.
        </p>
        <p>
          If you want to request deletion of data associated with a session or have
          questions about your information, contact us at{' '}
          <a href="mailto:justabofficial@gmail.com">justabofficial@gmail.com</a>.
        </p>

        <h2>7. Data security</h2>
        <p>
          We use reasonable administrative, technical, and organizational measures
          designed to protect your information, including encrypted transmission
          (HTTPS) between the App and our servers where configured for production use.
        </p>
        <p>
          No method of transmission or electronic storage is 100% secure. We cannot
          guarantee absolute security.
        </p>

        <h2>8. Children's privacy</h2>
        <p>
          Justab is not intended for children under 13 (or the minimum age required
          in your jurisdiction). We do not knowingly collect personal information
          from children. If you believe a child has provided us information, contact
          us and we will take steps to delete it.
        </p>

        <h2>9. International users</h2>
        <p>
          If you use the App from outside the country where our servers are located,
          your information may be transferred to, stored in, and processed in other
          countries, including the United States, where data protection laws may
          differ from those in your country.
        </p>

        <h2>10. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will
          revise the "Last updated" date at the top of this page. If changes are
          material, we may provide additional notice within the App or by other
          appropriate means.
        </p>
        <p>
          Your continued use of the App after an update means you accept the revised
          policy.
        </p>

        <h2>11. Contact us</h2>
        <p>If you have questions about this Privacy Policy or our data practices, contact us at:</p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:justabofficial@gmail.com">justabofficial@gmail.com</a><br />
          <strong>Support:</strong>{' '}
          <a href="mailto:justabofficial@gmail.com">justabofficial@gmail.com</a>
        </p>

        <hr />

        <h2>Summary for App Store Privacy questionnaire</h2>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Data type</th>
                <th>Collected</th>
                <th>Linked to user</th>
                <th>Used for tracking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Photos / videos (receipt images)</td>
                <td>Yes</td>
                <td>Session username only</td>
                <td>No</td>
              </tr>
              <tr>
                <td>User content (usernames, item claims)</td>
                <td>Yes</td>
                <td>Yes (within session)</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Camera</td>
                <td>Access requested</td>
                <td>N/A</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Photo library</td>
                <td>Access requested</td>
                <td>N/A</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Purposes:</strong> App functionality, product personalization within
          a split session, and service operation.<br />
          <strong>Third-party storage:</strong> Supabase (cloud storage and database).
        </p>
      </main>

      <footer className="legal-footer">
        <div className="container">
          <span>© 2026 Justab, Inc. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
