import '../Form.css';
import './SearchBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../../actions/actionsCreate';

export default function SearchBar() {
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();

  function handleSearchChange({ target }) {
    const { name, value } = target;

    dispatch(changeSearchField(name, value));
  }

  return (
    <form
      className="Form"
    >
      <div className="Form-control">
        <label htmlFor="query">поиск</label>
        <input
          className="Form-control__name"
          type="text"
          id="query"
          name="query"
          value={search.query}
          onChange={handleSearchChange}
          placeholder="Начните вводить наименование услуги"
        />
      </div>
    </form>
  );
}