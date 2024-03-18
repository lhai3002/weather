import {configureStore} from '@reduxjs/toolkit'
import reducer from './pages/todoReducer'
export const store = configureStore({
    reducer:{
     todos: reducer,
    }
})