import React from 'react'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, edittingTodo } from './todoReducer'

export const TodoList = () => {
    const todoList = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const handleDelete = (id)=>{
        dispatch(deleteTodo(id))
    }
    const startEditting = (id)=>{
        dispatch(edittingTodo(id))
    }
  return (
    <div>
        <h1>Todo</h1>
        {todoList.map((item)=>( <TodoItem startEditting={startEditting} handleDelete={handleDelete} desc={item}/>))}
    </div>
  )
}
