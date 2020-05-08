import React from 'react'
import PropTypes from 'prop-types'

import FormIngredients from './FormIngredients'
import FormExcludes from './FormExcludes'
import SpecialDiets from './SpecialDiets'
import Intolerables from './Intolerables'
import RangeCalories from './RangeCalories'
import RangePrepTime from './RangePrepTime'

import './Form.css'

const Form = (props) => (

  <div>
    <FormIngredients handleChange={props.handleChange} />
    <FormExcludes handleChange={props.handleChange} />
    <SpecialDiets handleChange={props.handleChange} />
    <Intolerables handleChange={props.handleChange} />
    <RangeCalories handleChange={props.handleChange} userCalories={props.userCalories} />
    <RangePrepTime handleChange={props.handleChange} userPrepTime={props.userPrepTime} />
  </div>

)

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorRequest: PropTypes.bool.isRequired,
  userCalories: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ]),
  userPrepTime: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ])
}

export default Form