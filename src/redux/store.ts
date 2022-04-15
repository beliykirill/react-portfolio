import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo-reducers";

const rootReducer = combineReducers({ todo: todoReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === "development",
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
