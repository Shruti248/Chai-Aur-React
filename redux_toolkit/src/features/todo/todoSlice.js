import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial State of the store ---
const initialState = {
    todos: [{ id: 1, text: 'Hello World' }]
}


// Slice -- bigger version of slice 
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state /**Get access to all the values of the current state  */, action /** the values which is needed to perform some action liek add , rmeovce etc - will come from this paraamter -- like to delete teh todo we need id -- then this id comes from action  */) => {
            const todo = {
                id: nanoid(), text: action.payload
            }

            // to update teh state according to the action performed : we do this --- 
            state.todos.push(todo)
        },
        removeTodo: (state , action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})


// thsi is teh actual way we export teh slice 

// thsi indicivual reducers will be used in components further
export const {addTodo , removeTodo} = todoSlice.actions

// this is to tell teh store that thsi reducers are actually registered for teh same store -- and then only it will manage the state properly 
export default todoSlice.reducer;