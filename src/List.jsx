import { useContext } from "react";
import Context from "./Context";

const List = () => {
  const { list, setList, setEditMode, setEditId, setInputValue } =
    useContext(Context);
  const deleteItem = (id) => {
    setList(list.filter((l) => l.id !== id));
  };

  const editItem = (l) => {
    setEditMode(true);
    setEditId(l.id);
    setInputValue(l.item);
  };

  return (
    <div className="l-main">
      <ul>
        {list.map((l) => {
          return (
            <li key={l.id}>
              <div className="l-container">
                <div className="item">{l.item}</div>
                <button className="edit" onClick={() => editItem(l)}>
                  Edit
                </button>
                <button className="del" onClick={() => deleteItem(l.id)}>
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
