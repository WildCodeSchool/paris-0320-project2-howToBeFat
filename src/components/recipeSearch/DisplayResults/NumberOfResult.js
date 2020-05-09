import React from 'react'
import Proptypes from 'prop-types'

import './NumberOfResult.css'

const NumberOfResult = (props) => (
  <article className="numberResult">
    <h5>{props.numOfResult} <span>recipes found !</span></h5>
  </article>
)

NumberOfResult.prototype = {
  numOfResult: Proptypes.number.isRequired
}
export default NumberOfResult