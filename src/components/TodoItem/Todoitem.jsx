import React, { useState, Fragment } from "react";
import classes from "./TodoItem.module.css";

const TodoItem = ({ title, id, deleteTodo, updateTodo }) => {
  const [editTitle, setEditTitle] = useState(title);
  const [show, setShow] = useState(false);
  let element = title;

  const handleUpdate = () => {
    setShow(false);
    updateTodo({ id, title: editTitle });
  };
  if (show) {
    element = (
      <Fragment>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />

        <button onClick={handleUpdate}>Update</button>
      </Fragment>
    );
  }
  return (
    <li className={classes.todoitem}>
      <span>{element}</span>
      <button onClick={deleteTodo.bind(this, id)} className={classes.crossX}>
        X
      </button>
      <button style={{ float: "right" }} onClick={(e) => setShow(!show)}>
        Edit
      </button>
    </li>
  );
};

export default TodoItem;
