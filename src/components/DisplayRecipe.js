import React from 'react'
import PropTypes from 'prop-types'

import IngredientList from './IngredientList'

import './DisplayRecipe.css'

class RandomRecipe extends React.Component {

  render() {
    const { label, image, url } = { ...this.props.recipe }
    const totalTime = this.props.preparationTime
    const calories = this.props.calories
    const ingredientsList = this.props.ingredientsList

    return (
      <div className="DisplayRecipe">
        <div class="card">
        <h1> Random recipe </h1>
        <img src={image} alt=""></img>
        <div class="container">
          <p>{label}</p>
              <p>Number of calories: {calories}</p>
              {/* <p><a href={url}>Here is the recipe !</a></p> */}
              {/* <p>Preparation time: {totalTime}</p> */}
              <button>Show more</button>
              <button>Show more</button>
        </div>
      </div>
      </div>
    )
  }
}

RandomRecipe.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    totalTime: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    ingredientsList: PropTypes.arrayOf.isRequired,
  })
}

export default RandomRecipe