import React from 'react'
import TodoItems from './TodoItems/TodoItems'

const TodoViewer = (props) => {
  const actCategory = props.categories.filter(categories => categories.id === props.categoryActive)
  return(
    <div className="TodoViewerContainer">
      <h1 className="Title">{actCategory[0].categoryTitle} Todo List</h1>
      <TodoItems 
        todoItems={props.todoItems}
        categoryActive={props.categoryActive} />
    </div>
  )
}

export default TodoViewer;