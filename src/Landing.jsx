import {
  Arrow, Check, Scan, SparkleBox, Clock, Mail,
} from './icons.jsx'
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

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Brand />
        <a className="btn btn-light" href="#download">
          <span>Try Justab free</span><Arrow />
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero">
      <Nav />
      <div className="container hero-inner">
        <h1>
          Scan the receipt.<br />
          <span className="line-2">Split the tab.</span>
        </h1>
        <p className="hero-sub">
          Justab reads every line on your receipt, assigns items to the right
          person, and settles who owes what — in seconds, not arguments.
        </p>
        <div className="hero-checks">
          {['No card required', 'Handles most receipt formats', 'iOS'].map((t) => (
            <span className="hero-check" key={t}><Check /> {t}</span>
          ))}
        </div>
      </div>
    </header>
  )
}

function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <p className="eyebrow">Features</p>
        <h2 className="section-title">
          Everything you need to <span className="accent">end the math</span>.
        </h2>
        <p className="section-sub">
          A focused toolkit that turns the post-dinner shuffle into a five-second tap.
        </p>

        <div className="grid-cards">
          <div className="card">
            <div className="card-icon"><Scan /></div>
            <h3>Text Recognition Scanning</h3>
            <p>
              Snap any paper or digital receipt. Justab extracts items, prices,
              tax, and tip with near-perfect accuracy.
            </p>
          </div>

          <div className="card">
            <div className="card-icon"><SparkleBox /></div>
            <h3>Smart splits</h3>
            <p>
              Tax, tip, discounts, and shared items distribute proportionally —
              fair down to the last penny.
            </p>
          </div>

          <div className="card card-dark" style={{ gridColumn: '1 / -1' }}>
            <p className="eyebrow"><Clock /> Coming Soon</p>
            <h3>On the roadmap</h3>
            <ul className="roadmap-list">
              <li>Group History</li>
              <li>Member/Tip System Reworks</li>
              <li>Venmo Compatability</li>
              <li>Advanced Paid Tier</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: '01', t: 'Snap', d: 'Take a photo of the receipt — paper, screenshot, or PDF.' },
    { n: '02', t: 'Assign', d: 'Tap each line to assign it. Shared items split automatically.' },
    { n: '03', t: 'Settle', d: 'Justab breaks down exactly who owes what: tax, tip, and shared items included so every table walks out even.' },
  ]
  return (
    <section className="section howitworks" id="how">
      <div className="container">
        <p className="eyebrow">How it works</p>
        <h2 className="section-title">From receipt to settled in three taps.</h2>
        <p className="section-sub">
          No spreadsheets. No "who had the second margarita?" No awkward Venmo requests.
        </p>

        <div className="grid-cards" style={{ gridTemplateColumns: '1fr' }}>
          {steps.map((s, i) => (
            <div className={`card step-${i + 1}`} key={s.n}>
              <div className="step-num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OCR() {
  return (
    <section className="section ocr">
      <div className="container">
        <p className="eyebrow center">Built for real meals</p>
        <h2 className="section-title center">
          One scan reads every item, tax, and <span className="accent">tip</span>.
        </h2>
        <p className="section-sub center">
          Justab's on-device OCR understands faded ink, curled paper, and even
          handwritten totals. It separates shared appetizers from solo entrées
          without you lifting a finger.
        </p>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta" id="download">
      <div className="container">
        <div className="cta-card">
          <h2>Stop doing receipt math.</h2>
          <p>Download Justab today and split your next tab in three taps.</p>
          <a className="btn btn-light" href="#">Download for iOS</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Brand />
        <p className="footer-tag">
          Scan receipts. Split costs. Settle up. Justab makes shared spending effortless.
        </p>

        <div className="footer-contact">
          <p className="eyebrow">Get in touch</p>
          <div className="contact-row">
            <span className="contact-icon"><Mail /></span>
            <span>
              <span className="label">Email</span>
              <div className="value">justabofficial@gmail.com</div>
            </span>
          </div>
        </div>

        <div className="footer-divider" />
        <div className="footer-bottom">
          <span>© 2026 Justab, Inc. All rights reserved.</span>
          <span>
            <Link className="footer-link" to="/privacy">Privacy Policy</Link>
          </span>
          <span>Made for everyone who's ever asked "who had the appetizer?"</span>
        </div>
      </div>
    </footer>
  )
}

export default function Landing() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <OCR />
      <CTA />
      <Footer />
    </>
  )
}
