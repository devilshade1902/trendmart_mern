import React, { useEffect, useState } from 'react';
import './Product_details.css';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addToCart ,removeFromCart} from '../../cartSlice';

const Product_details = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const products = useSelector((state)=>state.products.items)
  const product_details = products.find((product)=>product.id == id)
  const cart_details = useSelector((state)=>state.cart.items)
  const [selectedSize,setSelectedSize] = useState('')
   if (!product_details) {
    return <h2>Product not found</h2>;
  }
  const cartItem = cart_details.find((item) => item.id === product_details.id);

  const handleAddToCart = ()=>{
    if(!selectedSize){
      alert("Please select a size before adding to cart")
      return;
    }
    dispatch(addToCart({...product_details,selectedSize}))
  }
  return (
    <div className="product-details">
      <div className="product-main">
        <div className="product-details-left">
          <img src={product_details.image_url} alt={product_details.name} />
        </div>
        <div className="product-details-right">
          <p className="brand">{product_details.brand}</p>
          <h4>{product_details.name}</h4>
          <p className="description">{product_details.description}</p>
          <p className="rating">{product_details.rating}</p>
          <div className="price-container">
            <p className="price">{product_details.old_price}</p>
          <p>{product_details.price}</p>
          </div>
          <p className="stock">
            {product_details.stock > 0 ? (
              <span>In stock {product_details.stock} left</span>
            ):(
              <span>Out of stock</span>
            )}
          </p>
          <div className="size-selector">
            <label htmlFor="size" className="sr-only">Select Size</label>
            <select id='mySelect' value={selectedSize}  onChange={(e) => setSelectedSize(e.target.value)}>
             <option value="">Select size</option>
              {product_details.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option> ))}
            </select>
          </div>
           {cartItem ? (
            <div className="quantity-controls">
              <button className="btn btn-primary" onClick={()=>dispatch(removeFromCart(product_details))} >-</button>
              <span>{cartItem.quantity}</span>
              <button className="btn btn-primary" onClick={handleAddToCart}>+</button>
            </div>
          ) : (
            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
      <div className="reviews">
        reviews
      </div>
      <div className="recommendation">
        <h3 className="recommendation-heading">You Might Also Like</h3>
        <div className="recommendation-list">
         {products.slice(5,9).map((item) => (
            <div className="recommendation-card" key={item.id}>
              <img
                src={item.image_url}
                alt={item.name}
                className="recommendation-img"
              />
              <p className="rec-name">{item.name}</p>
              <p className="rec-price">₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product_details;
