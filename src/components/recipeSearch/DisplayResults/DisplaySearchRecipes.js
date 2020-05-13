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
  const [thumbnails, setThumbnails] = useState({
    extremLeft: [],
    left: [],
    right: [],
    extremRight: []
  })

  const { numOfResult, recipes } = { ...props }

  // const defineThumbnails = () => {
  //   const totalResult = recipes.length
  //   switch (totalResult) {
  //     case 
  //     default:
  //   }
  // }

  useEffect(() => {
    let totalResult = recipes.length
    console.log("totalResult", recipes.length)
    if (totalResult <= 10) {
      const leftDisplay = Math.floor(totalResult / 2)
      const tmpLeftRecipe = recipes.recipe.filter((recipe, id) => id < leftDisplay)
      const tmpRightRecipe = recipes.filter((recipe, id) => id >= leftDisplay && id <= totalResult)
      setThumbnails({ ...thumbnails, left: tmpLeftRecipe, right: tmpRightRecipe })
      console.log(`left: ${tmpLeftRecipe}, right: ${tmpRightRecipe}`)
    }
    else {
      totalResult = totalResult > 20 ? 20 : totalResult

      const tmpLeftRecipe = { "left": recipes.filter((recipe, id) => id < 5) }
      console.log(tmpLeftRecipe, "tmpLeftRecipe")
      const tmpRightRecipe = { "right": recipes.filter((recipe, id) => id >= 5 && id < 10) }
      const extremLeftDisplay = Math.floor(11 + ((totalResult - 10) / 2))
      const tmpExtremLeftRecipe = { "extremLeft": recipes.filter((recipe, id) => id > 10 && id < extremLeftDisplay) }
      const tmpExtremRightRecipe = { "extremRight": recipes.filter((recipe, id) => id >= extremLeftDisplay && id <= totalResult) }

      setThumbnails({ ...tmpRightRecipe, ...tmpLeftRecipe, ...tmpExtremLeftRecipe, ...tmpExtremRightRecipe })
    }

  }, [])

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
  // useEffect(() => {
  //   window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
  //   return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
  // });


  console.log(`left: ${thumbnails.left}, right: ${thumbnails.right}`)
  console.log(`extremLeft: ${thumbnails.extremLeft}, extremRight: ${thumbnails.extremRight}`)
  console.log(thumbnails, "thumbnails")

  return (
    <div className="mainContainer">
      {
        recipes[0] &&
        <>
          <NumberOfResult numOfResult={numOfResult} />
          <div className="flexContainer">
            <div className="ExtremContainer">
              <RecipesDesktop side="extremLeft" recipes={thumbnails.extremLeft} display={isDisplay} handleClick={handleClick} />
            </div>
            <div className="leftContainer">
              <RecipesDesktop side="left" recipes={thumbnails.left} display={isDisplay} handleClick={handleClick} />
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
              <RecipesDesktop side="right" recipes={thumbnails.right} display={isDisplay} handleClick={handleClick} rangeLevel={rangeLevel} />
            </div>
            <div className="ExtremContainer">
              <RecipesDesktop side="extremRight" recipes={thumbnails.extremRight} display={isDisplay} handleClick={handleClick} rangeLevel={rangeLevel} />
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