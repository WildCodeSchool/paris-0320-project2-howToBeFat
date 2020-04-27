import React from 'react'
import './recipeSearch.css'

class RecipeSearch extends React.Component{

    render(){
        return(
            <div className='recipeSearch'>
                <h2>Recipe by ingredient</h2>
                <h3>What do you have in your fridge?</h3>
                <div className='ingredientSearch'>
                    <label for='firstIngredient'></label>
                    <input id='firstIngredient' type='text' name='firstIngredient'required pattern="[A-Za-z]+" valeur='First ingredient'></input>
                </div>
            </div>
        )
    }
}

export default RecipeSearch