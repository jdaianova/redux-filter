import './ServiceList.css';

export default function ServiceRow(props) {
  const {
    id,
    name,
    price,
    onDeleteClick: handleDeleteClick,
    onEditClick: handleEditClick,
    editModeState
  } = props;

  return (
    <tr className="ServiceRow" id={id}>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        {editModeState === false && (
          <>
            <button onClick={handleEditClick}>edit</button>
            <button onClick={handleDeleteClick}>x</button>
          </>
        )}

      </td>
    </tr>
  );
}