import React from 'react'
import PropTypes, { shape, number } from 'prop-types'

import './MainRecipe.css'

const MainRecipe = (props) => {
  return (
    <>
    </>
  )
}

MainRecipe.prototype = {
  recipe: PropTypes.arrayOf(shape).isRequired,
  display: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}
export default MainRecipe