import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {taskReducer} from "./todo/todo-reducers";

const rootReducer = combineReducers({ taskReducer });

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV === "development",
    })
} 

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']