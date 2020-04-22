import React from 'react'
import IngredientList from './IngredientList';
import './FullRecipeCard.css'


class FullRecipeCard extends React.Component {

    render() {
        const {recipe, calories, ingredients, preparationTime} = this.props.location.data
        return (
            <div className="fullCard">
                <h2 className="recipe-name">{recipe.label}</h2>
                <div className="photoFood"><img src={recipe.image} alt={recipe.label} /></div>
                <div><h4 className="calorie">Calories: <span>{calories}</span></h4></div>
                <div className="ingredients"><IngredientList list={ingredients} /></div>
                <button className="goRecipe"><a href={recipe.url} target="_blanck">Voir la recette</a></button>
            </div>
        )
    }
}

export default FullRecipeCard
