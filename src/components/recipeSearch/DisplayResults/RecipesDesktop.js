import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './RecipesDesktop.css'

const RecipesDesktop = (props) => {

  const { recipes, display, handleClick, side } = { ...props }
  console.log(side, recipes, "desktop")

  const defineClass = (bool) => {
    console.log(bool)
    const className = ['miniRecipes']
    if (bool) {
      className.push('selected')
    }
    return className.join(' ')
  }

  return (
    <div className={`${side}Flex`}>
      {
        recipes.map((recipe, id) => {
          return (
            <div key={id} id={id} onClick={(e) => handleClick(e)}
              className=
              {
                defineClass(id === display)
              }>
              <img id={id} src={recipe.recipe.image} alt={recipe.recipe.label} onClick={(e) => handleClick(e)} />
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