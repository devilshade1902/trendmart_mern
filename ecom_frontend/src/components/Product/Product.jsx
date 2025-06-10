import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
  const calculateDiscount = (price, oldPrice) => {
    const parseValue = (value) => {
      if (!value) return 0;
      if (typeof value === 'string') {
        return parseFloat(value.replace('₹', '')) || 0;
      }
      return typeof value === 'number' ? value : 0;
    };
    const priceNum = parseValue(price);

    const oldPriceNum = parseValue(oldPrice);
    if (oldPriceNum > 0 && priceNum > 0 && oldPriceNum > priceNum) {
      return Math.round(((oldPriceNum - priceNum) / oldPriceNum) * 100);
    }
    return 0;
  };

  const discount = calculateDiscount(item.price, item.old_price);


  const formatPrice = (value) => {
    if (!value) return 'N/A';
    return typeof value === 'string' && value.includes('₹') ? value : `₹${Number(value).toFixed(2)}`;
  };

  return (
    <div className="product-card">
      {item.is_new && <span className="new-badge">New</span>}
      <Link to={`/products/${item.id}`}>
        <img src={item.image_url} alt={item.name || 'Product'} />
      </Link>
      <div className="card-body">
        <p className="brand">{item.brand || 'Unknown Brand'}</p>
        <h1 title={item.description}>{item.name || 'Unnamed Product'}</h1>
        <p className="rating">{item.rating || 'No rating'}</p>
        {item.stock > 0 ? (
          <p className={`stock ${item.stock <= 5 ? 'low-stock' : ''}`}>
            {item.stock <= 5 ? `Only ${item.stock} left` : 'In Stock'}
          </p>
        ) : (
          <p className="stock out-of-stock">Out of Stock</p>
        )}
        <div className="price-container">
          <p className="price">{formatPrice(item.price)}</p>
          {item.old_price && (
            <>
              <p className="old_price">{formatPrice(item.old_price)}</p>
              {discount > 0 && <p className="discount">{discount}% off</p>}
            </>
          )}
        </div>
        <p className="sizes">Sizes: {item.sizes ? item.sizes.join(', ') : 'N/A'}</p>
      </div>
    </div>
  );
};

export default Product;