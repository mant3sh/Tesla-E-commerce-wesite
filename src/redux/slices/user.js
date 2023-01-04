import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login: (state, { payload }) => {
      return { ...payload };
    },
    logout: () => {
      return null;
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
