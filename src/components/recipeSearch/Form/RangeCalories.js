import React from 'react'
import PropTypes from 'prop-types'

import './RangeForm.css'

const RangeCalories = (props) => {

  const { userCalories, handleChange } = props

  return (
    <article className="flexRange">
      <fieldset className="resultFormRange">
        <legend>Number of minimum calories</legend>
        <p>{userCalories}</p>
        <div className="rangeForm">
          <label htmlFor="calories"></label>
          <input onChange={(e) => handleChange(e)} type="range" id="calories" name="calories" min="0" max="5000" step="250" className="formSlider" />
        </div>
      </fieldset>
    </article>
  )
}

RangeCalories.propTypes = {
  handleChange: PropTypes.func.isRequired,
  userCalories: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ])
}

export default RangeCalories
