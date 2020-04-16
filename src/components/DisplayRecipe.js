import React from 'react'
import PropTypes from 'prop-types'

//import IngredientList from './IngredientList'

import './DisplayRecipe.css'

class DisplayRecipe extends React.Component {
  state = {
    page: "displayRecipe",
    reload: false
  }

  render() {
    const { label, image } = { ...this.props.recipe }
    //const totalTime = this.props.preparationTime
    const calories = this.props.calories
    //const ingredientsList = this.props.ingredientsList

    return (
      <div>
        <h1> Random recipe: </h1>
        <article>
          <p>{label}</p>
          <img src={image} alt=""></img>
          <p>Number of calories: {calories}</p>
        </article>
      </div >
    )
  }
}

DisplayRecipe.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
  })
}

export default DisplayRecipe