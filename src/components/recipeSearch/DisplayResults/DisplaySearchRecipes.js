import React, { useState } from 'react'
import Proptypes from 'prop-types'

import NumberOfResult from './NumberOfResult'
import MainRecipe from './MainRecipe'

import './DisplaySearchRecipes.css'

const DisplaySearchRecipes = (props) => {

  const [isDisplay, setIsDisplay] = useState(0)

  const handleClick = (id) => {
    setIsDisplay(id)
  }

  const { numOfResult, recipes } = { ...props }
  return (
    <div className="mainContainer">
      {
        recipes[0] &&
        <>
          <NumberOfResult numOfResult={numOfResult} />
          {recipes.map((recipe, id) =>
            <MainRecipe recipe={recipe.recipe} display={isDisplay} key={id} mapId={id} onClick={(id) => handleClick(id)} />
          )}
        </>
      }
    </div>
  )
}

DisplaySearchRecipes.prototype = {
  numOfResult: Proptypes.number.isRequired,
  recipes: Proptypes.shape.isRequired
}

export default DisplaySearchRecipes