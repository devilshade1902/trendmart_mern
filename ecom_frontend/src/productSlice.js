import { createSlice } from "@reduxjs/toolkit";
import { clothes } from "./assets/data";

const initialState = {
  items: clothes,   // load products from data.js
  filteredItems: clothes, // for search/filter later
};

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        searchProducts: (state,action)=>{
            const query = action.payload.LowerCase()
            state.filteredItems = state.items.filter((item)=> item.name.toLowerCase().includes(query) || item.category?.toLowerCase().includes(query))
        },
        resetFilter : (state,action) => {
            state.filteredItems = state.items
        },
        showProducts: (state,action)=>{
            const products = state.items
        }
    }
})


export const {searchProducts,resetFilter,showProducts} = productSlice.actions
export default productSlice.reducer