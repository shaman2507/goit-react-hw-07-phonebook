import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsThunk } from 'store/contactsSlice/actions';
import { deleteContacts } from 'store/contactsSlice/contactsSlice';


const ContactList = () => {
    const filter = useSelector(state => state.filter);
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const deleteContact = contactId => {
    const deleteC = contacts.contacts.filter(
        contact => contact.id !== contactId);
        dispatch(deleteContacts(deleteC));   
        dispatch(deleteContactsThunk(contactId))
    };
  
    const newFilteredContacts = filter
        ? contacts.contacts.filter(contact =>
            contact.name && contact.name.toLowerCase().includes(filter.filter.toLowerCase())
        )
        : contacts.contacts;
    
    return (
        newFilteredContacts.length > 0 && (
            <ul>
                {newFilteredContacts.map(({ name, id, phone }) => (
                    <li key={id} className={css.itemList}>
                        {name}: {phone}
                        <button onClick={() => deleteContact(id)} className={css.btn}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        )
    );
};

export default ContactList;