import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../redux/UserReducer";

const Store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default Store;
