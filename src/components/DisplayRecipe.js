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

DisplayRecipe.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
  })
}

export default DisplayRecipe