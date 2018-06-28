import React from 'react'
import TodoItem from './TodoItem/TodoItem'

let todoLists

const TodoItems = (props) => {
  const todoOnCat = props.todoItems.filter(todoItem => todoItem.idCat === props.categoryActive)
  if(todoOnCat.length < 1) {
    todoLists = <div className="NoTodo"></div>
  } else {
    todoOnCat.map(
    (todoItem, index) => {
      todoLists = <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            index={index}
            todoItem={todoItem.todo} />
        return false;
      }
    )
  }
    return todoLists
}


export default TodoItems