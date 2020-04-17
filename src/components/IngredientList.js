import React from 'react'
import './IngredientList.css'

const IngredientList = ({ list }) => (

  <ul className="listIngredients">
    {list.map(ingredient => (
      <li key={ingredient}><hr></hr>{ingredient}</li>
    ))}
  </ul>
)

export default IngredientList