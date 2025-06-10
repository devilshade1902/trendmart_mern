import React from 'react'
import data from '../../assets/data'
import Product from '../Product/Product'
import './TopSelling.css'

const TopSelling = () => {
  return (
    <div className="top-selling-container">
      <h2>Top Sellers</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {data.slice(0, 4).map((item) => (
          <div className="col" key={item.id}>
            <Product item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopSelling
