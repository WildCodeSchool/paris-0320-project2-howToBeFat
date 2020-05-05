import React, { useState } from 'react'

import './FormIngredients.css'

const FormIngredients = (props) => {

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
      console.log(ingredientShow, "cas 1")
    }
    else if (ingredientShow.ingredient1) {
      setIngredientShow({ ...ingredientShow, ingredient2: true })
      console.log(ingredientShow, "cas 2")
    }
    else {
      setIngredientShow({ ...ingredientShow, ingredient1: true })
      console.log(ingredientShow, "cas 3")
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
    <>
      <fieldset className="ingredientSearch">
        <legend>Search by ingredients</legend>
        {
          ingredientShow.ingredient1 &&
          <>
            <label htmlFor='ingredient1' id="labelIngredient1">Ingredient 1 <br />
              {!ingredientShow.ingredient2 &&
                <input type="button" className="hideButton" onClick={handleHideInput} id="IngredientHideInput1" value="-" required />
              }
              <input onChange={handleChange} id='ingredient1' type='text' pattern="[A-Za-z]+" />
            </label>
          </>
        }
        {
          ingredientShow.ingredient2 &&
          <label htmlFor='ingredient2' id="labelIngredient2">Ingredient 2 <br />
            {!ingredientShow.ingredient3 &&
              <input type="button" className="hideButton" onClick={handleHideInput} id="IngredientHideInput2" value="-" />
            }
            <input onChange={handleChange} id='ingredient2' type='text' pattern="[A-Za-z]+" />
          </label>
        }
        {
          ingredientShow.ingredient3 &&
          <label htmlFor='ingredient3' id="labelIngredient3">Ingredient 3 <br />
            <input type="button" className="hideButton" onClick={handleHideInput} id="IngredientHideInput3" value="-" />
            <input onChange={handleChange} id='ingredient3' type='text' pattern="[A-Za-z]+" />
          </label>
        }
        {
          addButton &&
          <input type="button" onClick={handleShowInput} value="Add an ingredient..." className="button-recipe" />
        }
      </fieldset>
    </>
  )
}

export default FormIngredients