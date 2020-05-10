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
            <MainRecipe recipe={recipe} display={isDisplay} key={id} onClick={(id) => handleClick(id)} />
          )}

          <fieldset>
            <legend>Other recipess</legend>
            <ul>{recipes && recipes.map((e, id) => <li key={id}>{e.recipe.label}</li>)}</ul>
          </fieldset>
          <h3>{recipes[0].recipe.label}</h3>
          <p><img src={recipes[0].recipe.image} alt={recipes[0].recipe.label} /></p>
          <p>{recipes[0].recipe.calories}</p>
          <p>{recipes[0].recipe.totalTime}</p>
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