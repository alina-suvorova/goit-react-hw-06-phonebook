import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import { ContactItem } from './ContactItem';
import actions from '../../redux/contacts/actions';
import style from './Contacts.module.css';

const ContactList = () => {
const dispatch = useDispatch();
const filteredContacts = useSelector(getFilteredContacts);
  return (
    <ul className={style.contactsList}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
          contact={{ id, name, number }}
          key={id}
          onDelete={id => dispatch(actions.contactDelete(id))}/>
        );
      })}
    </ul>
  );
};

export default ContactList;
