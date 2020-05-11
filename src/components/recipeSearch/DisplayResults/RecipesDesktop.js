import React from 'react'
import PropTypes from 'prop-types'

import './RecipeDesktop.css'

const RecipesDesktop = (props) => {


  return (
    <>
    </>
  )
}

RecipesDesktop.prototype = {
  recipe: PropTypes.arrayOf(Object).isRequired,
  display: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  mapId: PropTypes.number.isRequired,
  side: PropTypes.string.isRequired
}
export default RecipesDesktop