import React from 'react'

const AddTodoForm = (props) => {
  
  return(
    <div className="AddTodoFormWrapper">
      <div className="AddTodoFormContainer">
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
