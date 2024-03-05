import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userSlice from "./authSlice";

const store = configureStore({
    reducer: {
        fetchProduct: productSlice.reducer,
        user: userSlice.reducer

    }
});

export default store;