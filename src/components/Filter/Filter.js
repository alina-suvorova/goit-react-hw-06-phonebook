import actions from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className={s.formLabel}>
      <span>Find contacts by name</span>
      <input
        className={s.formInput}
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
