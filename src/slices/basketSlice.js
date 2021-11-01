import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  // Name the slice
  name: "basket",
  // Pass initial state in (declared above)
  initialState,
  // Invoked by dispatch
  reducers: {
    // functions that modify state according to their corresponding action argument
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {},
  },
});

// Exported as slice actions so they can be referenced and used elsewhere
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
