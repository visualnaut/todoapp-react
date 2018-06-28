import React from 'react'
import Category from './Category/Category'

const Categories = (props) => props.categories.map(
  (category, index) => {
    let isActive = false;
    if(category.id === props.categoryActive) {
      isActive = true;
    }
    return <Category 
            key={category.id}
            index={index} 
            categoryName={category.categoryTitle} 
            clicked={props.clicked}
            isActive={isActive} />
  }
)

export default Categories