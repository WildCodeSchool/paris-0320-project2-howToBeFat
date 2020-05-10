import React from 'react'
import PropTypes from 'prop-types'

import './RecipeInfos.css'

const RecipeInfos = (props) => (
  <article className="recipeInfos">
    <aside className="infos">
      <h4>Calories</h4>
      <p>{Math.round(props.calories)} Kcal</p>
    </aside>
    <aside className="infos">
      <h4>Preparation time</h4>
      <p>{props.time ? `${props.time} minutes` : "Not available"} </p>
    </aside>
  </article>
)

RecipeInfos.propTypes = {
  calories: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired
}
export default RecipeInfos