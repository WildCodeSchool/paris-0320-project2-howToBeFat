import React from 'react'
import Proptypes from 'prop-types'

import './NumberOfResult.css'

const NumberOfResult = (props) => (
  <article className="numberResult">
    <h5>Number of recipes found</h5>
    <p>{props.numOfResult}</p>
  </article>
)

NumberOfResult.prototype = {
  numOfResult: Proptypes.number.isRequired
}
export default NumberOfResult