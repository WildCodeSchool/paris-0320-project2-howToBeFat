import React from 'react'
import PropTypes from 'prop-types'

//import IngredientList from './IngredientList'

import './DisplayRecipe.css'

class DisplayRecipe extends React.Component {

  render() {
    const { label, image } = { ...this.props.recipe }
    const calories = this.props.calories

    return (
      <div className="DisplayRecipe">
        <div className="card">
          <h1> Random recipe </h1>
          <img src={image} alt=""></img>
          <div className="container">
            <p className="bolder">{label}</p>
            <p>Number of calories: <span className="bolder">{calories}</span></p>
          </div>
        </div>
      </div>
    )
  }
}

DisplayRecipe.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  calories: PropTypes.number.isRequired
}

export default DisplayRecipe