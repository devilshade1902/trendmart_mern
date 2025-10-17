import React from 'react'
// import data from '../../assets/data'
import Product from '../Product/Product'
import './TopSelling.css'
import { useSelector,useDispatch } from 'react-redux'
import { searchProducts, resetFilter,showProducts } from "../../productSlice";

const TopSelling = () => {
  const dispatch = useDispatch()
  const products = useSelector((state)=>state.products.items)

  
  return (
    <div className="top-selling-container">
      <h2>Top Sellers</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.slice(1, 5).map((item) => (
          <div className="col" key={item.id}>
            <Product item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopSelling
