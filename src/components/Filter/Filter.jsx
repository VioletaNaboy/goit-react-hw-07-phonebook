import { useSelector, useDispatch } from "react-redux";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filtersSlice";
import css from './Filter.module.css';
export const Filter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const newFilter = event.target.value;
    dispatch(setStatusFilter(newFilter)); }

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </label>
  );
};
export default Filter;
