import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slices/CartSlice'
import productReducer from './Slices/ProductCarts'


const store=configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer
    }
})
export default store;