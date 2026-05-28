import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Payment from "../components/Payment";
import "./Cart.css";

const Cart = () => {
  const { cart, fetchCart, handleRemove } = useCart();
  const [removingId, setRemovingId] = useState(null);

  useEffect(() => {
    fetchCart();
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + (item.items?.[0]?.product?.price || 0),
    0
  );

  const onRemove = async (id) => {
    setRemovingId(id);
    try {
      await handleRemove(id);
    } finally {
      setRemovingId(null);
    }
  };

  return (
    <div className="cart-page">

      {/* Page Header */}
      <div className="cart-header">
        <span className="cart-label-tag">My Cart</span>
        <h1 className="cart-title">Your Cart</h1>
        {cart.length > 0 && (
          <p className="cart-count">
            {cart.length} item{cart.length > 1 ? "s" : ""} in your cart
          </p>
        )}
      </div>

      {cart.length === 0 ? (

        /* ── Empty State ── */
        <div className="cart-empty">
          <div className="empty-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </div>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything yet.</p>
          <a href="/products" className="empty-btn">Browse Products</a>
        </div>

      ) : (

        <div className="cart-layout">

          {/* ── Cart Items ── */}
          <div className="cart-items">
            {cart.map((item) => {
              const product = item.items?.[0]?.product;
              const isRemoving = removingId === item._id;
              return (
                <div className={`cart-card ${isRemoving ? "cart-card--removing" : ""}`} key={item._id}>

                  {/* Product Image */}
                  {product?.image && (
                    <div className="cc-image-wrap">
                      <img src={product.image} alt={product.name} className="cc-image" />
                    </div>
                  )}

                  {/* Product Info */}
                  <div className="cc-info">
                    {product?.category && (
                      <span className="cc-category">{product.category}</span>
                    )}
                    <h3 className="cc-name">{product?.name}</h3>
                    {product?.description && (
                      <p className="cc-desc">{product.description}</p>
                    )}
                  </div>

                  {/* Price + Remove */}
                  <div className="cc-right">
                    <div className="cc-price-wrap">
                      <span className="cc-price-label">Price</span>
                      <span className="cc-price">
                        ₹{Number(product?.price).toLocaleString("en-IN")}
                      </span>
                    </div>
                    <button
                      className="cc-remove"
                      onClick={() => onRemove(item._id)}
                      disabled={isRemoving}
                    >
                      {isRemoving ? (
                        <span className="cc-spinner" />
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                          <path d="M10 11v6M14 11v6" />
                          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                        </svg>
                      )}
                      {!isRemoving && <span>Remove</span>}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* ── Order Summary + Payment ── */}
          <div className="cart-summary">
            <div className="summary-card">
              <h3 className="summary-title">Order Summary</h3>

              <div className="summary-rows">
                <div className="summary-row">
                  <span>Items ({cart.length})</span>
                  <span>₹{total.toLocaleString("en-IN")}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery</span>
                  <span className="summary-free">FREE</span>
                </div>
                <div className="summary-divider" />
                <div className="summary-row summary-total">
                  <span>Total Payable</span>
                  <span>₹{total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="summary-payment">
                <Payment amount={total} />
              </div>

              <div className="summary-trust">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Secure & encrypted checkout
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;