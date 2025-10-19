import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const item_inCart = action.payload
            const existingItems = state.items.find((item) => item.id === item_inCart.id)
            if (existingItems) {
                if (existingItems.quantity < item_inCart.stock) {
                    existingItems.quantity += 1;
                    state.totalQuantity += 1;
                    state.totalPrice += Number(item_inCart.price);
                }else{
                    alert(`only ${item_inCart.stock} of stock left`)
                }
            } else {
                if (item_inCart.stock > 0) {
                    state.items.push({ ...item_inCart, quantity: 1 });
                    state.totalQuantity += 1;
                    state.totalPrice += Number(item_inCart.price);
                }
            }
        },
        removeFromCart: (state, action) => {
            const item_inCart = action.payload
            const existingItems = state.items.find((item) => item.id === item_inCart.id)
            if (existingItems) {
                existingItems.quantity -= 1
                state.totalQuantity -= 1
                state.totalPrice -= Number(item_inCart.price)
                if (existingItems.quantity <= 0) {
                    state.items = state.items.filter((item) => item.id !== item_inCart.id);
                }
            }
        },
        deleteFromCart : (state,action)=>{
            const item_inCart = action.payload
            const existingItems = state.items.find((item)=> item.id === item_inCart.id)
            state.totalPrice -= state.totalPrice
            state.totalQuantity -= existingItems.quantity
            state.totalPrice -= existingItems.quantity * Number(existingItems.price);
            state.items = state.items.filter((item) => item.id !== item_inCart.id);
        } 
    }
})
export const { addToCart, removeFromCart ,deleteFromCart} = cartSlice.actions
export default cartSlice.reducer