import React, { useEffect, useRef } from 'react'
import './About.css'

const stats = [
  { value: '2,400+', label: 'Products Listed' },
  { value: '98K+',   label: 'Happy Customers' },
  { value: '4.9',    label: 'Average Rating'  },
  { value: '2019',   label: 'Year Founded'    },
]

const values = [
  {
    title: 'Cutting-Edge Technology',
    desc:  'We source only the latest gadgets from top global manufacturers, ensuring you always have access to the most advanced electronics on the market.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: 'Verified Quality',
    desc:  'Every product passes rigorous quality checks before dispatch. We stand fully behind each item we sell with a satisfaction guarantee.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    title: 'Fast & Reliable Delivery',
    desc:  'We offer lightning-fast shipping with real-time order tracking. Your products arrive safely and on time, every single time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    title: '24 / 7 Expert Support',
    desc:  'Our dedicated support team is available around the clock to assist you — from product selection to after-sales service.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
]

const timeline = [
  { year: '2019', event: 'E-Gadgets was founded with 50 products and a clear vision to make premium electronics accessible to all.' },
  { year: '2020', event: 'Surpassed 10,000 customers as demand for home-office technology surged globally.' },
  { year: '2022', event: 'Launched our mobile application and expanded the catalog to over 1,000 products across 15 categories.' },
  { year: '2024', event: 'Reached 98,000+ customers and introduced AI-powered product recommendations on the platform.' },
  { year: '2025', event: 'Launched the New Arrivals 2025 program — delivering the freshest technology, first.' },
]

const team = [
  { name: 'Arjun Sharma',  role: 'Founder & Chief Executive Officer'   },
  { name: 'Priya Mehta',   role: 'Head of Product & Merchandising'      },
  { name: 'Rohan Verma',   role: 'Lead Software Engineer'               },
  { name: 'Sneha Kapoor',  role: 'Director of Customer Experience'      },
]

const About = () => {
  const sectionsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    sectionsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el)
  }

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="about-container">
          <span className="label-tag">About E-Gadgets</span>
          <h1 className="hero-title">
            More Than a Store.<br />
            <span className="hero-accent">A Technology Partner.</span>
          </h1>
          <p className="hero-sub">
            Founded in 2019, E-Gadgets was built on one belief — that everyone deserves
            access to the world's best technology. From cutting-edge smartphones to
            innovative smart-home devices, we curate, verify, and deliver the products
            that power modern life.
          </p>
          <div className="hero-divider" />
          <div className="hero-meta">
            <span>Est. 2019</span>
            <span className="dot" />
            <span>Ludhiana, India</span>
            <span className="dot" />
            <span>2,400+ Products</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats" ref={addRef}>
        <div className="about-container stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card fade-up" style={{ transitionDelay: `${i * 0.08}s` }} key={i}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission" ref={addRef}>
        <div className="about-container mission-inner">
          <div className="mission-text fade-up">
            <span className="label-tag">Our Mission</span>
            <h2 className="section-title">Bringing the Future<br />to Your Fingertips</h2>
            <p>
              Our mission is straightforward: make world-class technology accessible to every household.
              We bridge the gap between cutting-edge innovation and everyday consumers by hand-picking
              products that genuinely improve how people work, communicate, and live.
            </p>
            <p>
              We don't simply list products — we research, test, and stand behind every item in our
              catalog. Whether you are a student equipping a home office, a professional upgrading
              your workflow, or a gamer seeking peak performance, we have exactly what you need.
            </p>
          </div>
          <div className="mission-panel fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="mission-item">
              <span className="mi-number">01</span>
              <div>
                <strong>Global Sourcing</strong>
                <p>Products sourced from certified manufacturers across 30+ countries.</p>
              </div>
            </div>
            <div className="mission-item">
              <span className="mi-number">02</span>
              <div>
                <strong>Quality Verification</strong>
                <p>Multi-point inspection before every product enters our catalog.</p>
              </div>
            </div>
            <div className="mission-item">
              <span className="mi-number">03</span>
              <div>
                <strong>Customer First</strong>
                <p>Every decision is measured by how well it serves our customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values" ref={addRef}>
        <div className="about-container">
          <div className="section-header fade-up">
            <span className="label-tag">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card fade-up" style={{ transitionDelay: `${i * 0.1}s` }} key={i}>
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="about-timeline" ref={addRef}>
        <div className="about-container">
          <div className="section-header fade-up">
            <span className="label-tag">How We Got Here</span>
            <h2 className="section-title">Our Journey</h2>
          </div>
          <div className="timeline-track">
            <div className="timeline-line" />
            {timeline.map((t, i) => (
              <div
                className={`timeline-item fade-up ${i % 2 === 0 ? 'tl-left' : 'tl-right'}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
                key={i}
              >
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="tl-year">{t.year}</span>
                  <p className="tl-event">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team" ref={addRef}>
        <div className="about-container">
          <div className="section-header fade-up">
            <span className="label-tag">The People Behind It</span>
            <h2 className="section-title">Our Leadership Team</h2>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div className="team-card fade-up" style={{ transitionDelay: `${i * 0.09}s` }} key={i}>
                <div className="team-avatar">
                  <span className="avatar-initials">{m.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h4 className="team-name">{m.name}</h4>
                <span className="team-role">{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta" ref={addRef}>
        <div className="cta-glow" />
        <div className="about-container cta-inner fade-up">
          <span className="label-tag">Get Started</span>
          <h2 className="cta-title">Ready to Upgrade Your World?</h2>
          <p className="cta-sub">
            Explore over 2,400 products handpicked for performance, reliability, and innovation.
          </p>
          <div className="cta-buttons">
            <a href="/products" className="btn-primary">Browse Products</a>
            <a href="/contact"  className="btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About