import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// GLOBAL STORE SETUP
export const store = configureStore({
  reducer: {
    // ONE SLICE OF THE GLOBAL REDUX STORE
    basket: basketReducer,
    // CAN HAVE MORE HERE... userSlice, productsSlice, etc.
  },
});
