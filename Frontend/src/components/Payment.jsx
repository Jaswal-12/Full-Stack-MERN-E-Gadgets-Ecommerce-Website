import React, { useState } from "react";
import { createOrder, verifyPayment } from "../api/paymentApi";
import "./Payment.css";

const Payment = ({ amount }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handlePayment = async () => {
    setLoading(true);
    setStatus(null);
    try {
      const { data } = await createOrder(amount);
      const options = {
        key: "rzp_test_your_key",
        amount: data.order.amount,
        currency: "INR",
        order_id: data.order.id,
        name: "E-Gadgets Store",
        description: "Secure Checkout",
        theme: { color: "#2f80ed" },
        handler: async function (response) {
          await verifyPayment(response);
          setStatus("success");
          setLoading(false);
        },
      };
      const razor = new window.Razorpay(options);
      razor.on("payment.failed", () => {
        setStatus("error");
        setLoading(false);
      });
      razor.open();
    } catch (err) {
      console.log(err);
      setStatus("error");
      setLoading(false);
    }
  };

  return (
    <div className="payment-wrapper">
      <div className="payment-card">

        {/* Header */}
        <div className="payment-header">
          <span className="payment-label-tag">Secure Checkout</span>
          <h2 className="payment-title">Order Summary</h2>
        </div>

        {/* Summary Row */}
        <div className="payment-summary">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{(amount * 0.85).toLocaleString("en-IN")}</span>
          </div>
          <div className="summary-row">
            <span>GST (18%)</span>
            <span>₹{(amount * 0.15).toLocaleString("en-IN")}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span className="free-tag">FREE</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-row total-row">
            <span>Total Payable</span>
            <span className="total-amount">₹{Number(amount).toLocaleString("en-IN")}</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="trust-badges">
          <div className="badge-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>SSL Encrypted</span>
          </div>
          <div className="badge-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
            </svg>
            <span>100% Safe</span>
          </div>
          <div className="badge-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
            <span>Razorpay</span>
          </div>
        </div>

        {/* Pay Button */}
        <button
          className={`pay-btn ${loading ? "loading" : ""}`}
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner" />
              Processing...
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              Pay ₹{Number(amount).toLocaleString("en-IN")}
            </>
          )}
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <div className="payment-status success">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Payment successful. Thank you for your order!
          </div>
        )}
        {status === "error" && (
          <div className="payment-status error">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            Payment failed. Please try again.
          </div>
        )}

        <p className="payment-note">
          By completing this purchase you agree to our
          <a href="/terms"> Terms of Service</a>.
        </p>
      </div>
    </div>
  );
};

export default Payment;