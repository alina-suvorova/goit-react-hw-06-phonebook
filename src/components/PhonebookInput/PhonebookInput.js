import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';
import s from './PhonebookInput.module.css';
import { getContacts } from '../../redux/selectors';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return new Error(`Something went wrong in ContactForm`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isContact = contacts.find(contact => contact.name === name);
    if (isContact) {
      alert(`${name} is already in contact`);
    } else {
      dispatch(
        actions.contactAdd({
          name,
          number,
        }),
      );
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={s.form} action="submit" onSubmit={handleSubmit}>
      <div className={s.container}>
        <label className={s.formLabel}>
          <span className={s.formTitle}>Name</span>
          <input
            className={s.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className={s.formLabel}>
          <span className={s.formTitle}>Number</span>
          <input
            className={s.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
}

export default ContactForm;