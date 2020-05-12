import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './RecipesDesktop.css'

const RecipesDesktop = (props) => {

  const { recipes, display, handleClick, side } = { ...props }

  let nbRecipeForHere = 0
  let recipesForHere = []
  const nbRecipeTotal = recipes.length

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
                divId !== display ? className : className.push('selected') && className.join(' ')
              }>
              {divId}
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