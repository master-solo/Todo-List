import "./App.css";
import Form from "./Form";
import Context from "./Context";
import List from "./List";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState("");
  return (
    <Context.Provider
      value={{
        inputValue,
        setInputValue,
        list,
        setList,
        setEditMode,
        editMode,
        editId,
        setEditId,
      }}
    >
      <div className="container">
        <h1 className="main-title">TODO List</h1>
        <Form />
        <List />
      </div>
    </Context.Provider>
  );
}

export default App;
