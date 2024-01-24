import React, { useState } from "react";
import "./App.css";
const App = () => {
    const [newItem, setNewItem] = useState("")
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">To Do List</h1>
      <ul className="list">
        <li>
        <label>
            <input type="checkbox" />
            Primer Item
        </label>
        <button className="btn btn-danger">X</button>
        </li>
      </ul>
    </>
  );
};

export default App;
