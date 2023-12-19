import axios from 'axios';


const instance = axios.create({baseURL:'https://6550cb5b7d203ab6626e2bc8.mockapi.io/'})

    export const fetchContacts  = async () => {
        const {data} = await instance('contacts');
        return data; 
    }
    export const addContacts  = async (body) => {
        const {data} = await instance.post('contacts', body);
        return data; 
    }
    export const deleteContacts  = async (contactId) => {
        const {data} = await instance.delete(`contacts/${contactId}`);
        return data; 
    }