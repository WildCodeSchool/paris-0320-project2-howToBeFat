import React from 'react'
import './IngredientList.css'

const IngredientList = ({ list }) => (

  <ul>
    {list.map(ingredient => (
      <li key={ingredient}>{ingredient}</li>))}
  </ul>
)

export default IngredientList