import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:800/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to My Website</h1>
        <p>
          I'm Amr — a web developer passionate about crafting interactive, modern,
          and responsive experiences using React. Explore my work, learn more about me,
          or get in touch!
        </p>
      </header>

      <section className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
