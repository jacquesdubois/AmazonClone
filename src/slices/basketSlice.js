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
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id)

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cannot remove product (id: ${action.payload.id}) as it is not in your Cart`);
      }

      state.items = newBasket;
    },
  },
});

// Exported as slice actions so they can be referenced and used elsewhere
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0)

export default basketSlice.reducer;
