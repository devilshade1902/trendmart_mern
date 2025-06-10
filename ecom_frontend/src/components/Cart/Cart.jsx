import React from 'react';
import './Cart.css';
import { useCart } from '../../CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();

  const formatPrice = (value) => {
    if (!value) return 'N/A';
    return `₹${Number(value).toFixed(2)}`;
  };

  const handleQuantityIncrease = (item) => {
    updateQuantity(item.id, item.size, item.quantity + 1);
  };

  const handleQuantityDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.size, item.quantity - 1);
    } else {
      removeFromCart(item.id, item.size);
    }
  };

  const handleRemove = (id, size, name) => {
    if (window.confirm(`Are you sure you want to remove ${name} from your cart?`)) {
      removeFromCart(id, size);
    }
  };

  return (
    <div className="cart-page">
      <h2 className="cart-page-heading">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-page-p">Your cart is empty</p>
      ) : (
        <div className="cart-page-container">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <img src={item.image_url} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Size: {item.size.toUpperCase()}</p>
                  <p>Price: {formatPrice(item.price)}</p>
                  <div className="quantity-controls">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleQuantityDecrease(item)}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleQuantityIncrease(item)}
                      disabled={item.quantity >= item.stock}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                  <p>Subtotal: {formatPrice(item.price * item.quantity)}</p>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id, item.size, item.name)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: {formatPrice(totalPrice)}</h3>
            <button className="checkout-btn" aria-label="Proceed to checkout">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
