import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './FormIngredients.css'

const FormIngredients = (props) => {

  const handleChange = props.handleChange

  const [ingredientShow, setIngredientShow] =
    useState({
      ingredient1: true,
      ingredient2: false,
      ingredient3: false
    })
  const [addButton, setAddButton] = useState(true)

  const handleShowInput = (e) => {
    if (ingredientShow.ingredient2) {
      setIngredientShow({ ...ingredientShow, ingredient3: true })
      setAddButton(false)
    } else {
      setIngredientShow({ ...ingredientShow, ingredient2: true })
    }
  }

  const handleHideInput = (e) => {
    if (e.target.id === "IngredientHideInput2") {
      setIngredientShow({ ...ingredientShow, ingredient2: false })
    } else {
      setIngredientShow({ ...ingredientShow, ingredient3: false })
      setAddButton(true)
    }
  }

  return (
    <article className="flexIngredients">
      <fieldset className="ingredientFilter">
        <legend>Search by ingredients</legend>
        {
          ingredientShow.ingredient1 &&
          <>
            <label htmlFor='ingredient1' id="labelIngredient1">* Ingredient 1 <br />
              <input onChange={(e) => handleChange(e)} id='ingredient1' name='ingredient1' type='text' pattern="[A-Za-z]+" className="inputTexte" aria-required="true" title="This element is required" />
            </label>
          </>
        }
        {
          ingredientShow.ingredient2 &&
          <label htmlFor='ingredient2' id="labelIngredient2">Ingredient 2 <br />
            {!ingredientShow.ingredient3 &&
              <input type="button" className="hideButton" onClick={handleHideInput} id="IngredientHideInput2" value="-" />
            }
            <input onChange={(e) => handleChange(e)} id='ingredient2' name="ingredient2" type='text' pattern="[A-Za-z]+" className="inputTexte" />
          </label>
        }
        {
          ingredientShow.ingredient3 &&
          <label htmlFor='ingredient3' id="labelIngredient3">Ingredient 3 <br />
            <input type="button" className="hideButton" onClick={handleHideInput} id="IngredientHideInput3" value="-" />
            <input onChange={(e) => handleChange(e)} id='ingredient3' name="ingredient3" type='text' pattern="[A-Za-z]+" className="inputTexte" />
          </label>
        }
        {
          addButton &&
          <input type="button" onClick={handleShowInput} value="Add an ingredient..." className="button-recipe" />
        }
      </fieldset>
    </article>
  )
}

FormIngredients.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default FormIngredients