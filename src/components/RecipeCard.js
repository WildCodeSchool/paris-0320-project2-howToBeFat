import React from 'react'
import axios from 'axios'
import DisplayRecipe from './DisplayRecipe'
import Waiting from './Waiting'

const ingredientsArray = ['beef', 'pork', 'salmon', 'shrimp', 'lamb', 'sheep', 'chicken', 'ham', 'pasta', 'tomato', 'zucchini', 'carrot', 'pea', 'bean', 'chocolate', 'vanilla', 'turkey', 'rabbit', 'eggplant', 'avocado', 'cheese', 'bacon', 'cherry', 'banana', 'apple', 'pear', 'orange', 'kiwi', 'flour', 'sugar', 'pepper', 'cucumber', 'milk', 'bread', 'butter', 'rum', 'peanut', 'pistachio', 'wine', 'onion', 'garlic', 'coriander', 'parsley', 'thyme', 'potato', 'turnip', 'asparagus', 'rice', 'egg', 'fish', 'sausage', 'celery']

class RecipeCard extends React.Component {

  state = {
    recipe: '',
    ingredients: []
  }

  getRecipe() {
    let selectedIngredients = `${ingredientsArray[Math.floor(Math.random() * ingredientsArray.length)]}`
    const min = 0
    const max = min + 100
    const minCalories = 100000
    const maxCalories = minCalories + 100000
    let url = `https://api.edamam.com/search?q=${selectedIngredients}&from=${min}&to=${max}&calories=${minCalories}-${maxCalories}&app_id=812f083c&app_key=57cd06930f1a1d5818380b512897cc58`

    axios.get(url)
      .then((res) => {
        // base of the calls
        const res1 = res.data.hits
        const randomNum = this.randomNumber(res1.length)
        //sort by calories desc
        const thisCalories = res1.map(x => x.recipe.calories)
        const sort = thisCalories.sort((a, b) => b - a)[randomNum]
        // Search for the recipe whom match with the max of calories
        const objectUri = res1.filter(x => x.recipe.calories === sort)[0]
        // Define the state with the research recipe and the ingredients which go with

        res1.length === 0 ? this.getRecipe() :
          this.setState({
            recipe: objectUri.recipe,
            ingredients: objectUri.recipe.ingredientLines
          })
      })
      .catch((e) => console.log(e))
  }

  randomNumber = (max) => Math.floor(Math.random() * Math.floor(max))

  getPreparationTime(time) {
    const hours = time > 60 ? Math.floor(time / 60) : 0
    const unity = hours > 1 ? "hours" : "hour"
    const minutes = time > 60 ? time % 60 : time
    return time > 60 ? `${hours} ${unity} and ${minutes} minutes` : `${minutes} minutes`
  }

  getOtherRecipe = () => {
    this.getRecipe()
  }

  componentDidMount() {
    this.getRecipe()
  }

  render() {
    const totalTime = this.state.recipe.totalTime
    const calories = Math.round(this.state.recipe.calories)
    return (
      <div className="RecipeCard" >
        {this.state.recipe ?
          (<DisplayRecipe getOtherRecipe={this.getOtherRecipe} ingredientsList={this.state.ingredients} recipe={this.state.recipe} preparationTime={this.getPreparationTime(totalTime)} calories={calories} />)
          : (<Waiting />)}
      </div>
    );
  }
}

export default RecipeCard