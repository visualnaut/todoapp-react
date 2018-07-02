import React from 'react'

const TodoItem = (props) => {
  // console.log(props.isDone)
  return(
    <div className="TodoItem">
      <p>{props.todoItem}</p>
      <div className="checkWrapper">
        <input id={props.id} type="checkbox" checked={props.isDone} readOnly/>
        <label onClick={() => props.checkboxClicked(props.id, props.idCat)} htmlFor={props.id}></label>
      </div>
    </div>
  )
}

export default TodoItem