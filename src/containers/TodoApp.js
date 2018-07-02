import React, { Component } from 'react'

import Sidebar from '../components/Sidebar/Sidebar'
import TodoViewer from '../components/TodoViewer/TodoViewer'
import AddTodoForm from '../components/Forms/AddTodoForm'

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
    isTodoFormOpen: false,
    showTrash: false,
    showDone: false,
    todoTemp: ''
  }
  
  setTodoDoneHandler = (id , idCat) => {
    // Get the clicked todo and current todos category
    const todo = this.state.todoItems.find((todo) => todo.id === id && todo.idCat === idCat)
    const todos = [...this.state.todoItems]

    // Toggle the selected todo
    todo.isDone = !todo.isDone

    // Update the todos with edited todo above
    todos.splice(id, todo)

    // Set the current state to latest edited todos
    this.setState(({
      todoItems: todos
    }))
  }

  changeCategoryHandler = (index) => {
    const catActiveNow = index;
    this.setState({
      catActiveId: catActiveNow,
      showTrash: false,
      showDone: false,
      isTodoFormOpen: false,
      todoTemp: ''
    })
  }

  showTrashHandler = () => {
    this.setState({
      showTrash: true,
      showDone: false,
      isTodoFormOpen: false,
      todoTemp: ''
    })
  }

  showDoneTodoHandler = () => {
    this.setState(prevState => ({
      showDone: !prevState.showDone
    }))
  }

  openAddTodoFormHandler = () => {
    this.setState(prevState => ({
      isTodoFormOpen: !prevState.isTodoFormOpen,
      todoTemp: ''
    }))
  }

  addTodoHandler = () => {
    if(this.state.todoTemp !== '') {
      const possibleTodoId = this.state.todoItems.filter((todo) => todo.idCat === this.state.catActiveId).length
      const populateTodo = [
        ...this.state.todoItems
      ]
      const newTodo = {
        id: possibleTodoId,
        idCat: this.state.catActiveId,
        todo: this.state.todoTemp,
        isDone: false,
        isDeleted: false
      }
      populateTodo.push(newTodo)

      this.setState({
        todoItems: populateTodo,
        todoTemp: '',
        isTodoFormOpen: false
      })
      console.log(populateTodo)
      console.log(possibleTodoId)
    } 
  }

  addTodoChangeHandler = (e) => {
    this.setState({
      todoTemp: e.target.value
    })
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
            {this.state.isTodoFormOpen ? <AddTodoForm
              onChangeAddTodo={this.addTodoChangeHandler}
              addTodoClicked={this.addTodoHandler}
              showAddTodoFormClicked={this.openAddTodoFormHandler} /> : null}
          </div>
          <div className="ActionBtnWrapper">
            {this.state.showTrash ? null : <button className="AddNewBtn" onClick={this.openAddTodoFormHandler}></button> }
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
