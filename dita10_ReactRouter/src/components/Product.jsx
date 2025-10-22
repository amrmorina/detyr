import React, { useEffect, useState } from 'react';
import './Product.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:800/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to load products:', err));
  }, []);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const handleView = (product) => {
    alert(
      `Product Details:\n\nID: ${product.id}\nName: ${product.name}\nPrice: $${product.price.toFixed(
        2
      )}\nDescription: ${product.description}`
    );
  };

  return (
    <div className="products-container">
      <h1 className="h1">Products Table</h1>
      <table className="products-table">
        <thead>
          <tr className='headingi'>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td data-label="ID">{product.id}</td>
                <td data-label="Name">{product.name}</td>
                <td data-label="Image">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    onClick={() => handleView(product)}
                  />
                </td>
                <td data-label="Actions">
                  <button
                    className="btn btn-view"
                    onClick={() => handleView(product)}
                  >
                    VIEW
                  </button>
                  <button
                    className="btn btn-delete"
                    onClick={() => handleDelete(product.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                No products available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
