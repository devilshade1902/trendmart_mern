import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product_details.css';
import Product from '../Product/Product';
import { clothes, reviews } from '../../assets/data';
import { useCart } from '../../CartContext';

const Product_details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart_count, setCart_count] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const { addToCart, quantitySelections } = useCart();

  useEffect(() => {
    const foundProduct = clothes.find((item) => item.id.toString() === id);
    setProduct(foundProduct || null);
    if (foundProduct && foundProduct.sizes?.length > 0) {
      const defaultSize = foundProduct.sizes[0];
      setSelectedSize(defaultSize);
      // Restore saved quantity for this product and size
      const savedQuantity = quantitySelections[`${foundProduct.id}-${defaultSize}`];
      setCart_count(savedQuantity || 0);
    }
    window.scrollTo(0, 0);
  }, [id, quantitySelections]);

  useEffect(() => {
    // Update cart_count when selectedSize changes
    if (product && selectedSize) {
      const savedQuantity = quantitySelections[`${product.id}-${selectedSize}`];
      setCart_count(savedQuantity || 0);
    }
  }, [selectedSize, product, quantitySelections]);

  if (!product) {
    return <div className="product-details">Product not found</div>;
  }

  const formatPrice = (value) => {
    if (!value) return 'N/A';
    return `₹${Number(value).toFixed(2)}`;
  };

  const cart_count_increase = () => {
    if (cart_count < product.stock) {
      setCart_count(cart_count + 1);
    }
  };

  const cart_count_decrease = () => {
    if (cart_count > 0) {
      setCart_count(cart_count - 1);
    }
  };

  const handleAddToCart = () => {
    if (cart_count === 0) {
      alert('Please select a quantity');
      return;
    }
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, cart_count, selectedSize);
    alert(`Added to cart: ${cart_count} x ${product.name} (Size: ${selectedSize})`);
    setCart_count(0);
  };

  return (
    <div className="product-details">
      <div className="product-main">
        <div className="product-details-left">
          <img src={product.image_url} alt={product.name || 'Product'} />
        </div>
        <div className="product-details-right">
          <p className="brand">{product.brand || 'Unknown Brand'}</p>
          <h4>{product.name || 'Unnamed Product'}</h4>
          <p className="description">{product.description || 'No description available'}</p>
          <p className="rating">{product.rating || 'No rating'}</p>
          <div className="price-container">
            <p className="price">{formatPrice(product.price)}</p>
            {product.old_price && (
              <p className="old-price">{formatPrice(product.old_price)}</p>
            )}
          </div>
          <p className="stock">
            {product.stock > 0
              ? product.stock <= 5
                ? `Only ${product.stock} left`
                : 'In Stock'
              : 'Out of Stock'}
          </p>
          <div className="size-selector">
            <label htmlFor="size" className="sr-only">Select Size</label>
            <select id="size" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
              {product.sizes?.map((size) => (
                <option key={size} value={size}>{size.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={cart_count_decrease}
              disabled={cart_count <= 0}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span>{cart_count}</span>
            <button
              className="btn btn-primary"
              onClick={cart_count_increase}
              disabled={cart_count >= product.stock}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button
            className="add-to-cart-btn"
            aria-label={`Add ${product.name} to cart`}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="reviews">
        <h3 className="reviews-heading">Customer Reviews</h3>
        {reviews.length > 0 ? (
          <div className="reviews-list">
            {reviews.map((review) => (
              <div key={review.id} className="review-container">
                <p className="review-name">{review.name}</p>
                <p className="review-text">{review.review}</p>
                <p className="review-date">{review.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
      <div className="recommendation">
        <h3 className="recommendation-heading">You Might Also Like</h3>
        <div className="recommendation-list">
          {clothes.slice(3, 6).map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product_details;
