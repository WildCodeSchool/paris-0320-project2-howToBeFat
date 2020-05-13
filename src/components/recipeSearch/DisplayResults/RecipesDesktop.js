import React from 'react'
import PropTypes from 'prop-types'

import './RecipesDesktop.css'

const RecipesDesktop = (props) => {

  const { recipes, display, handleClick, side } = { ...props }

  const defineClass = (bool) => {
    const className = ['miniRecipes']
    if (bool) {
      className.push('selected')
    }
    return className.join(' ')
  }

  return (
    <div className={`${side}Flex`}>
      {
        recipes.map(recipe => {
          const id = recipe.recipe.uri
          return (
            <div key={id} id={id}
              className=
              {
                defineClass(id === display)
              }>
              <img id={id} src={recipe.recipe.image} alt={recipe.recipe.label} onClick={(e) => handleClick(e)} title={id} />
            </div>
          )
        })
      }
    </div>
  )
}

RecipesDesktop.prototype = {
  recipe: PropTypes.arrayOf(Object).isRequired,
  display: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  side: PropTypes.string.isRequired
}
export default RecipesDesktop