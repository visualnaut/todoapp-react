import React, { Component } from 'react'

import Sidebar from '../components/Sidebar/Sidebar'
import TodoViewer from '../components/TodoViewer/TodoViewer'

import './TodoApp.css'

class App extends Component {
  state = {
    categories: [
      {
        id: 0, 
        categoryTitle: "Personal",
        isDeleted: false,
        catColor: "tomato"
      },
      {
        id: 1,
        categoryTitle: "School",
        isDeleted: false,
        catColor: "seagreen"
      },
      {
        id: 2,
        categoryTitle: "Project",
        isDeleted: false,
        catColor: "slateblue"
      }
    ],
    todoItems: [
      {
        id: 0, 
        idCat: 0, 
        todo: "Buy some eggs", 
        isDone: false,
        isDeleted: false
      },
      {
        id: 1, 
        idCat: 0, 
        todo: "Buy some milks", 
        isDone: false,
        isDeleted: false
      },
      {
        id: 0,
        idCat: 1,
        todo: "Finish Homework",
        isDone: true,
        isDeleted: true
      }, 
      {
        id: 1,
        idCat: 1,
        todo: "Finish React",
        isDone: false,
        isDeleted: false
      }
    ],
    catActiveId: 0,
    showTrash: false,
    showDone: false
  }

  changeCategoryHandler = (index) => {
    const catActiveNow = index;
    this.setState({
      catActiveId: catActiveNow,
      showTrash: false,
      showDone: false
    })
  }
  
  setTodoDoneHandler = (id , idCat) => {
    // Get the clicked todo and current todos
    const todo = this.state.todoItems.find((todo) => todo.id === id && todo.idCat === idCat)
    const todos = [...this.state.todoItems]

    // Toggle the selected todo
    todo.isDone = !todo.isDone

    // Update the todos with edited todo above
    todos.splice(id, todo)

    console.log(todo)
    console.log(todos)

    // Set the current state to latest edited todos
    this.setState(({
      todoItems: todos
    }))
  }

  showTrashHandler = () => {
    this.setState({
      showTrash: true,
      showDone: false
    })
  }

  showDoneTodoHandler = () => {
    this.setState(prevState => ({
      showDone: !prevState.showDone
    }))
  }

  render () {
    return (
      <div className="TodoAppWrapper">
        <div className="TodoAppContainer">
          <div className="TodoSidebarWrapper">
            <Sidebar 
              categories={this.state.categories} 
              categoryActive={this.state.catActiveId} 
              clicked={this.changeCategoryHandler}
              showTrashClicked={this.showTrashHandler}
              showTrash={this.state.showTrash} />
          </div>
          <div className="TodoViewerWrapper">
            <TodoViewer
              categories={this.state.categories} 
              categoryActive={this.state.catActiveId}
              todoItems={this.state.todoItems}
              showTrash={this.state.showTrash}
              showDone={this.state.showDone}
              showDoneTodoClicked={this.showDoneTodoHandler}
              checkboxClicked={this.setTodoDoneHandler} />
          </div>
          <div className="ActionBtnWrapper">
            <button className="AddNewBtn"></button>
            <button className="AddNewBtn"></button>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
            </defs>
        </svg>
      </div>
    )
  }
}

export default App
