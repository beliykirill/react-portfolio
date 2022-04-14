import { createReducer } from "@reduxjs/toolkit";
import { addTask } from "./todo-actions";

const initialState: string[] = [];

export const taskReducer = createReducer(initialState, {
  [addTask.type]: (_, { payload }) => payload,
});
