import React from 'react'
import PropTypes from 'prop-types'

import './Health.css'

const Intolerables = (props) => {

  return (
    <article className="flexSpecialDiets">
      <fieldset className="intolerablesContainer">
        <legend>Specials intolerable</legend>
        <div className="specialDiets">
          <div>
            <input type="checkbox" id="peanut-free" name="intolerables" value="peanut-free" onChange={props.handleChange} />
            <label htmlFor="peanut-free">Peanut-free</label>
          </div>
          <div>
            <input type="checkbox" id="alcohol-free" name="intolerables" value="alcohol-free" onChange={props.handleChange} />
            <label htmlFor="alcohol-free">alcohol-free</label>
          </div>
          <div>
            <input type="checkbox" id="tree-nut-free" name="intolerables" value="tree-nut-free" onChange={props.handleChange} />
            <label htmlFor="tree-nut-free">tree-nut-free</label>
          </div>
        </div>
      </fieldset>
    </article>
  )
}

Intolerables.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default Intolerables