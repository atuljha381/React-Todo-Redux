import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: { items: [] },
    reducers: {
        addTodo(state, action) {
            const newItem = action.payload
            console.log(newItem)
            state.items.push({
                id: newItem.id,
                work: newItem.work,
                status: newItem.status
            })

        },
        removeTodo(state, action) {
            const id = action.payload
            state.items = state.items.filter(item => item.id !== id)
        },
        toggle(state) {
            if (state.status === 'pending') {
                state.status = 'work'
            }
            else if (state.status === 'work') {
                state.status = 'pending'
            }
        }
    }
})

export const todoActions = todoSlice.actions
export default todoSlice