import React from 'react'
import {Link} from 'react-router-dom'
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
            <div className="button">
              <button onClick={this.props.getOtherRecipe} className="button-recipe">Show another one! </button>
              <button className="button-recipe" value="See more infos..."><Link to={{
                pathname: "/FullRecipeCard",
                data: {
                  recipe: this.props.recipe,
                  calories: this.props.calories,
                  ingredients: this.props.ingredientsList,
                  preparationTime: this.props.preparationTime
                }
              }} >See more details ...</Link></button>
            </div>
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