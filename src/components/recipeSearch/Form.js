import React from 'react'

import FormIngredients from './FormIngredients'

const Form = (props) => (

  <div>
    <FormIngredients handleChange={props.handleChange} />
  </div>

)

export default Form