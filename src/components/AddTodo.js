import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.todoInput.value));
    e.target.todoInput.value = "";
  };

  return (
    <div id="newTodo">
      <form onSubmit={handleSubmit}>
        <input id="todoInput" type="text" placeholder="Todo to be done.." />
        <button id="submit" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
