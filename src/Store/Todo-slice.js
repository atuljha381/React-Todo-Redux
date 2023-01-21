import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { items: [] },
  reducers: {
    replaceTodo(state, action) {
      state.items = action.payload.items;
    },
    addTodo(state, action) {
      const newItem = action.payload;
      state.items.push({
        id: newItem.id,
        work: newItem.work,
        status: newItem.status,
      });
    },
    removeTodo(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    toggle(state, action) {
      console.log(state.items.map( (item) => {
        if(item.id === action.payload){
            if(item.status === 'pending'){
                item.status = 'done'
            }
            else if (item.status === "done") {
              item.status = "pending";
            }
        }
        return item
      }));
    //   console.log(action.payload)
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
