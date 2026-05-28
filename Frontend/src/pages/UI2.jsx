import React from "react";
import "./UI2.css";

const UI2 = () => {
  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />

        <div className="left">
          <span className="badge">Premium Collection 2026</span>
          <h1>
            Upgrade Your Lifestyle<br />
            With <span className="accent">Premium Accessories</span>
          </h1>
          <p>
            Discover modern products built for quality, comfort, and everyday
            performance. Shop trending accessories with secure checkout and fast delivery.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Shop Collection</button>
            <button className="btn-outline">View Deals</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h2>50K+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <h2>15K+</h2>
              <p>Products</p>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <h2>99%</h2>
              <p>Positive Reviews</p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="discount-badge">
            <span className="discount-pct">30%</span>
            <span className="discount-off">OFF</span>
          </div>
          <div className="hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop"
              alt="Premium Watch"
            />
          </div>
          <div className="hero-img-blur" />
        </div>
      </section>

     

      {/* Features */}
      <section className="features">
        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          </div>
          <h3>Fast Delivery</h3>
          <p>Delivered across India quickly and reliably.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <h3>Secure Payments</h3>
          <p>Multiple safe and verified payment methods.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
            </svg>
          </div>
          <h3>Premium Quality</h3>
          <p>Carefully curated and verified products only.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-glow" />
        <div className="cta-inner">
          <span className="label-tag">Limited Time</span>
          <h1>Start Shopping Today</h1>
          <p>Premium experience with exclusive offers for every budget.</p>
          <button className="btn-primary">Explore Now</button>
        </div>
      </section>

    </div>
  );
};

export default UI2;