import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './RecipesDesktop.css'

const RecipesDesktop = (props) => {

  const { recipes, display, handleClick, side } = { ...props }

  let nbRecipeForHere = 0
  let recipesForHere = []
  const nbRecipeTotal = recipes.length - 1

  const defineClass = (bool) => {
    console.log(bool)
    const className = ['miniRecipes']
    if (bool) {
      className.push('selected')
    }
    return className.join(' ')
  }

  if (side === "left") {
    nbRecipeForHere = Math.ceil(nbRecipeTotal / 2)
    recipesForHere = recipes.filter((recipe, id) => id < nbRecipeForHere)
  }
  else {
    nbRecipeForHere = Math.floor(nbRecipeTotal / 2)
    recipesForHere = recipes.filter((recipe, id) => id > nbRecipeForHere)
  }

  const className = ['miniRecipes']

  return (
    <div className={`${side}Flex`}>
      {
        recipesForHere.map((recipe, id) => {
          let divId = side === 'left' ? id : nbRecipeForHere + id
          return (
            <div key={id} id={divId} onClick={(e) => handleClick(e)}
              className=
              {
                defineClass(divId === display)
              }>
              <img id={divId} src={recipe.recipe.image} alt={recipe.recipe.label} onClick={(e) => handleClick(e)} />
            </div>
          )
        })
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