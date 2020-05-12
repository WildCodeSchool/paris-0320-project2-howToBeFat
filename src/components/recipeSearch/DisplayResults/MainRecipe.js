import React from 'react'
import PropTypes from 'prop-types'

import RecipeIngredients from './RecipeIngredients'
import RecipeInfos from './RecipeInfos'
import './MainRecipe.css'

const MainRecipe = (props) => {

  const { display, recipes, handleClick, mapId } = { ...props }

  // Defined if the current recipe is display
  const isDisplay = mapId === parseFloat(display)
  let labelClassNames = isDisplay ? 'selected' : 'divLabel'

  return (
    <main className="searchMainDisplay">
      < div id={mapId} className={labelClassNames} onClick={(e) => handleClick(e)}>
        <h2 id={mapId} title={`Display the ${recipes.label} recipe`}>{recipes.label}</h2>
      </div>
      {
        isDisplay &&
        <>
          <RecipeInfos calories={recipes.calories} time={recipes.totalTime} />
          <div className="divImage">
            <img src={recipes.image} alt={recipes.label} />
          </div>
          <RecipeIngredients ingredients={recipes.ingredientLines} />
          <p className="button-recipe"><a href={recipes.url} title={`Go to the extern Web page of ${recipes.label} recipe`} target="blank">See the whole recipe !</a></p>
        </>
      }
    </main >
  )
}

MainRecipe.prototype = {
  recipe: PropTypes.arrayOf(Object).isRequired,
  display: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  mapId: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  displayMax: PropTypes.number.isRequired
}
export default MainRecipe