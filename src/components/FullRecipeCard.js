import React from 'react'
import IngredientList from './IngredientList';
import './FullRecipeCard.css'
import { Link } from 'react-router-dom'


class FullRecipeCard extends React.Component {

    render() {
        const { recipe, calories, ingredients } = this.props.location.data
        return (
            <div className="containRecipe">
                <div className="fullCard">
                    <h2 className="recipe-name">{recipe.label}</h2>
                    <div className="photo">
                        <div className="photoFood">
                            <img src={recipe.image} alt={recipe.label} />
                            <p className="calorie">Calories: <span className="kcal">{calories}</span></p>
                        </div>
                        <div className="ingredients"><IngredientList list={ingredients} /></div>
                    </div>
                    <div>
                        <button className="button-recipe"><a href={recipe.url} target="blank">Voir la recette</a></button>
                        <button className="button-recipe retour"><Link to="/">Retour</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FullRecipeCard
