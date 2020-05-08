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

  <form onSubmit={props.submitForm} className="FormContainer">
    <FormIngredients handleChange={props.handleChange} />
    <FormExcludes handleChange={props.handleChange} />
    <SpecialDiets handleChange={props.handleChange} />
    <Intolerables handleChange={props.handleChange} />
    <RangeCalories handleChange={props.handleChange} userCalories={props.userCalories} />
    <RangePrepTime handleChange={props.handleChange} userPrepTime={props.userPrepTime} />
    {
      props.errorRequest &&
      <div style={{ padding: "1em", color: "red", "fontWeight": "bold" }}>
        {props.errorRequest}
      </div>
    }
    <div><input type="submit" value="Get recipe" className="button-recipe"></input></div>
  </form>

)

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
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