import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";


const store = configureStore({
    reducer: {
        Cart : CartSlice,
        Product : ProductSlice,
    }
});

export default store;
