import React from 'react'

import './SpecialDiets.css'
import { checkPropTypes } from 'prop-types'

const SpecialDiets = (props) => (
  <fieldset className="specialDiets">
    <legend>Select a special diet</legend>
    <label>
      <input type="radio" name="specialDiets" value="vegetarian" id="specialDiets" onChange={props.handleChange} />
    Vegetarian</label>
    <label>
      <input type="radio" name="specialDiets" value="vegan" id="specialDiets" onChange={props.handleChange} />
    Vegan</label>
  </fieldset>
)

export default SpecialDiets