import { configureStore } from "@reduxjs/toolkit";
import pantryReducer from "./slices/pantrySlice";

const store = configureStore({
  reducer: {
    pantry: pantryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
