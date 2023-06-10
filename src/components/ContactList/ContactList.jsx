import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
     {filteredContacts.map(({ name, number, id }) => (
            <li key={nanoid()} className={css.contactList}>
              <Contact
                id={id}
                name={name}
                number={number}
                deleteContact={deleteContact}
              />
            </li>
          ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};