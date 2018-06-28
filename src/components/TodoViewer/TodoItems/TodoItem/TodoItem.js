import React from 'react'

const TodoItem = (props) => {
  return(
    <div className="TodoItem">
      <p>{props.todoItem}</p>
      <div className="checkWrapper">
        <input id={props.id} type="checkbox" />
        <label htmlFor={props.id}></label>
      </div>
    </div>
  )
}

export default TodoItem