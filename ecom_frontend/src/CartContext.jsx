import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [quantitySelections, setQuantitySelections] = useState(() => {
    const savedSelections = localStorage.getItem('quantitySelections');
    return savedSelections ? JSON.parse(savedSelections) : {};
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('quantitySelections', JSON.stringify(quantitySelections));
  }, [quantitySelections]);

  const addToCart = (product, quantity, size) => {
    if (!product.id || !product.price || !quantity || !size) {
      console.error('Invalid cart item:', { product, quantity, size });
      return;
    }
    // Convert price to number
    const numericPrice = Number(product.price);
    if (isNaN(numericPrice)) {
      console.error('Invalid price for product:', product);
      return;
    }
    if (quantity > product.stock) {
      alert(`Cannot add ${quantity} items. Only ${product.stock} in stock.`);
      return;
    }
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.size === size
      );
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > product.stock) {
          alert(`Cannot add ${quantity} more. Only ${product.stock - existingItem.quantity} left in stock.`);
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
      return [...prevCart, { ...product, price: numericPrice, quantity, size }];
    });
    // Update quantity selection
    setQuantitySelections((prev) => ({
      ...prev,
      [`${product.id}-${size}`]: quantity,
    }));
  };

  const updateQuantity = (id, size, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(0, Math.min(quantity, item.stock)) }
          : item
      )
    );
    // Update quantity selection
    setQuantitySelections((prev) => ({
      ...prev,
      [`${id}-${size}`]: Math.max(0, Math.min(quantity, cart.find((item) => item.id === id && item.size === size)?.stock || 0)),
    }));
  };

  const removeFromCart = (id, size) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.size === size)));
    // Remove quantity selection
    setQuantitySelections((prev) => {
      const newSelections = { ...prev };
      delete newSelections[`${id}-${size}`];
      return newSelections;
    });
  };

  const totalPrice = cart.reduce((total, item) => {
    if (!item) {
      console.warn('Invalid cart item (null or undefined) skipped:', item);
      return total;
    }
    // Convert price to number if string
    const price = typeof item.price === 'string' ? Number(item.price) : item.price;
    if (typeof price !== 'number' || isNaN(price) || typeof item.quantity !== 'number') {
      console.warn('Invalid cart item skipped:', item);
      return total;
    }
    return total + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        totalPrice,
        quantitySelections,
        setQuantitySelections,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
