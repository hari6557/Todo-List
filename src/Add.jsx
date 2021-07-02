import React, { useState } from "react";
import "./Add.css";

function Add(props) {
  const [todos, settodos] = useState([]); //Todos is the list of todos
  const [todo, settodo] = useState(""); //todo updates with every change in the input box

  return (
    <div>
      <h3>ADD ITEM</h3>
      <hr className="line"></hr>
      <input
        type="text"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        className="Add_Input"
      />
      <button onClick={[settodos(...todos, todo)]} className="Add_Button">
        Add
      </button>
      <div className="Todo_List">
        <h3>TODO</h3>
        <hr className="line"></hr>
      </div>
    </div>
  );
}

export default Add;
