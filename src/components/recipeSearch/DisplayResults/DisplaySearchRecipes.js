import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'

import MainRecipe from './MainRecipe'
import NumberOfResult from './NumberOfResult'
import RecipesDesktop from './RecipesDesktop'
import SetRangeDisplay from './SetRangeDisplay'

import './DisplaySearchRecipes.css'

const DisplaySearchRecipes = (props) => {

  // Define hooks state
  const [isDisplay, setIsDisplay] = useState('')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [rangeLevel, setRangeLevel] = useState({ min: 0, max: 5 })
  const [saveRange, setSaveRange] = useState({ min: 0, max: 5 })
  const [thumbnails, setThumbnails] = useState({
    extremLeft: [],
    left: [],
    right: [],
    extremRight: []
  })
  // destructuring the props
  const { numOfResult, recipes } = { ...props }

  // Dispatch the recipes in different array to display them in their components depending of the number of results
  useEffect(() => {
    setIsDisplay(recipes[0].recipe.uri)
    let totalResult = recipes.length
    if (totalResult <= 10) {
      const leftDisplay = Math.floor(totalResult / 2)
      const tmpLeftRecipe = recipes.filter((recipe, id) => id < leftDisplay)
      const tmpRightRecipe = recipes.filter((recipe, id) => id >= leftDisplay && id <= totalResult)
      setThumbnails({ ...thumbnails, left: tmpLeftRecipe, right: tmpRightRecipe })
    }
    else {
      totalResult = totalResult > 20 ? 20 : totalResult
      const tmpLeftRecipe = { "left": recipes.filter((recipe, id) => id < 5) }
      const tmpRightRecipe = { "right": recipes.filter((recipe, id) => id >= 5 && id < 10) }
      const extremLeftDisplay = Math.floor(11 + ((totalResult - 10) / 2))
      const tmpExtremLeftRecipe = { "extremLeft": recipes.filter((recipe, id) => id > 10 && id < extremLeftDisplay) }
      const tmpExtremRightRecipe = { "extremRight": recipes.filter((recipe, id) => id >= extremLeftDisplay && id <= totalResult) }
      setThumbnails({ ...tmpRightRecipe, ...tmpLeftRecipe, ...tmpExtremLeftRecipe, ...tmpExtremRightRecipe })
    }
  }, [])
  // Define the id of the curent clicked recipe
  const handleClick = (e) => {
    setIsDisplay(e.target.id)
  }
  // On click on the more and less display recipes button in the mobile display
  const rangeClick = (direction) => {
    if (direction === "up") {
      const tmp = rangeLevel.max
      setRangeLevel({ min: tmp, max: tmp + 5 })
      setRangeLevel({ min: tmp, max: tmp + 5 })
    } else if (direction === "down") {
      const tmp = rangeLevel.min
      setRangeLevel({ min: tmp - 5, max: tmp })
      setRangeLevel({ min: tmp - 5, max: tmp })
    }
  }
  //Define the windows size and save the user range when increase or decrease to recover it after desktop view
  useEffect(() => {
    windowWidth <= 780 && setSaveRange({ ...rangeLevel })
  }, [rangeLevel])

  //Detect the size of the window for css display
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
    if (windowWidth > 780) {
      setRangeLevel({ min: 0, max: 100 })
    } else {
      setRangeLevel(saveRange)
    }
    return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
  }, [windowWidth]);

  return (
    <div className="mainContainer">
      {
        recipes[0] &&
        <>
          <NumberOfResult numOfResult={numOfResult} />
          <div className="flexContainer">
            <div className="extremContainer">
              <RecipesDesktop side="extremLeft" recipes={thumbnails.extremLeft} display={isDisplay} handleClick={handleClick} />
            </div>
            <div className="leftContainer">
              <RecipesDesktop side="left" recipes={thumbnails.left} display={isDisplay} handleClick={handleClick} />
            </div>
            <div className="centralContainer">
              {
                recipes.map((recipe, id) =>
                  id < rangeLevel.max &&
                  <MainRecipe key={id} recipes={recipe.recipe} display={isDisplay} handleClick={handleClick} />
                )
              }
              {
                <SetRangeDisplay handleClick={rangeClick} numOfResult={numOfResult} displayMax={rangeLevel.max} />
              }
            </div>
            <div className="rightContainer">
              <RecipesDesktop side="right" recipes={thumbnails.right} display={isDisplay} handleClick={handleClick} />
            </div>
            <div className="extremContainer">
              <RecipesDesktop side="extremRight" recipes={thumbnails.extremRight} display={isDisplay} handleClick={handleClick} />
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