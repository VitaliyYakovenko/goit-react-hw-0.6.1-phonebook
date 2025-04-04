import { createSlice } from "@reduxjs/toolkit";



const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
      filteredContacts(_, action) {
        return action.payload;
        }
    },
})

export const { filteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;