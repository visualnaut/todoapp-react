import React from 'react'
import Categories from './Categories/Categories'

const Sidebar = props => {
  return (
    <div className="SidebarContainer">
      <h1 className="Title">Categories</h1>
      <Categories 
        categories={props.categories} 
        categoryActive={props.categoryActive}
        clicked={props.clicked} />
    </div>
  )
}

export default Sidebar