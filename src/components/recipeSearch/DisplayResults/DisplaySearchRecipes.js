import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'

import NumberOfResult from './NumberOfResult'
import MainRecipe from './MainRecipe'
import RecipesDesktop from './RecipesDesktop'

import './DisplaySearchRecipes.css'

const DisplaySearchRecipes = (props) => {

  const [isDisplay, setIsDisplay] = useState({ actual: 0, old: null })
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // const [selectedRecipes, setSelectedRecipes] = useState({ recipes: [], oldDisplay: null })

  const { numOfResult, recipes } = { ...props }

  const handleClick = (e) => {
    setIsDisplay({ ...isDisplay, actual: e.target.id, old: isDisplay.actual })
  }
  //Detect the size of the window for css display
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
    console.log(windowWidth)
    return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
  });

  useEffect(() => {
    // setIsDisplay({ ...isDisplay, old: parseFloat(isDisplay) })
  }, [isDisplay])

  // useEffect(() => {
  //   setSelectedRecipes({ ...selectedRecipes, oldDisplay: parseFloat(isDisplay) })
  //   const tmp = []
  //   tmp.push(recipes.map((recipe, id) => recipe.recipe))
  //   console.log(selectedRecipes)
  // }, [recipes, isDisplay])
  console.log(isDisplay.actual, isDisplay.old)

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
                  <MainRecipe recipe={recipe.recipe} display={isDisplay.actual} key={id} mapId={id} handleClick={handleClick} width={windowWidth} />
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