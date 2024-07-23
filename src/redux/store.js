import { configureStore } from "@reduxjs/toolkit";
import clientReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer:{
        client:clientReducer
    }
    
})
