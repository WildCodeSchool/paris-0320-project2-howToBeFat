import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'

import NumberOfResult from './NumberOfResult'
import MainRecipe from './MainRecipe'
import RecipesDesktop from './RecipesDesktop'

import './DisplaySearchRecipes.css'

const DisplaySearchRecipes = (props) => {

  const [isDisplay, setIsDisplay] = useState(0)

  const handleClick = (e) => {
    setIsDisplay(e.target.id)
  }

  useEffect(() => {
    console.log(isDisplay)
  }, [isDisplay])

  const { numOfResult, recipes } = { ...props }
  return (
    <div className="mainContainer">
      {
        recipes[0] &&
        <>
          <NumberOfResult numOfResult={numOfResult} />
          {recipes.map((recipe, id) =>
            <>
              <div className="flexContaineur">
                <div className="leftContainer">
                  <RecipesDesktop side="left" recipe={recipes} display={isDisplay} handleClick={handleClick} key={id} mapId={id} />
                </div>
                <div className="centralContainer">
                  <MainRecipe recipe={recipe.recipe} display={isDisplay} key={id} mapId={id} handleClick={handleClick} />
                </div>
                <div className="rightContainer">
                  <RecipesDesktop side="right" recipe={recipes} display={isDisplay} handleClick={handleClick} key={id} mapId={id} />
                </div>
              </div>
            </>
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