import React from 'react';
import './Categories.css';
import Product from '../Product/Product';
import { useSelector } from 'react-redux';

const Categories = ({ category }) => {
  const categories = useSelector((state)=>state.products.items) 

  
  const getFilteredProducts = () => {
    if (!category) return categories; // Show all products for /products
    switch (category) {
      case 'mens':
        return categories.filter((item) => item.gender === 'male');
      case 'womens':
        return categories.filter((item) => item.gender === 'female');
      case 'kids':
        return categories.filter((item) => item.gender === 'kid');
      case 'electronics':
        return categories.filter((item) => item.category === 'electronics');
      default:
        return categories;
    }
  };

  const filteredProducts = getFilteredProducts();

  const getCategoryTitle = () => {
    switch (category) {
      case 'mens':
        return "Men's Clothing";
      case 'womens':
        return "Women's Clothing";
      case 'kids':
        return "Kid's Clothing";
      case 'electronics':
        return 'Electronics';
      default:
        return 'All Products';
    }
  };

  return (
    <div className="categories">
      <h2 className="categories-title">{getCategoryTitle()}</h2>
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="no-products">No products available in this category.</p>
      )}
    </div>
  );
};

export default Categories;