import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    user: null
  },
  reducers: {
    login: (state,action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
  
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  }
});

export const { login, logout } = UserSlice.actions;
export const selectUser = (state) => state.user.isAuthenticated;
export default UserSlice.reducer;
