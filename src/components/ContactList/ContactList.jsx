import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <div className={css['contacts-list']}>
        {visibleContacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
      </div>
    </>
  );
};

export default ContactList;
