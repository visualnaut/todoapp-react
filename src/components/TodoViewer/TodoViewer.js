import React from 'react'
import TodoItems from './TodoItems/TodoItems'

const TodoViewer = (props) => {

  let title, showedTodo, doneTodoContainer, doneTodo, catStyle
  if (props.showTrash) {
    showedTodo = props.todoItems.filter(todo => todo.isDeleted === true && todo.isDone === false)
    doneTodo = props.todoItems.filter(todoItem => todoItem.isDeleted === true && todoItem.isDone === true)
    title= "Trash Can"
  } else {
    let getCategoryAttrib = props.categories.filter(categories => categories.id === props.categoryActive)
    showedTodo = props.todoItems.filter(todoItem => todoItem.idCat === props.categoryActive && 
                                                    todoItem.isDone === false && 
                                                    todoItem.isDeleted === false)
    doneTodo = props.todoItems.filter(todoItem => todoItem.idCat === props.categoryActive && 
                                                  todoItem.isDone === true && 
                                                  todoItem.isDeleted === false)
    title = getCategoryAttrib[0].categoryTitle + " To Do List"
    catStyle = { borderColor: getCategoryAttrib[0].catColor}
  }
  if(props.showDone) {
    doneTodoContainer = 
    <div className="DoneTodoContainer">
      <h1>Done Todo</h1>
      <TodoItems todoItems={doneTodo} categoryActive={props.categoryActive} checkboxClicked = {props.checkboxClicked} />
    </div>
    console.log(doneTodo)
  }
  return(
    <div className="TodoViewerContainer" style={catStyle}>
      <div className="TodoViewerContainerHeader">
        <h1 className="Title">{title}</h1>
        <button onClick={props.showDoneTodoClicked} 
                className={props.showDone ? "ShowDoneBtn active" : "ShowDoneBtn"}>Show Done</button>
      </div>
      <TodoItems 
        todoItems={showedTodo}
        categoryActive={props.categoryActive}
        checkboxClicked = {props.checkboxClicked} />
      {doneTodoContainer}
    </div>
  )
}

export default TodoViewer;