import React from "react";
import "../styles/App.css";
import { Provider } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import store from "../redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div id="main">
        <h1>Todo List</h1>
        <h1>Click to mark as complete</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
