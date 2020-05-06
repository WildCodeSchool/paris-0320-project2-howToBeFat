import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './SpecialDiets.css'

const SpecialDiets = (props) => {

  const [checked, setChecked] = useState(true)

  const handleClick = (e) => {
    const id = e.target.id
    id === "all" ? setChecked(true) : setChecked(false)
  }

  return (
    <fieldset>
      <legend>Select a special diet</legend>
      <div className="specialDiets">
        <label htmlFor="all">
          <input type="radio" name="specialDiets" id="all" value="" onChange={props.handleChange} onClick={handleClick} checked={checked && true} />
      All</label>
        <label htmlFor="vegetarian">
          <input type="radio" name="specialDiets" id="vegetarian" value="vegetarian" onChange={props.handleChange} onClick={handleClick} />
      Vegetarian</label>
        <label htmlFor="vegan">
          <input type="radio" name="specialDiets" id="vegan" value="vegan" onChange={props.handleChange} onClick={handleClick} />
      Vegan</label>
      </div>
    </fieldset>
  )
}

SpecialDiets.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default SpecialDiets