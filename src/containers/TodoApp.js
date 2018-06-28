import React, { Component } from 'react'

import Sidebar from '../components/Sidebar/Sidebar'
import TodoViewer from '../components/TodoViewer/TodoViewer'

import './TodoApp.css'

class App extends Component {
  state = {
    categories: [
      {
        id: 0, 
        categoryTitle: "Personal"
      },
      {
        id: 1,
        categoryTitle: "School"
      },
      {
        id: 2,
        categoryTitle: "Project"
      }
    ],
    todoItems: [
      {
        id: 0, 
        idCat: 0, 
        todo: "Buy some eggs", 
        isDone: false
      },
      {
        id: 0,
        idCat: 1,
        todo: "Finish Homework",
        isDone: false
      }
    ],
    catActiveId: 0
  }

  changeCategoryHandler = (index) => {
    const catActiveNow = index;
    this.setState({
      catActiveId: catActiveNow
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
              clicked={this.changeCategoryHandler} />
          </div>
          <div className="TodoViewerWrapper">
            <TodoViewer
              categories={this.state.categories} 
              categoryActive={this.state.catActiveId} 
              todoItems={this.state.todoItems} />
          </div>
          <button className="AddNewBtn"></button>
        </div>
      </div>
    )
  }
}

export default App
