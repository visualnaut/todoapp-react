import React from 'react'

const Category = props => {
  let catClass = "categoryItem"
  if(props.isActive) {
    catClass += " active" 
  }
  return(
    <div onClick={() => props.clicked(props.index)} className={catClass}>
      <a>{props.categoryName}</a>
    </div>
  )
}

export default Category