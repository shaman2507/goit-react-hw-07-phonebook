import { useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ListContact/ContactList";
import Loading from "./Loading/Loading";
import { filterSelector } from "store/filterSlice/selectors";
import { contactsSelector } from "store/contactsSlice/selectors";


export const App = () => {
  const filter = useSelector(filterSelector);
  const {isLoading} = useSelector(contactsSelector);
  return (
    <div style={{ padding: "35px" }}>
      <h2>Phonebook</h2>
      <ContactForm  />
      <h2>Contacts</h2>
        {isLoading && <Loading/>}
      { filter && <ContactList />}
      <Filter />
    </div>
  );
};