import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Adjust relative path

function ProductDetails() {
  const { id } = useParams();
  return (
    <div className="product-details">
      <h1>Product Details - {id}</h1>
      <p>Details about the product will go here.</p>
    </div>
  );
}

export default ProductDetails;
