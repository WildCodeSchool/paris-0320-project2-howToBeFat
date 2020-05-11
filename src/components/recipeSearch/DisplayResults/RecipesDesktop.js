import React from 'react'
import PropTypes from 'prop-types'

import './RecipesDesktop.css'

const RecipesDesktop = (props) => {

  const { recipe, display, handleClick, mapId, side } = { ...props }


  return (
    <div className={`${side}Flex`}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>
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