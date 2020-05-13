import React from 'react'
import PropTypes from 'prop-types'

const RangePrepTime = (props) => {

  const { userPrepTime, handleChange } = props

  const getPreparationTime = (time) => {
    const hours = time > 60 ? Math.floor(time / 60) : 0
    const unity = hours > 1 ? "hours" : "hour"
    const minutes = time > 60 ? time % 60 : time
    return time > 60 ? `${hours} ${unity} and ${minutes} minutes` : `${minutes} minutes`
  }

  return (
    <article className="flexRange">
      <fieldset className="resultFormRange">
        <legend>Maximum preparation time</legend>
        <p>{getPreparationTime(userPrepTime)}</p>
        <div className="rangeForm">
          <label htmlFor="time"></label>
          <input onChange={(e) => handleChange(e)} type="range" id="time" name="time" min="0" max="240" step="5" className="formSlider" value={userPrepTime} />
        </div>
      </fieldset>
    </article>
  )
}

RangePrepTime.prototype = {
  handleChange: PropTypes.func.isRequired,
  userPrepTime: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ])
}
export default RangePrepTime