import React from "react";
import "./UI.css";

const dummyProducts = [
  {
    id: 1,
    name: "ProBuds Elite X",
    description:
      "Active noise cancellation with 40-hour battery life and premium spatial audio.",
    price: 4999,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "UltraFit Band 6",
    description:
      "Advanced health tracking — heart rate, SpO2, sleep analysis on your wrist.",
    price: 8499,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6",
  },
  {
    id: 3,
    name: "ZenCam 4K Ultra",
    description:
      "Compact mirrorless camera with 4K 60fps, IBIS, and AI-powered autofocus.",
    price: 12999,
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    id: 4,
    name: "SmartHub Pro",
    description:
      "Control your entire home from one device — lights, locks, climate and more.",
    price: 3299,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827",
  },
  {
    id: 5,
    name: "NeckBand Neo S3",
    description:
      "Magnetic earbuds with 20-hour playback, deep bass and fast-pair technology.",
    price: 2299,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
  },
  {
    id: 6,
    name: "PowerDesk 65W Duo",
    description:
      "Dual USB-C GaN charger. Charge a laptop and phone simultaneously at full speed.",
    price: 1899,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
  },
];

const UI = () => {
  return (
    <div className="ui">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-inner">
          <span className="hero-tag">New Arrivals 2025</span>

          <h1 className="hero-title">
            Welcome to Our
            <br />
            <span>E-Gadgets Store</span>
          </h1>

          <p className="hero-desc">
            Discover the latest and greatest in electronic gadgets. From
            cutting-edge smartphones to innovative smart home devices, we have
            everything you need.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-val">2,400+</span>
              <span className="stat-lbl">Products</span>
            </div>

            <div className="stat-divider" />

            <div className="stat">
              <span className="stat-val">98K+</span>
              <span className="stat-lbl">Customers</span>
            </div>

            <div className="stat-divider" />

            <div className="stat">
              <span className="stat-val">4.9</span>
              <span className="stat-lbl">Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section">
        <div className="products-inner">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Hand-picked for you</p>

              <h2 className="section-title">Featured Products</h2>
            </div>

            <a href="/products" className="view-all-btn">
              View all products
            </a>
          </div>

          <div className="products-grid">
            {dummyProducts.map((product, index) => (
              <div
                className="product-card"
                key={product.id}
                style={{
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                <div className="card-top">
                  <span className="category-tag">{product.category}</span>

                  <span className="product-id">
                    #{String(product.id).padStart(2, "0")}
                  </span>
                </div>

                {/* PRODUCT IMAGE */}
                <div className="product-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>

                <div className="card-body">
                  <h3 className="product-name">{product.name}</h3>

                  <p className="product-desc">{product.description}</p>
                </div>

                <div className="card-footer">
                  <div className="price-wrap">
                    <span className="price-label">Price</span>

                    <span className="price-value">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UI;
