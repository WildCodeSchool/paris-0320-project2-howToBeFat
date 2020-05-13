import React from 'react'
import PropTypes from 'prop-types'

import './RecipeInfos.css'

// Define custom message depending of time of preparation
const getPreparationTime = (time) => {
  const hours = time > 60 ? Math.floor(time / 60) : 0
  const unity = hours > 1 ? "hours" : "hour"
  const minutes = time > 60 ? time % 60 : time
  return time > 60 ? `${hours} ${unity} and ${minutes} minutes` : `${minutes} minutes`
}

const RecipeInfos = (props) => (
  <article className="recipeInfos">
    <aside className="infos">
      <h4>Calories</h4>
      <p>{Math.round(props.calories)} Kcal</p>
    </aside>
    <aside className="infos">
      <h4>Preparation time</h4>
      <p title={getPreparationTime(props.time)}>{props.time ? `${props.time} minutes` : "Not available"} </p>
    </aside>
  </article>
)

RecipeInfos.propTypes = {
  calories: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired
}
export default RecipeInfos