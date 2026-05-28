import React, { useEffect, useState } from "react";
import "./Review.css";
import { createReview, getReviews } from "../api/reviewApi";

const StarDisplay = ({ rating }) => {
  return (
    <div className="star-display">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "star filled" : "star"}>★</span>
      ))}
    </div>
  );
};

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm]       = useState({ name: "", message: "", rating: 5 });

  const loadReviews = async () => {
    try {
      const res = await getReviews();
      setReviews(res?.reviews || []);
    } catch (err) {
      console.log("Load error:", err);
    }
  };

  useEffect(() => { loadReviews(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.message.trim()) return;
    try {
      setLoading(true);
      const res = await createReview({
        name:    form.name || "Anonymous",
        message: form.message,
        rating:  Number(form.rating),
      });
      setReviews(res?.reviews || []);
      setForm({ name: "", message: "", rating: 5 });
    } catch (err) {
      console.log("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  const avgRating = reviews.length
    ? (reviews.reduce((s, r) => s + (Number(r.rating) || 5), 0) / reviews.length).toFixed(1)
    : "4.8";

  return (
    <div className="review-page">

      {/* HERO */}
      <section className="rv-hero">
        <div className="rv-hero-inner">
          <span className="rv-label-tag">Customer Reviews</span>
          <h1 className="rv-hero-title">What Our Customers Say</h1>
          <p className="rv-hero-sub">
            Share your experience and help others make better choices.
          </p>
          <div className="rv-stats">
            <div className="rv-stat">
              <strong>{reviews.length}</strong>
              <span>Total Reviews</span>
            </div>
            <div className="rv-stat-divider" />
            <div className="rv-stat">
              <strong>{avgRating}</strong>
              <span>Average Rating</span>
            </div>
            <div className="rv-stat-divider" />
            <div className="rv-stat">
              <strong>100%</strong>
              <span>Verified</span>
            </div>
          </div>
        </div>
      </section>

      <div className="rv-body">

        {/* FORM */}
        <section className="rv-form-section">
          <div className="rv-form-card">
            <h2 className="rv-form-title">Write a Review</h2>
            <p className="rv-form-sub">Your feedback matters to us.</p>

            <form className="rv-form" onSubmit={handleSubmit}>
              <div className="rv-field">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Arjun Sharma"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="rv-field">
                <label>Rating</label>
                <select name="rating" value={form.rating} onChange={handleChange}>
                  <option value="5">★★★★★  —  Excellent</option>
                  <option value="4">★★★★☆  —  Good</option>
                  <option value="3">★★★☆☆  —  Average</option>
                  <option value="2">★★☆☆☆  —  Poor</option>
                  <option value="1">★☆☆☆☆  —  Terrible</option>
                </select>
              </div>

              <div className="rv-field">
                <label>Your Review</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your experience..."
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                />
              </div>

              <button type="submit" className="rv-submit" disabled={loading}>
                {loading ? (
                  <><span className="rv-spinner" /> Submitting...</>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Submit Review
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* REVIEWS LIST */}
        <section className="rv-list-section">
          <h2 className="rv-list-title">
            All Reviews
            <span className="rv-count">{reviews.length}</span>
          </h2>

          {reviews.length === 0 ? (
            <div className="rv-empty">
              <div className="rv-empty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <p>No reviews yet. Be the first to share your experience!</p>
            </div>
          ) : (
            <div className="rv-grid">
              {reviews.map((r, i) => (
                <div className="rv-card" key={r._id || i}>
                  <div className="rv-card-top">
                    <div className="rv-avatar">
                      {r?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                    <div className="rv-meta">
                      <h4 className="rv-name">{r.name}</h4>
                      <StarDisplay rating={Number(r.rating) || 5} />
                    </div>
                    <span className="rv-verified">Verified</span>
                  </div>
                  <p className="rv-text">{r.review}</p>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default Review;