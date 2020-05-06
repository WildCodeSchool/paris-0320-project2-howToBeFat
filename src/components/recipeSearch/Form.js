import React from 'react'

import PropTypes from 'prop-types'

import FormIngredients from './FormIngredients'
import FormExcludes from './FormExcludes'
import SpecialDiets from './SpecialDiets'
import Intolerables from './Intolerables'

const Form = (props) => (
  <div>
    <FormIngredients handleChange={props.handleChange} />
    <FormExcludes handleChange={props.handleChange} />
    <SpecialDiets handleChange={props.handleChange} />
    <Intolerables handleChange={props.handleChange} />
  </div>

)

Form.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default Form