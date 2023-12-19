import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice/contactsSlice';
import { filterReducer } from './filterSlice/filterSlice';

export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});