import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ✅ Async thunk to fetch products from your backend
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3000/api/products/all_products");
    const data = await response.json();
    return data; // this includes { message, products }
  }
);

const initialState = {
  items: [],
  filteredItems: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      const query = action.payload.toLowerCase();
      state.filteredItems = state.items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.category?.toLowerCase().includes(query)
      );
    },
    resetFilter: (state) => {
      state.filteredItems = state.items;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";

        // ✅ Extract only products array from the response
        state.items = action.payload.products || [];
        state.filteredItems = action.payload.products || [];
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { searchProducts, resetFilter } = productSlice.actions;
export default productSlice.reducer;
