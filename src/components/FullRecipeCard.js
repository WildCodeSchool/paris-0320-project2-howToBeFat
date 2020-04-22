import React from 'react'
import IngredientList from './IngredientList';
import './FullRecipeCard.css'


class FullRecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const recipe = this.props.location.data
        console.log(recipe)
        return (
            <div className="fullCard">
                <h2 className="recipe-name">{recipe.label}</h2> 
                {/* <div className="photoFood"><img src={recipe.recipe.image} alt={recipe.label} /></div> */}
                <div><h4 className="calorie">Calories: <span>{recipe.calories}</span></h4></div>
                {/* <div className="ingredients"><IngredientList list={recipe.ingredientsList} /></div> */}
                <button className="goRecipe"><a href={recipe.url} target="_blanck">Voir la recette</a></button> 

            </div>

        )
    
    }
}

export default FullRecipeCard
