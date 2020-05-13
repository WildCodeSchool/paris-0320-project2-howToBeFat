import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './FormIngredients.css'

const FormExcludes = (props) => {

  const handleChange = props.handleChange

  const [ingredientShow, setIngredientShow] =
    useState({
      ingredient1: false,
      ingredient2: false,
      ingredient3: false
    })
  const [addButton, setAddButton] = useState(true)

  const handleShowInput = (e) => {
    if (ingredientShow.ingredient2) {
      setIngredientShow({ ...ingredientShow, ingredient3: true })
      setAddButton(false)
    }
    else if (ingredientShow.ingredient1) {
      setIngredientShow({ ...ingredientShow, ingredient2: true })
    }
    else {
      setIngredientShow({ ...ingredientShow, ingredient1: true })
    }
  }

  const handleHideInput = (e) => {
    switch (e.target.id) {
      case "IngredientHideInput1":
        setIngredientShow({ ...ingredientShow, ingredient1: false })
        setAddButton(true)
        break
      case "IngredientHideInput2":
        setIngredientShow({ ...ingredientShow, ingredient2: false })
        break
      case "IngredientHideInput3":
        setIngredientShow({ ...ingredientShow, ingredient3: false })
        setAddButton(true)
        break
      default:
    }
  }

  return (
    <article className="flexIngredients">
      <fieldset className="ingredientFilter">
        <legend> Exclude some ingredients </legend>
        {
          ingredientShow.ingredient1 &&
          <>
            <label htmlFor='excludedIngredient1' id="labelIngredient1">Ingredient 1 <br />
              {!ingredientShow.ingredient2 &&
                <input type="button" className="hideButton" onClick={handleHideInput} id="IngredientHideInput1" name="IngredientHideInput1" value="-" />
              }
              <input onChange={(e) => handleChange(e)} id='excludedIngredient1' name='excludedIngredient1' type='text' pattern="[A-Za-z]+" className="inputTexte" />
            </label>
          </>
        }
        {
          ingredientShow.ingredient2 &&
          <label htmlFor='excludedIngredient2' id="labelIngredient2">Ingredient 2 <br />
            {!ingredientShow.ingredient3 &&
              <input type="button" className="hideButton" onClick={handleHideInput} id="IngredientHideInput2" value="-" />
            }
            <input onChange={(e) => handleChange(e)} id='excludedIngredient2' name='excludedIngredient2' type='text' pattern="[A-Za-z]+" className="inputTexte" />
          </label>
        }
        {
          ingredientShow.ingredient3 &&
          <label htmlFor='excludedIngredient3' id="labelIngredient3">Ingredient 3 <br />
            <input type="button" className="hideButton" onClick={handleHideInput} id="IngredientHideInput3" value="-" />
            <input onChange={(e) => handleChange(e)} id='excludedIngredient3' name="excludedIngredient3" type='text' pattern="[A-Za-z]+" className="inputTexte" />
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

FormExcludes.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default FormExcludes