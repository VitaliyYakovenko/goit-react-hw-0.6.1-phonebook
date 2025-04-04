import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    contacts: [],
}


const contcatsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload)
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        }
    }
});

export const { addContact ,deleteContact} = contcatsSlice.actions;
export const contcatsReducer = contcatsSlice.reducer;