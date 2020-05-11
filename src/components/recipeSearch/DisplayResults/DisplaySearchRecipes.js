import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'

import NumberOfResult from './NumberOfResult'
import MainRecipe from './MainRecipe'
import RecipesDesktop from './RecipesDesktop'

import './DisplaySearchRecipes.css'

const DisplaySearchRecipes = (props) => {

  const [isDisplay, setIsDisplay] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleClick = (e) => {
    setIsDisplay(e.target.id)
  }
  //Detect the size of the window for css display
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
    console.log(windowWidth)
    return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
  });

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
          <div className="flexContainer">
            <div className="leftContainer">
              <RecipesDesktop side="left" recipe={recipes} display={isDisplay} handleClick={handleClick} />
            </div>
            <div className="centralContainer">
              {
                recipes.map((recipe, id) =>
                  <MainRecipe recipe={recipe.recipe} display={isDisplay} key={id} mapId={id} handleClick={handleClick} width={windowWidth} />
                )}
            </div>
            <div className="rightContainer">
              <RecipesDesktop side="right" recipe={recipes} display={isDisplay} handleClick={handleClick} />
            </div>
          </div>
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