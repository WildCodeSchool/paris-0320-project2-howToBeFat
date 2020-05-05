import React from 'react'

import FormIngredients from './FormIngredients'
import FormExcludes from './FormExcludes'
import SpecialDiets from './SpecialDiets'

const Form = (props) => (

  <div>
    <FormIngredients handleChange={props.handleChange} />
    <FormExcludes handleChange={props.handleChange} />
    <SpecialDiets handleChange={props.handleChange} />
  </div>

)

export default Form