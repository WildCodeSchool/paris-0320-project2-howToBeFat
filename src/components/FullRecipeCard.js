import React from 'react'
import IngredientList from './IngredientList';
import './FullRecipeCard.css'


class FullRecipeCard extends React.Component {

    render() {
        //console.log('This', this.props.location.data)
        const {recipe, calories, ingredients, preparationTime} = this.props.location.data
        return (
            <div className="containRecipe">
                <div className="fullCard">
                    <h2 className="recipe-name">{recipe.label}</h2>
                    <div className="photoFood"><img src={recipe.image} alt={recipe.label} /></div>
                    <div><p className="calorie">Calories: <span className="kcal">{calories}</span></p></div>
                    <div className="ingredients"><IngredientList list={ingredients} /></div>
                    <button className="button-recipe"><a href={recipe.url} target="blank">Voir la recette</a></button>
                </div>
            </div>
        )
    }
}

export default FullRecipeCard
