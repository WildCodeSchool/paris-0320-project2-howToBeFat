import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'

import NumberOfResult from './NumberOfResult'
import MainRecipe from './MainRecipe'
import RecipesDesktop from './RecipesDesktop'
import SetRangeDisplay from './SetRangeDisplay'

import './DisplaySearchRecipes.css'

const DisplaySearchRecipes = (props) => {

  const [isDisplay, setIsDisplay] = useState(0)
  const [displayMax, setdisplayMax] = useState(5)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [rangeLevel, setRangeLevel] = useState(0)
  const { numOfResult, recipes } = { ...props }


  const handleClick = (e) => {
    setIsDisplay(parseInt(e.target.id))
  }

  const rangeClick = (direction) => {
    console.log(rangeLevel)
    if (direction === "up") {
      setdisplayMax(displayMax + 5)
      setRangeLevel(rangeLevel + 1)
    } else if (direction === "down") {
      setdisplayMax(displayMax - 5)
      setRangeLevel(rangeLevel - 1)
    }
  }

  //Detect the size of the window for css display
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
    return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
  });

  return (
    <div className="mainContainer">
      {
        recipes[0] &&
        <>
          <NumberOfResult numOfResult={numOfResult} />
          <div className="flexContainer">
            <div className="leftContainer">
              <RecipesDesktop side="left" recipes={recipes} display={isDisplay} handleClick={handleClick} />
            </div>
            <div className="centralContainer">
              {
                recipes.map((recipe, id) =>
                  id < displayMax &&
                  <MainRecipe recipes={recipe.recipe} display={isDisplay} key={id} mapId={id} handleClick={handleClick} numOfResult={numOfResult} />
                )
              }
              {
                <SetRangeDisplay handleClick={rangeClick} numOfResult={numOfResult} displayMax={displayMax} rangeLevel={rangeLevel} />
              }
            </div>
            <div className="rightContainer">
              <RecipesDesktop side="right" recipes={recipes} display={isDisplay} handleClick={handleClick} rangeLevel={rangeLevel} />
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