import React, { useState } from "react";
import "./ProductCard.css";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { handleAdd } = useCart();
  const [loading, setLoading] = useState(false);
  const [added, setAdded]     = useState(false);

  const addItem = async () => {
    setLoading(true);
    try {
      const userId = "6831a8c9f4b3d91234abcd56";
      await handleAdd(userId, product._id);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-card">

      {/* Top row — category + id */}
      <div className="card-top">
        <span className="category-tag">{product.category}</span>
        <span className="product-id">
          #{String(product.id ?? product._id).padStart(2, "0")}
        </span>
      </div>

      {/* Image */}
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>

      {/* Body */}
      <div className="card-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
      </div>

      {/* Footer — price + button */}
      <div className="card-footer">
        <div className="price-wrap">
          <span className="price-label">Price</span>
          <span className="price-value">
            ₹{Number(product.price).toLocaleString("en-IN")}
          </span>
        </div>

        <button
          className={`pc-btn ${loading ? "pc-btn--loading" : ""} ${added ? "pc-btn--added" : ""}`}
          onClick={addItem}
          disabled={loading || added}
        >
          {loading ? (
            <><span className="pc-spinner" /> Adding...</>
          ) : added ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Added
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Add to Cart
            </>
          )}
        </button>
      </div>

    </div>
  );
};

export default ProductCard;