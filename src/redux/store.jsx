import { configureStore } from "@reduxjs/toolkit";
import breakingSlice from "./breaking/breakingSlice";
import quoteSlice from "./quote/quoteSlice";

export const store = configureStore({
    reducer: {
        breakingReducer: breakingSlice,
        quotesReducer:quoteSlice
    }
})