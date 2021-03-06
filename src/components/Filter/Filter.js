import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/actions';
import style from './Filter.module.css';

const Filter = () => {
const value = useSelector(state => state.contacts.filter);
const dispatch = useDispatch();
  return (
    <label className={style.formLabel}>
    <span>Find contacts by name</span>
    <input className={style.formInput} type="text" name="filter" value={value} onChange={e => dispatch(actions.changeFilter(e.currentTarget.value))}/>
    </label>
  );
};

export default Filter;
