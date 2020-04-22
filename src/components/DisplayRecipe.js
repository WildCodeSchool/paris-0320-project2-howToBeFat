import React from 'react'

import PropTypes from 'prop-types'

import './DisplayRecipe.css'

class DisplayRecipe extends React.Component {

  render() {
    const { label, image } = { ...this.props.recipe }
    const calories = this.props.calories

    return (
      <div className="DisplayRecipe">
        <div className="card">
          <h2> RECIPE OF THE DAY </h2>
          <img src={image} alt=""></img>
          <div className="container">
            <p className="recipeName">{label}</p>
            <p>Number of calories:<br /> <span className="recipeName nbCal">{calories}</span> Kcal</p>
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