import React from 'react'
import TodoItem from './TodoItem/TodoItem'

const TodoItems = (props) => {

  if (props.todoItems.length < 1) {
    return (
    <div className="EmptyTodoContainer">
      <p>No todo found :(</p>
    </div>
    )
  } else {
    return props.todoItems.map(
      (todoItem, index) => {
        return (<TodoItem
              key={index}
              id={todoItem.id}
              idCat={todoItem.idCat}
              index={index}
              todoItem={todoItem.todo}
              isDone={todoItem.isDone} 
              checkboxClicked = {props.checkboxClicked} />)
      }
    )
  }
}


export default TodoItems