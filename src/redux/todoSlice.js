import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {},
  reducers: {},
});

export const selectTodos = (state) => {};

export const {} = todoSlice.actions;

export default todoSlice.reducer;
