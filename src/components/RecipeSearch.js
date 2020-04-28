import React from 'react'
import './RecipeSearch.css'

class RecipeSearch extends React.Component {

  render() {
    const { submitForm, handleChange, errorIngredient, actualUserCalories } = { ...this.props }
    return (
      <div className='recipeSearch'>
        <h2>Recipe by ingredient</h2>
        <h3>What do you have in your fridge?</h3>
        <div className='ingredientSearch'>
          <form onSubmit={submitForm} class="form-example">
            <label htmlFor='firstIngredient'></label>
            <input onChange={handleChange} id='firstIngredient' type='text' placeholder='first ingredient' required pattern="[A-Za-z]+"></input>

            <label htmlFor='secondIngredient'></label>
            <input onChange={handleChange} id='secondIngredient' type='text' placeholder='second ingredient' />

            <label htmlFor='thirdIngredient'></label>
            <input onChange={handleChange} id='thirdIngredient' type='text' placeholder='third ingredient' />
            <div>{errorIngredient}</div>
            <label htmlFor="actualUserCalories">Number of minimum calories:</label>
            <input onChange={handleChange} type="range" id="actualUserCalories" name="actualUserCalories" min="0" max="10000" step="1" />{actualUserCalories}
            <div><input className="submit" type="submit" value="Get recipe"></input></div>
          </form>
        </div>
      </div>
    )
  }
}

export default RecipeSearch