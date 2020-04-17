import React from 'react'
import IngredientList from './IngredientList';
import './FullRecipeCard.css'
import AllergenList from './AllergenList'

class FullRecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="card">
                <h2 className="recipe-name">{this.props.recipe.label}</h2>
                <div className="image"><img src={this.props.recipe.image} alt={this.props.recipe.label}></img></div>
                <div><h4 clasName="calorie">Calories: <span>{this.props.calories}</span></h4></div>
                <div className="ingredients"><IngredientList list={this.props.ingredientsList} /></div>
                <button className="recipe"><a href={this.props.recipe.url} target="_blanck">Voir la recette</a></button>
                
            </div>
            
        )
    }
}

export default FullRecipeCard
