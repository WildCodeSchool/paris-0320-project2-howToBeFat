
import axios from 'axios'
import React from 'react'

import DisplayRecipe from './DisplayRecipe'

class RandomRecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: '',
      ingredients: [],
      UserChoice: false
    }
    this.getRecipe = this.getRecipe.bind(this)
  }

  getRecipe() {
    let url = "https://api.edamam.com/search?q=chocolate&from=1&to=50&calories=5000&app_id=812f083c&app_key=57cd06930f1a1d5818380b512897cc58"
    axios.get(url)
      .then((res) => {
        // base of the calls
        const res1 = res.data.hits
        //sort by calories desc
        const maxCalories = res1.map(x => x.recipe.calories).sort((a, b) => b - a)[0]
        // Search for the recipe whom match with the max of calories
        const objectUri = res1.filter(x => x.recipe.calories === maxCalories)[0]
        // Define the state with the research recipe and the ingredients which go with
        this.setState({
          recipe: objectUri.recipe,
          ingredients: objectUri.recipe.ingredientLines
        })
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
    const totalTime = this.state.recipe.totalTime
    const calories = Math.round(this.state.recipe.calories)

    return (
      <div className="RandomRecipeCard" >
        {// Await for the futur user choice possibilities // =>
        }{this.state.UserChoice}

        <DisplayRecipe ingredientsList={this.state.ingredients} recipe={this.state.recipe} preparationTime={this.getPreparationTime(totalTime)} calories={calories} />
      </div>
    );
  }
}

export default RandomRecipeCard