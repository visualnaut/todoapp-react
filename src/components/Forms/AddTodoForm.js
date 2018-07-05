import React from 'react'

const AddTodoForm = (props) => {
  
  return(
    <div className="AddTodoFormWrapper">
      <div className="AddTodoFormContainer" style={{
        transform: props.isOpen ? 'translateY(0)' : 'translateY(-10px)',
        opacity: props.isOpen ? '1' : '0',
        visibility: props.isOpen ? 'visible' : 'hidden'
      }}>
        <div className="AddTodoFormHeader">
        <p>Write your new to-dos!</p>
        <a onClick={props.showAddTodoFormClicked}>X</a>
        </div>
        <input type="text" onChange={props.onChangeAddTodo} placeholder="Add a new todo"/>
        <button onClick={props.addTodoClicked}>Add Todo</button>
      </div>
    </div>
  )
}

export default AddTodoForm
