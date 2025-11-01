import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../productSlice"; 
import Product from "../Product/Product";
import "./TopSelling.css";

const TopSelling = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);

  // ✅ Fetch products when component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <p className="text-center mt-4">Loading products...</p>;
  }

  if (status === "failed") {
    return <p className="text-center mt-4 text-danger">Failed to load products 😢</p>;
  }

  if (!products || products.length === 0) {
    return <p className="text-center mt-4">No products found.</p>;
  }

  return (
    <div className="top-selling-container">
      <h2>Top Sellers</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.slice(0, 4).map((item) => (
          <div className="col" key={item._id}> {/* _id from MongoDB */}
            <Product item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
