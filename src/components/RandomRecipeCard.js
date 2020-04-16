
import React from 'react'
import axios from 'axios'
import IngredientList from './IngredientList';

import './RandomRecipeCard.css'

class RandomRecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: '',
            ingredients: [],
        }
        this.getRecipe = this.getRecipe.bind(this)
    }

    getRecipe() {
        const url = "https://api.edamam.com/search?q=bacon,cheese,potato&from=0&to=1&app_id=812f083c&app_key=57cd06930f1a1d5818380b512897cc58"
        axios.get(url)
            .then((res) => {
                this.setState({ recipe: res.data.hits[0].recipe })
                this.setState({ ingredients: res.data.hits[0].recipe.ingredientLines })
            })
    }

    getPreparationTime(time) {
        const hours = time > 60 ? Math.floor(time / 60) : 0
        const unity = hours > 1 ? "hours" : "hour"
        const minutes = time > 60 ? time % 60 : time
        return time > 60 ? `${hours} ${unity} and ${minutes} minutes` : `${minutes} minutes`
    }

    componentDidMount() {
        this.getRecipe()
    }
    render() {
        const calories = Math.round(this.state.recipe.calories)

        return (
            <div className="RandomRecipeCard" >
                <h1> Random recipe: </h1>
                <article>
                    <p>{this.state.recipe.label}</p>
                    <img src={this.state.recipe.image} alt=""></img>
                    <IngredientList list={this.state.ingredients} />
                    <p>Number of calories: {calories}</p>
                    <p><a href={this.state.recipe.url}>Here is the recipe !</a></p>
                    <p>Preparation time: {this.getPreparationTime(this.state.recipe.totalTime)}</p>
                </article>
            </div>
        );
    }
}

export default RandomRecipeCard