import { combineReducers } from "@reduxjs/toolkit";
import pantryReducer from "./slices/pantrySlice";


const rootReducer = combineReducers({
  pantry: pantryReducer
})

export default rootReducer;