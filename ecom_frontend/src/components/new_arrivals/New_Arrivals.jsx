import React from 'react'
import './New_Arrivals.css'
import Product from '../Product/Product'
import { useSelector } from 'react-redux'

const New_Arrivals = () => {
    const New_Arrivals = useSelector((state)=>state.products.items)
    const filter_new=()=>{
        return New_Arrivals.filter((item)=>item.is_new==true)
    }

    return (
        <div className='new-arrivals-container'>
            <h2>New Arrivals</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                {filter_new().map((item) => (
                    <div className='col' key={item.id}>
                        <Product item={item} key={item.id} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default New_Arrivals
