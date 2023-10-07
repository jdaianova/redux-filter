import '../Form.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  addService,
  addServiceChanges,
  endServiceEditing,
  changeServiceField
} from '../../actions/actionsCreate';

export default function Form({ editModeOff }) {
  const form = useSelector(state => state.form);
  const dispatch = useDispatch();

  function handleInputChange({ target: { name, value } }) {
    dispatch(changeServiceField(name, value));
  }

  return (
    <form
      className="Form"
      onSubmit={(e) => {
        e.preventDefault();
        editModeOff();

        const { name, price } = form;

        if (form.editingMode.state) {
          const { index } = form.editingMode;

          dispatch(addServiceChanges(index, name, price));
          dispatch(endServiceEditing());
        } else {
          dispatch(addService(name, price));
        }

      }}

      onReset={e => {
        e.preventDefault();
        editModeOff();
        dispatch(endServiceEditing());
      }}
    >
      <div className="Form-control">
        <label htmlFor="name"> введите услугу</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={form.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="Form-control">
        <label htmlFor="price">введите стоимость</label>
        <input
          className="Form-control__price"
          type="number"
          id="price"
          name="price"
          required
          value={form.price}
          onChange={handleInputChange}
        />
      </div>
      <button
        type='submit'
        className="Form-control__button-save"
        onClick={() => editModeOff()}
      >
        сохранить
      </button>
      {
        form.editingMode.state
        && <button
          type='reset'
          className="Form-control__button-reset"
          onClick={() => editModeOff()}
        >
          отменить
        </button>
      }
    </form>
  );
}