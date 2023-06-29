import { configureStore } from "@reduxjs/toolkit";
import pantryReducer from "./slices/pantrySlice";
import { TypedUseSelectorHook, useDispatch, useSelector  } from "react-redux";

const store = configureStore({
  reducer: {
    pantry: pantryReducer
  }
});

export default store;
