import React from 'react'
import PropTypes from 'prop-types'

import './Intolerables.css'

const Intolerables = (props) => {

  return (
    <fieldset>
      <legend>Specials intolerable</legend>
      <div className="intolerables">
        <label htmlFor="peanut-free">
          <input type="checkbox" id="peanut-free" name="intolerables" value="peanut-free" onChange={props.handleChange} />
          Peanut-free
        </label>
        <label htmlFor="alcohol-free">
          <input type="checkbox" id="alcohol-free" name="intolerables" value="alcohol-free" onChange={props.handleChange} />
          alcohol-free
        </label>
        <label htmlFor="tree-nut-free">
          <input type="checkbox" id="tree-nut-free" name="intolerables" value="tree-nut-free" onChange={props.handleChange} />
          tree-nut-free
        </label>
      </div>
    </fieldset>
  )
}

Intolerables.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default Intolerables