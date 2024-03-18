import React from 'react'

const TodoItem = ({desc,handleDelete,startEditting}) => {
  return (
    <div  className='shadow-1 w-full my-1 p-3 border-round-xl p-input-icon-right'>
       <div >{desc.desc}</div>
    <i onClick={()=>handleDelete(desc.id)} className='font-bold pi pi-trash'></i>
    <div onClick={()=>{startEditting(desc.id)}}>a</div>
    </div>
  )
}

export default TodoItem