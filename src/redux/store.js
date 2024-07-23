import { configureStore } from "@reduxjs/toolkit";
import clientReducer from '../redux/slices/clientSlice/'

export const store = configureStore({
    reducer:{
        client:clientReducer
    }
    
})
