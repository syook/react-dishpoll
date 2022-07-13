import { createSlice } from "@reduxjs/toolkit";


export const PollSlice = createSlice({
  name: "pollData",
  initialState: {
    data: 0
  },

  reducers: {

    add: (state,action)=>{
            this.state = action.payload;
    }

  }
});

export const { add } = PollSlice.actions;
// export const selectUser = (state) => state.user.isAuthenticated;
export default PollSlice.reducer;
