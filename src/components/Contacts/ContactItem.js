import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li className={s.formListItem}>
      <p className={s.formText}>{name}:</p>
      <p className={s.formText}>{number}</p>
      <button className={s.btn} type="button"
        id={id}
        onClick={e => {
          onDelete(e.target.id);
        }}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired}),
  onDelete: PropTypes.func.isRequired,
};

export { ContactItem };
