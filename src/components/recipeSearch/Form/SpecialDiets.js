import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Health.css'

const SpecialDiets = (props) => {

  const [checked, setChecked] = useState(true)

  const handleClick = (e) => {
    const id = e.target.id
    id === "all" ? setChecked(true) : setChecked(false)
  }

  return (
    <fieldset className="dietContainer">
      <legend>Select a special diet</legend>
      <div className="specialDiets">
        <div>
          <input type="radio" name="specialDiets" id="all" value="" onChange={props.handleChange} onClick={handleClick} checked={checked && true} />
          <label htmlFor="all">All</label>
        </div>
        <div>
          <input type="radio" name="specialDiets" id="vegetarian" value="vegetarian" onChange={props.handleChange} onClick={handleClick} />
          <label htmlFor="vegetarian">Vegetarian</label>
        </div>
        <div>
          <input type="radio" name="specialDiets" id="vegan" value="vegan" onChange={props.handleChange} onClick={handleClick} />
          <label htmlFor="vegan">Vegan</label>
        </div>
      </div>
    </fieldset>
  )
}

SpecialDiets.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default SpecialDiets