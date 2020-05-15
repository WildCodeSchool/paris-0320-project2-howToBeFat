import React from 'react'
import PropTypes from 'prop-types'

import FormExcludes from './FormExcludes'
import FormIngredients from './FormIngredients'
import Intolerables from './Intolerables'
import RangeCalories from './RangeCalories'
import RangePrepTime from './RangePrepTime'
import SpecialDiets from './SpecialDiets'
import Waiting from '../../Waiting'

import './Form.css'

const Form = (props) => {

  const { submitForm, handleChange, userCalories, userPrepTime, errorRequest, numOfResult } = { ...props }

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
      <div className="ErrorValid">
        {
          errorRequest ?
            <>
              <div className="errorDisplay">
                {errorRequest}
              </div>
            </>
            :
            !numOfResult ?
              <div className="validForm">
                <input type="submit" value="Get recipe" className="button-recipe"></input>
              </div>
              : <Waiting />
        }
      </div>
    </form>
  )
}

Form.propTypes = {
  numOfResult: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  errorRequest: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.bool.isRequired
  ]),
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