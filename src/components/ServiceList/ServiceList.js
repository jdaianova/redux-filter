import './ServiceList.css';
import ServiceRow from './ServiceRow';
import { useSelector, useDispatch} from 'react-redux';
import { removeService, editService } from '../../actions/actionsCreate';

export default function ServiceList({editModeState, editModeOn, editModeOff}) {

  const dispatch = useDispatch();

  const services = useSelector((state) => state.list);
  const search = useSelector((state) => state.search);

  const tableLength = 3;

  function handleDeleteClick(id) {
    return dispatch(removeService(id));
  }

  function handleEditClick(id) {
    editModeOn();
    const index = services.findIndex((service) => service.id === id);
    const { name, price } = services[index];
    return dispatch(editService(name, price, { state: true, index }));;
  }

  let filteredList = null;

  if (search.query) {
    filteredList = services.map(({ id, name, price }) => {
      if (!name.startsWith(search.query)) {
        return null;
      }

      return (
        <ServiceRow
          key={id}
          id={id}
          name={name}
          price={price}
          onDeleteClick={() => handleDeleteClick(id)}
          onEditClick={() => handleEditClick(id)}
          editModeState = {editModeState}
        />
      );
    });

    if (!filteredList.filter(Boolean).length) {
      filteredList = (
        <tr>
          <td colSpan={tableLength}>
            ничего не найдено
          </td>
        </tr>
      );
    }
  }

  const list = services.map(({ id, name, price }) => {
    return (
      <ServiceRow
        key={id}
        id={id}
        name={name}
        price={price}
        onDeleteClick={() => handleDeleteClick(id)}
        onEditClick={() => handleEditClick(id)}
        editModeState = {editModeState}
      />
    );
  })

  return (
    <table className="ServiceList">
      <tbody>{filteredList || list}</tbody>
    </table>
  );
}