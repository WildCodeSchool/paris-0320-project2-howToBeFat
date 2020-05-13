import React from 'react'
import PropTypes from 'prop-types'

import './SetRangeDisplay.css'

const SetRangeDisplay = (props) => {

  const { handleClick, displayMax, numOfResult } = props
  const resultMax = numOfResult <= 100 ? numOfResult : 100

  return (
    <div className="rangeRecipe">
      {displayMax < resultMax &&
        <div onClick={() => handleClick("up")} className="up">View more recipes</div>
      }
      {
        displayMax > 5 &&
        <div onClick={() => handleClick("down")} className="down">View less recipes</div>
      }
    </div >
  )
}


SetRangeDisplay.prototype = {
  handleClick: PropTypes.func.isRequired,
  numOfResult: PropTypes.number.isRequired,
  displayMax: PropTypes.number.isRequired,
}

export default SetRangeDisplay