import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../redux/todoSlice";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div id={todo.id} className="todo">
      <span
        className={`todo-name ${todo.completed ? "completed" : ""}`}
        onClick={() => dispatch(toggleComplete(todo.id))}
      >
        {todo.value}
      </span>
      <button className="delete" onClick={() => dispatch(deleteTodo(todo.id))}>
        <i className="fas">&#xf2ed;</i>
      </button>
    </div>
  );
};

export default TodoItem;
