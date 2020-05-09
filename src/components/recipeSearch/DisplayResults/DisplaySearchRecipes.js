import React from 'react'
import Proptypes from 'prop-types'

import './DisplaySearchRecipes.css'
import NumberOfResult from './NumberOfResult'

const DisplaySearchRecipes = (props) => {

  const { numOfResult, recipes } = { ...props }
  return (
    <div className="mainContainer">
      {
        recipes[0] &&
        <>
          <NumberOfResult numOfResult={numOfResult} />
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