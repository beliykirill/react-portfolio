import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addTask } from "./todo-actions";

const initialState: string[] = [];

const todo = createReducer(initialState, {
  [addTask.type]: (_, { payload }) => payload,
});

const todoReducers = combineReducers({ todo });

export default todoReducers;
