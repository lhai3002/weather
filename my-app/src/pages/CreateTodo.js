import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todoReducer'

const CreateTodo = () => {
    const[todo,setTodo] = useState({
        id:'',
        desc:''
    })
    const dispatch = useDispatch()
    const editting = useSelector(state => state)
    useEffect(()=>{
        console.log(editting);
        setTodo(editting )
    },[editting])
    const handleAddTodo =()=>{
        const todoWithId = {...todo,id:new Date().toISOString()}
        dispatch(addTodo(todoWithId))
    }
    return (
        <div className='flex jus'>
            <div>
                <InputText value={todo.desc}  onChange={(e)=>{setTodo({...todo,desc: e.target.value})}}/>
            </div>
            <div>
            <Button onClick={()=>handleAddTodo()}>Add</Button>
            </div>
        </div>
    )
}

export default CreateTodo