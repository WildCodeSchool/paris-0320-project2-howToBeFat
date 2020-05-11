import React from 'react'

import './SpecialDiets.css'
import { checkPropTypes } from 'prop-types'

const SpecialDiets = (props) => (
  <fieldset >
    <legend>Select a special diet</legend>
    <div className="specialDiets">
    <label>
      <input type="radio" name="specialDiets" value="vegetarian" id="specialDiets" onChange={props.handleChange} />
    Vegetarian</label>
    <label>
      <input type="radio" name="specialDiets" value="vegan" id="specialDiets" onChange={props.handleChange} />
    Vegan</label>
    </div>
  </fieldset>
)

export default SpecialDiets