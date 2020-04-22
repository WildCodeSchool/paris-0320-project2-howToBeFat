import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import './DisplayRecipe.css'

class DisplayRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { label, image } = { ...this.props.recipe }
    const calories = this.props.calories
    console.log(this.props)
    return (
      <div className="DisplayRecipe">
        <div className="card">
          <h2> RECIPE OF THE DAY </h2>
          <img src={image} alt=""></img>
          <div className="container">
            <p className="recipeName">{label}</p>
            <p>Number of calories:<br /> <span className="recipeName nbCal">{calories}</span> Kcal</p>
            <div className="button">
              <button onClick={this.props.getOtherRecipe}>Show another one! </button>
            
                <button><Link to={{
                  pathname:"/FullRecipeCard",
                  data:{recipe:this.props.recipe

                  }
                }} >To come Up Nearly...</Link></button>
          
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