import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    ammout: 0,
    TimeStamp: null,
  },
  reducers: {
    addtoCart: (state, { payload }) => {
      let index = state.items.indexOf((item) => item.id === payload.id);
      if (index >= 0) {
        state.items[index].quantity += 1;
      } else {
        const newitem = {
          ...payload,
          quantity: 1,
        };
        state.items.push(newitem);
      }
    },
    removeFromCart: (state, { payload }) => {
      let index = state.items.indexOf((item) => item.id === payload.id);
      if (index >= 0) {
        if (state.items[index].quantity > 1) {
          state.items.filter((item) => item.id !== payload.id);
        } else {
          state.items[index].quantity -= 1;
        }
      }
    },
  },
});
export const { addtoCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
