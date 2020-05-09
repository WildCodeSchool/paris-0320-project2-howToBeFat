import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import FormIngredients from './FormIngredients'
import FormExcludes from './FormExcludes'
import SpecialDiets from './SpecialDiets'
import Intolerables from './Intolerables'
import RangeCalories from './RangeCalories'
import RangePrepTime from './RangePrepTime'

import './Form.css'

const Form = (props) => {

  const { submitForm, handleChange, userCalories, userPrepTime, errorRequest } = { ...props }

  return (
    <form onSubmit={submitForm} className="FormContainer">
      <div className="flexFormContainer">
        <div className="flexFormingredients">
          <FormIngredients handleChange={handleChange} />
          <FormExcludes handleChange={handleChange} />
        </div>
        <div className="flexFormDiets">
          <SpecialDiets handleChange={handleChange} />
          <Intolerables handleChange={handleChange} />
        </div>
        <div>
          <div className="flexFormRange">
            <RangeCalories handleChange={handleChange} userCalories={userCalories} />
            <RangePrepTime handleChange={handleChange} userPrepTime={userPrepTime} />
          </div>
        </div>
      </div>
      {
        errorRequest ?
          <>
            <div className="errorDisplay">
              {errorRequest}
            </div>
          </>
          :
          <div className="validForm">
            <input type="submit" value="Get recipe" className="button-recipe"></input>
          </div>
      }
    </form>
  )
}

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