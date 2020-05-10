import React from 'react'
import PropTypes from 'prop-types'

import './RecipeIngredients.css'
import IconeIngredient from '../images/ingredients.png'

const RecipeIngredients = (props) => {

  return (
    <article className="recipeIngredients">
      <h4 className="borderDeco">Ingredients:</h4>
      <div className=""></div>
      <ul>
        {
          props.ingredients.map((ingredient, id) =>
            <li key={id}>{ingredient}</li>
          )
        }
      </ul>
    </article >
  )
}

RecipeIngredients.prototype = {
  ingredients: PropTypes.array.isRequired
}
export default RecipeIngredients