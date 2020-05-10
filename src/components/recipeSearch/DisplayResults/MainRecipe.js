import React from 'react'
import PropTypes, { shape, number } from 'prop-types'

import './MainRecipe.css'

const MainRecipe = (props) => {

  const { display, recipe, handleClick, mapId } = { ...props }
  console.log(recipe)

  return (
    <main className="mainDisplay">
      <div className="label">
        <h2>{recipe.label}</h2>
      </div>
      {

      }
    </main>
  )
}

MainRecipe.prototype = {
  recipe: PropTypes.arrayOf(shape).isRequired,
  display: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  mapId: PropTypes.number.isRequired
}
export default MainRecipe