import { todoReducers } from "./todo";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        todo: todoReducers
    },
    devTools: process.env.NODE_ENV === "development"
})