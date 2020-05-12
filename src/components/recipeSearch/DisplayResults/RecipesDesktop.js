import React from 'react'
import PropTypes from 'prop-types'

import './RecipesDesktop.css'

const RecipesDesktop = (props) => {

  const { recipes, display, handleClick, side } = { ...props }

  // console.log(recipe.length, "nb_recette")
  // console.log(display.actual, display.old, "ids")
  const nbRecipeTotal = recipes.length - 1
  let nbRecipeForHere = 0
  let recipesForHere = []
  if (side === "left") {
    nbRecipeForHere = Math.ceil(nbRecipeTotal / 2)
    recipesForHere = recipes.filter((recipe, id) => id < nbRecipeForHere)
  }
  else {
    nbRecipeForHere = Math.floor(nbRecipeTotal / 2)
    recipesForHere = recipes.filter((recipe, id) => id > nbRecipeForHere)
  }

  console.log(nbRecipeForHere, `${side}`)
  console.log(recipesForHere, `${side}`)

  return (
    <div className={`${side}Flex`}>
      {
        // recipes.map((recip, id) =>
        //   side === "left" ?
        //     nbRecipeForHere <= id - 1 &&
        //     (console.log(recip.recipe.label))
        //     :
        //     nbRecipeForHere + (id - 1) <= nbRecipeTotal &&
        //     (console.log(recip.recipe.label))
        // )
      }
    </div>
  )
}

RecipesDesktop.prototype = {
  recipe: PropTypes.arrayOf(Object).isRequired,
  display: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  mapId: PropTypes.number.isRequired,
  side: PropTypes.string.isRequired
}
export default RecipesDesktop