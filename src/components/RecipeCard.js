import React from 'react'
import axios from 'axios'
import RecipeSearch from './RecipeSearch'
import DisplayRecipe from './DisplayRecipe'

class RecipeCard extends React.Component {

  state = {
    recipe: '',
    ingredients: []
    // ingredient1: "",
    // ingredient2: "",
    // ingredient3: "",
    // errorIngredient: "",
    // userCalories: 0
  }

  getRecipe(ingredient1, ingredient2, ingredient3, userCalories) {

    let selectedIngredients = "cheese"
    const allIngredient = ingredient1 && `${ingredient1},${ingredient2},${ingredient3}`
    const min = 0
    const max = min + 100
    const minCalories = userCalories ? parseInt(userCalories) : 5000
    const maxCalories = minCalories + 5000
    const customIngredient = allIngredient ? allIngredient : selectedIngredients
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
          // ingredient1: '',
          // ingredient2: '',
          // ingredient3: '',
          // errorIngredient: ""
        })
      })
    // .catch(error => this.setState({ errorIngredient: "Erreur dans la saie des ingrédients" }))

  }

  randomNumber = (max) => Math.floor(Math.random() * Math.floor(max))

  getPreparationTime(time) {
    const hours = time > 60 ? Math.floor(time / 60) : 0
    const unity = hours > 1 ? "hours" : "hour"
    const minutes = time > 60 ? time % 60 : time
    return time > 60 ? `${hours} ${unity} and ${minutes} minutes` : `${minutes} minutes`
  }

  // submitForm = (e) => {
  //   e.preventDefault()
  //   this.getRecipe(this.state.ingredient1, this.state.ingredient2, this.state.ingredient3, this.state.userCalories)
  //   console.log(this.state.ingredient1, "ingredient1")
  //   console.log(this.state.ingredient2, "ingredient2")
  //   console.log(this.state.ingredient3, "ingredient3")
  // }
  getOtherRecipe = () => {
    this.getRecipe()
  }

  // handleChange = (e) => {
  //   let userIngredient1 = e.target.id === "firstIngredient" ? e.target.value : this.state.ingredient1
  //   let userIngredient2 = e.target.id === "secondIngredient" ? e.target.value : this.state.ingredient2
  //   let userIngredient3 = e.target.id === "thirdIngredient" ? e.target.value : this.state.ingredient3
  //   let actualUserCalories = e.target.id === "actualUserCalories" ? e.target.value : this.state.userCalories


  //   this.setState({
  //     ingredient1: userIngredient1,
  //     ingredient2: userIngredient2,
  //     ingredient3: userIngredient3,
  //     userCalories: actualUserCalories,
  //   })
  //   // console.log(this.state.ingredient3)
  // }

  componentDidMount() {
    this.getRecipe()
  }

  render() {
    const totalTime = this.state.recipe.totalTime
    const calories = Math.round(this.state.recipe.calories)

    return (
      <div className="RecipeCard" >
        <DisplayRecipe getOtherRecipe={this.getOtherRecipe} ingredientsList={this.state.ingredients} recipe={this.state.recipe} preparationTime={this.getPreparationTime(totalTime)} calories={calories} />
      </div>
    );
  }
}

export default RecipeCard