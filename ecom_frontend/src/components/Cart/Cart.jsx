import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, deleteFromCart } from "../../cartSlice";
import "./Cart.css";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>

      {items.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-items-container">
          {items.map((item) => (
            <div key={item.id} className="cart-item-card">
              <div className="cart-item-left">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-size">Size: {item.size}</p>
                  <p className="cart-item-price">₹{item.price}</p>
                </div>
              </div>

              <div className="cart-item-right flex gap-3">
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      dispatch(removeFromCart(item));
                      toast.info(`${item.name} removed from cart`);
                    }}
                  >
                    −
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      dispatch(addToCart(item));
                      toast.success(`${item.name} added to cart`);
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  className="quantity-btn"
                  onClick={() => {
                    dispatch(deleteFromCart(item));
                    toast.error(`${item.name} removed completely from cart`);
                  }}
                >
                  X
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <p className="cart-summary-text">
              Total Items: <span>{totalQuantity}</span>
            </p>
            <p className="cart-summary-text">
              Total Price: <span>₹{totalPrice.toFixed(2)}</span>
            </p>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
