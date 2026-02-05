import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartslice";

const store=configureStore({
   reducer:{
      mycart:cartReducer
   } 
})
export default store;