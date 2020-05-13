import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Health.css'

const SpecialDiets = (props) => {

  const [checked, setChecked] = useState(true)

  const { handleChange } = props

  const handleClick = (e) => {
    const id = e.target.id
    id === "all" ? setChecked(true) : setChecked(false)
  }

  return (
    <article className="flexSpecialDiets">
      <fieldset className="dietContainer">
        <legend>Select a special diet</legend>
        <div className="specialDiets">
          <div>
            <input type="radio" name="specialDiets" id="all" value="" onChange={(e) => handleChange(e)} onClick={(e) => handleClick(e)} checked={checked && true} />
            <label htmlFor="all">All</label>
          </div>
          <div>
            <input type="radio" name="specialDiets" id="vegetarian" value="vegetarian" onChange={(e) => handleChange(e)} onClick={(e) => handleClick(e)} />
            <label htmlFor="vegetarian">Vegetarian</label>
          </div>
          <div>
            <input type="radio" name="specialDiets" id="vegan" value="vegan" onChange={(e) => handleChange(e)} onClick={(e) => handleClick(e)} />
            <label htmlFor="vegan">Vegan</label>
          </div>
        </div>
      </fieldset>
    </article>
  )
}

SpecialDiets.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default SpecialDiets