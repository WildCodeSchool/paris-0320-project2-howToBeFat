import React from 'react'
import axios from 'axios'
import DisplayRecipe from './DisplayRecipe'
import Waiting from './Waiting'

const ingredientsArray = ['beef','pork','salmon','shrimp','lamb','sheep','chicken','ham', 'pasta', 'tomato', 'spinach', 'zucchini', 'carrot', 'pea', 'bean', 'chocolate', 'vanilla', 'turkey', 'rabbit', 'truffle', 'eggplant',' endive', 'cheese', 'bacon', 'cherry', 'banana', 'apple', 'pear', 'orange', 'kiwi', 'flour', 'sugar', 'pepper', 'cucumber', 'milk', 'bread', 'butter', 'rum', 'peanut', 'pistachio', 'salad', 'wine', 'onion', 'garlic', 'coriander', 'parsley', 'thyme', 'potato', 'turnip', 'asparagus', 'cauliflower', 'broccoli', 'mushroom', 'rice', 'egg', 'fish','sausage', 'celery', 'thom']

class RecipeCard extends React.Component {

  state = {
    recipe: '',
    ingredients: [],
    bool:false
  }
  getRecipe(ingredient1, ingredient2, ingredient3, userCalories) {

    let selectedIngredients = `${ingredientsArray[Math.floor(Math.random() * ingredientsArray.length)]}`
    const allIngredient = ingredient1 && `${ingredient1},${ingredient2},${ingredient3}`
    const min = 0
    const max = min + 100
    const minCalories = userCalories ? parseInt(userCalories) : 5000
    const maxCalories = minCalories + 5000
    const customIngredient = allIngredient ? allIngredient : selectedIngredients
    console.log(selectedIngredients)
    let url = `https://api.edamam.com/search?q=${customIngredient}&from=${min}&to=${max}&calories=${minCalories}-${maxCalories}&app_id=812f083c&app_key=57cd06930f1a1d5818380b512897cc58`
    
    axios.get(url)
      .then((res) => {
        const randomNum = this.randomNumber(max)
        // base of the calls
        const res1 = res.data.hits
        //sort by calories desc
        const thisCalories = res1.map(x => x.recipe.calories).sort((a, b) => b - a)[randomNum]
        // Search for the recipe whom match with the max of calories
        const objectUri = res1.filter(x => x.recipe.calories === thisCalories)[0]
        // Define the state with the research recipe and the ingredients which go with
        this.setState({
          recipe: objectUri.recipe,
          ingredients: objectUri.recipe.ingredientLines,
          bool:true
        })
      })
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
        (<DisplayRecipe getOtherRecipe={this.getOtherRecipe} ingredientsList={this.state.ingredients} recipe={this.state.recipe} preparationTime={this.getPreparationTime(totalTime)} calories={calories} /> )
        :(<Waiting  /> )}        
      </div>
    );
  }
}

export default RecipeCard