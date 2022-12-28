import { configureStore } from "@reduxjs/toolkit";
import filterArrayReducer from "./Slice"

export const Store = configureStore({
  reducer: {
    filterArray: filterArrayReducer,
  }
})