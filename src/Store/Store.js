import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Todo-slice";
import uiSlice from "./Ui-slice";

const store = configureStore({
  reducer: { todo: todoSlice.reducer, ui: uiSlice.reducer }
});

export default store;
