import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk('/getData/', async (limit) => {
    const url = `https://www.breakingbadapi.com/api/characters?limit=${limit}&offset=1`;
    const res = await fetch(url);
    return res.json();

});
export const breakingSlice = createSlice({
    name: "breakingReducer",
    initialState: {
        items: [],
        getData: {
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [getData.pending]: (state) => {
            state.getData.isLoading = true;
        },
        [getData.fulfilled]: (state, action) => {
            state.getData.isLoading = false;
            state.items = action.payload
        },
        [getData.rejected]: (state, action) => {
            state.getData.error = action.error.message
        },

    }
});
export const loadSelect=state=>state.breakingReducer.getData.isLoading
export const dataSelect = state => state.breakingReducer.items
export default breakingSlice.reducer;