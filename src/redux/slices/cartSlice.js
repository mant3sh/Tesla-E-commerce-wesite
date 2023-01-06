import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: null,
    ammout: 0,
    TimeStamp: null,
  },
  reducers: {
    addtoCart: (state, { payload }) => {
      state.items = { ...payload };
    },
    removeFromCart: () => {
      return {
        items: null,
        ammout: 0,
        TimeStamp: null,
      };
    },
    addAddon: (state, { payload }) => {
      state.items = { ...state.items, ...payload };
    },
    calAmmout: (state) => {
      let ammout = tellAmout(state.items);
      if (state.items.autopilot) {
        ammout += 6000;
      }
      if (state.items.premium) {
        ammout += 15000;
      }
      state.ammout = ammout;
    },
  },
});
export const { addtoCart, removeFromCart, calAmmout, addAddon } =
  cartSlice.actions;
export default cartSlice.reducer;

function tellAmout(item) {
  switch (item.name) {
    case "ModelS":
      if (item.model == "AWD") {
        return 73000;
      } else {
        return 102000;
      }

    case "Model3":
      if (item.model == "AWD") {
        return 64000;
      } else {
        return 92000;
      }
    case "ModelY":
      if (item.model == "AWD") {
        return 82000;
      } else {
        return 112000;
      }
    case "ModelX":
      if (item.model == "AWD") {
        return 91000;
      } else {
        return 108000;
      }
  }
}
