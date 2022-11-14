import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { selectTodos } from "../redux/todoSlice";
const TodoList = () => {
  const todos = useSelector(selectTodos);
  console.log(todos);
  return (
    <div id="todos">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
