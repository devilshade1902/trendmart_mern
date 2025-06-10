import React from 'react';
import './Categories.css';
import Product from '../Product/Product';
import { clothes } from '../../assets/data';

const Categories = ({ category }) => {
  const getFilteredProducts = () => {
    if (!category) return clothes; // Show all products for /products
    switch (category) {
      case 'mens':
        return clothes.filter((item) => item.gender === 'male');
      case 'womens':
        return clothes.filter((item) => item.gender === 'female');
      case 'kids':
        return clothes.filter((item) => item.gender === 'kid');
      case 'electronics':
        return clothes.filter((item) => item.category === 'electronics');
      default:
        return clothes;
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