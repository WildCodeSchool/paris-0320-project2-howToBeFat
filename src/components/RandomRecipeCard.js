import React from 'react'
import axios from 'axios'

import './RandomRecipeCard.css'

class RandomRecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomRecipe:"",
            recipe: []
        }
        this.getRecipe = this.getRecipe.bind(this)
    }

    getRecipe() {
        const url = "https://api.edamam.com/search?q=potato&from=0&to=1&app_id=812f083c&app_key=57cd06930f1a1d5818380b512897cc58"
        axios.get(url)
            .then(response=> response.data)
            .then(data => {
                this.setState({randomRecipe: data.hits[0].recipe})
                this.setState({recipe: data.hits[0].recipe.ingredientLines})
            })
    }

    componentDidMount() {
        this.getRecipe()
    }
    render() {
        console.log(this.state)
        return (
            <div className = "RandomRecipeCard" >
                <h1> Random recipe: </h1>
                <article>
                    <p>{this.state.randomRecipe.label}</p>
                    <img src={this.state.randomRecipe.image} alt={this.state.randomRecipe.image}></img>
                    <ul>
                        {this.state.recipe.map(ingredient => (<li key={ingredient}>{ingredient}</li>))}
                    </ul>
                    
                </article>
            </div>

        );
    }
}
export default RandomRecipeCard


