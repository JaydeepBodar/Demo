import { configureStore } from "@reduxjs/toolkit";
import Productslice from "./features/Productslice"
export const store=configureStore({
    reducer:{
        demo:Productslice
    }
})