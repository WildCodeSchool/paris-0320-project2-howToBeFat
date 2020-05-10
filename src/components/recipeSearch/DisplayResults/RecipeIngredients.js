import React from 'react'
import PropTypes from 'prop-types'

import './RecipeIngredients.css'

const RecipeIngredients = (props) => {

  return (
    <>
      <ul className="recipeIngredients">
        {
          props.ingredients.map((ingredient, id) =>
            <li key={id}>{ingredient}</li>
            // console.log(ingredient)
          )
        }
      </ul>
    </>
  )
}

RecipeIngredients.prototype = {
  ingredients: PropTypes.array.isRequired
}
export default RecipeIngredients