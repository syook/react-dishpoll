import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import PollSlice from "./PollSlice";


export default configureStore({
  reducer: {
    user: userSlice , poll:PollSlice
  }
});

