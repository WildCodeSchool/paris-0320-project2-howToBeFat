import React from 'react'
import PropTypes from 'prop-types'

import RecipeIngredients from './RecipeIngredients'
import RecipeInfos from './RecipeInfos'
import './MainRecipe.css'

const MainRecipe = (props) => {

  const { display, recipe, handleClick, mapId } = { ...props }

  // Defined if the current recipe is display
  const isDisplay = mapId === display
  const labelClassNames = ['divLabel']
  // If display add selected to the name of the class
  isDisplay && labelClassNames.push('selected')

  return (
    <main className="searchMainDisplay">
      <div className={labelClassNames.join(' ')}>
        <h2>{recipe.label}</h2>
      </div>
      {isDisplay &&
        <>
          <RecipeInfos calories={recipe.calories} time={recipe.totalTime} />
          <div className="divImage">
            <img src={recipe.image} alt={recipe.label} />
          </div>
          <RecipeIngredients ingredients={recipe.ingredientLines} />
        </>
      }
    </main>
  )
}

MainRecipe.prototype = {
  recipe: PropTypes.arrayOf(Object).isRequired,
  display: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  mapId: PropTypes.number.isRequired
}
export default MainRecipe