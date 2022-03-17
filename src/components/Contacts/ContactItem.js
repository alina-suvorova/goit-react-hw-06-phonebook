import PropTypes from 'prop-types';
import style from './Contacts.module.css';

const ContactItem = ({ contact, onDelete }) => {
const { id, name, number } = contact;
  return (
    <li className={style.formListItem}>
      <p className={style.formText}>{name}:</p>
      <p className={style.formText}>{number}</p>
      <button className={style.btn} type="button" id={id} onClick={e => {onDelete(e.target.id)}}>Delete</button>
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
