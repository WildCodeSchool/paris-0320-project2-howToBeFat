import React from 'react'
import PropTypes from 'prop-types'

import RecipeIngredients from './RecipeIngredients'
import RecipeInfos from './RecipeInfos'
import './MainRecipe.css'

const MainRecipe = (props) => {

  const { display, recipe, handleClick, mapId } = { ...props }

  // Defined if the current recipe is display
  const isDisplay = mapId === parseFloat(display)
  let labelClassNames = isDisplay ? 'selected' : 'divLabel'

  return (
    <main className="searchMainDisplay">
      <div id={mapId} className={labelClassNames} onClick={(e) => handleClick(e)}>
        <h2 id={mapId} title={`Display the ${recipe.label} recipe`}>{recipe.label}</h2>
      </div>
      {isDisplay &&
        <>
          <RecipeInfos calories={recipe.calories} time={recipe.totalTime} />
          <div className="divImage">
            <img src={recipe.image} alt={recipe.label} />
          </div>
          <RecipeIngredients ingredients={recipe.ingredientLines} />
          <p className="button-recipe"><a href={recipe.url} title={`Go to the extern Web page of ${recipe.label} recipe`} target="blank">See the whole recipe !</a></p>
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