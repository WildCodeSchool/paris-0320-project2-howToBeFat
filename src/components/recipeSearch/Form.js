import React from 'react'

import FormIngredients from './FormIngredients'
import FormExcludes from './FormExcludes'

const Form = (props) => (

  <div>
    <FormIngredients handleChange={props.handleChange} />
    <FormExcludes handleChange={props.handleChange} />
  </div>

)

export default Form