import { createSlice, current } from '@reduxjs/toolkit';
const initialState = [{
    id:'dfdasf',
    desc: "asfdjdfdsfds"
}]
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push( action.payload);
    },
    edittingTodo:(state,action)=>{
        const todoId = action.payload
        const editting= state.find(item => item.id === todoId)
        state = editting
    }
    ,
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, edittingTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;