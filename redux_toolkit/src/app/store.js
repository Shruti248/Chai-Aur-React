// Store can be created in the store folder or src folder - anywhere 

// Process to create teh store -- 

import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer : todoReducer
})