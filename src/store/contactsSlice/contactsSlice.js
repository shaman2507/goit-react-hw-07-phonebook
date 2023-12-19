import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {  createContactsThunk, deleteContactsThunk, getAllContactsThunk } from "./actions";
import { handlePanding, handleRejected } from "./handlers";

const contactsSlice = createSlice({
    name:'contacts',
    initialState,
    reducers: {
        createContacts:(state, {payload})=>({
            ...state,
            contacts: [...state.contacts, payload],
        }),
        deleteContacts:(state, actions)=>({
            ...state,
            contacts: actions.payload,
        })
    
    },
    extraReducers: builder => {
        builder
        
        .addCase(getAllContactsThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.contacts = payload;
        })
        .addCase(createContactsThunk.fulfilled, (state, action) => {
            state.isLoading = false;
          
        }).addCase(deleteContactsThunk.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        .addMatcher(action => action.type.endsWith('pending'), handlePanding)
        .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
    },
})

export const contactsReducer = contactsSlice.reducer;
export const {createContacts, deleteContacts}= contactsSlice.actions