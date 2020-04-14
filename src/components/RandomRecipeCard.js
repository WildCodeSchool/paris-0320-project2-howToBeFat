import React from 'react'
import axios from 'axios'

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

    componentDidMount() {
        this.getRecipe()
    }

    render() {
        return (
            <div className="RandomRecipeCard" >
                <h1> Random recipe: </h1>
                <article>
                    <p>{this.state.recipe.label}</p>
                    <img src={this.state.recipe.image} alt=""></img>
                    <ul>
                        {this.state.ingredients.map(ingredient => (
                            <li key={ingredient}>{ingredient}</li>))}
                    </ul>
                </article>
            </div>
        );
    }
}


export default RandomRecipeCard