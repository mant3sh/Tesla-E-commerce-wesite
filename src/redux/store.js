import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
export default store;
