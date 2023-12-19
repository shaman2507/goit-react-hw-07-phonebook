import { useEffect, useState } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch, useSelector, } from "react-redux";
import { createContacts} from "store/contactsSlice/contactsSlice";
import { createContactsThunk, getAllContactsThunk } from "store/contactsSlice/actions";


const ContactForm =() =>{
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
  

    useEffect(()=>{
        dispatch(getAllContactsThunk())
    },[dispatch])
        const handleChange = (e)=>{    
            setName ( e.target.value )
        }
    
        const handleChangeNumber = (e)=>{
            setPhone( e.target.value )
        }

        const handleSubmit = (e)=>{
            e.preventDefault()
                if(name === "" || phone === "")
            {return}
            

        const newContact = {
            name:name,
            phone:phone,
            id:nanoid(),
        };

        const sameContact = contacts.contacts.find((contact) => contact.name === newContact.name);
            if (sameContact) {
                alert(`${sameContact.name} is already in contacts`)
                return ;
            }

            dispatch(createContacts(newContact));
            dispatch(createContactsThunk({name, phone})).then(()=>dispatch(getAllContactsThunk()))
            setName('');
            setPhone('');
        }

    return(<><form action="" onSubmit={handleSubmit}>
        <div className={css.formInp}>       
            <label className={css.label}>Name</label>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
                value={name}
            />
            <label className={css.label}>Number</label>
            <input type="tel"
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChangeNumber}
                value={phone}>
            </input>
            <button className={css.btn}> Add contact</button>
        </div>
        </form>
        </>
    )
}

export default ContactForm;