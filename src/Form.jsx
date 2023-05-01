import { useContext } from "react";
import Context from "./Context";

const Form = () => {
  const {
    inputValue,
    setInputValue,
    list,
    setList,
    editMode,
    editId,
    setEditMode,
  } = useContext(Context);
  const submitHandler = (e) => {
    e.preventDefault();
    setList([...list, { id: Math.random().toString(), item: inputValue }]);
    setInputValue("");
  };

  const editSubmitHandler = (e) => {
    e.preventDefault();
    setList(
      list.map((l) => {
        if (l.id === editId) {
          return { ...list, id: l.id, item: inputValue };
        }
        return l;
      })
    );
    setEditMode(false);
    setInputValue("");
  };
  return (
    <div className="f-main">
      {editMode ? (
        <form className="form" onSubmit={editSubmitHandler}>
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            type="text"
            className="todo"
            placeholder="Enter something todo..."
          />
          <button type="submit" className="submit">
            Update
          </button>
        </form>
      ) : (
        <form className="form" onSubmit={submitHandler}>
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            type="text"
            className="todo"
            placeholder="Enter something todo..."
          />
          <button type="submit" className="submit">
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
