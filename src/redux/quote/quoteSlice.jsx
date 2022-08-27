import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('quotes/getData/', async () => {
    const url = 'https://www.breakingbadapi.com/api/quotes';
    const res = await axios.get(url);
    return res.data;
})
export const quoteSlice = createSlice({
    name: "quotesReducer",
    initialState: {
        items: [],
        fetchData: {
            isloading: false,
            error: null
        }
    },
    extraReducers: {
        [fetchData.pending]: (state) => {
            state.fetchData.isloading = true
        },
        [fetchData.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.fetchData.isloading = false;
        },
        [fetchData.rejected]: (state, action) => {
            state.fetchData.error = action.error.message
        }
    }
});

export default quoteSlice.reducer;