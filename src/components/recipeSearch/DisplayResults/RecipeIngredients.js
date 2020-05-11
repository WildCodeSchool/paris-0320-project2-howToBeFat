import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './RecipeIngredients.css'

const RecipeIngredients = (props) => {

  const [isTooBig, setIsTooBig] = useState(false)
  const [isDisplay, setIsDisplay] = useState(false)


  useEffect(() => {
    const ingredientsListHeight = document.getElementById("ingredientResultList")
    const height = parseFloat(getComputedStyle(ingredientsListHeight).height) / 16
    height === 10 && setIsTooBig(true)
  }, [isTooBig])

  const handleClick = () => {
    setIsDisplay(!isDisplay)
  }



  return (
    <article className="recipeIngredients">
      <h4 className="borderDeco">Ingredients:</h4>
      <div className=""></div>
      <ul id="ingredientResultList" className={isTooBig && isDisplay ? "list overflow" : "list"}>
        {
          props.ingredients.map((ingredient, id) =>
            <li key={id}>{ingredient}</li>
          )
        }
      </ul>
      {isTooBig &&
        <>
          <div className="viewMore" onClick={handleClick}>{!isDisplay ? "Display more..." : "Display less..."}</div>
        </>
      }
    </article >
  )
}

RecipeIngredients.prototype = {
  ingredients: PropTypes.array.isRequired
}
export default RecipeIngredients