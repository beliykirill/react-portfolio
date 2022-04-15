import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  tasks: Array<string>;
}

const initialState: IState = {
  tasks: [],
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<IState>) => {},
  },
});

export default todoReducer.reducer;