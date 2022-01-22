import {combineReducers} from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  cartReducer
})

export default rootReducer;