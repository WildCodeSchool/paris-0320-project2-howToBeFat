import React, { useState } from 'react'
import axios from 'axios'

const intolerables = ["gluten-free", "wheat-free", "egg-free", "peanut-free", "tree-nut-free",
  "soy-free", "fish-free", "shellfish-free", "pork-free", "sesame-free", "alcohol-free", "sulphite-free", "dairy-free"]
const specialDiet = ["vegetarian", "vegan",]

const RecipeSearch = () => {

  const [numOfResult, setNumOfResult] = useState(0)
  const [userIngredient1, setUserIngredient1] = useState('')
  const [userIngredient2, setUserIngredient2] = useState('')
  const [userIngredient3, setUserIngredient3] = useState('')
  const [userCalories, setUserCalories] = useState(0)
  const [userDiets, setUserDiets] = useState('')
  const [userIntolerables, setUserIntolerables] = useState([])
  const [errorRequest, setErrorRequest] = useState(false)
  const [recipe, SetRecipes] = useState([])

  // Generate a random number
  const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max))
  //Define the range of search for the api request
  const defineRangeNumber = (nbResults) => {
    console.log(nbResults, "firstresult")
    const rangewidth = 10
    const numberToRandom = getRandomNumber(Math.ceil(nbResults / rangewidth))
    console.log(numberToRandom, "numberRandom")
    const max = (numberToRandom * rangewidth) + rangewidth > nbResults ? nbResults - 1 : (numberToRandom * rangewidth) + rangewidth
    console.log(max, "max")
    const min = max - rangewidth < 0 ? 0 : max - rangewidth
    return `&from=${min}&to=${max}`
  }

  const defineRequestUrl = (nbResults) => {
    nbResults = nbResults > 100 ? 100 : nbResults
    const calories = userCalories && `&calories=${userCalories}`
    const ingredients = userIngredient1 && `${userIngredient1},${userIngredient2},${userIngredient3}`
    const diet = userDiets && `&health=${userDiets}`
    userIntolerables && defineIntolerables()
    console.log(diet, "diet")
    numOfResult > 100 && setNumOfResult(100)
    const rangeRequest = numOfResult ? defineRangeNumber(numOfResult) : nbResults ? defineRangeNumber(nbResults) : ''
    // url which will be send to the API request
    return `https://api.edamam.com/search?q=${ingredients}${calories}${rangeRequest}${diet}&app_id=812f083c&app_key=57cd06930f1a1d5818380b512897cc58`
  }
  // Define the format for the list of intolerables in view of the api call
  const defineIntolerables = () => {
    let tempString = ""
    userIntolerables.map(intolerable => tempString += `&health=${intolerable}`)
    console.log(tempString, "intolBeforeCall")
  }
  // We verify if the number of results are define
  const callApi = (url) => numOfResult === 0 ? getNumRecipes(url) : getApiDatas(url)
  // If the number of result is unknown, we go fetch it
  const getNumRecipes = (url) => {
    axios.get(url)
      .then((res) => {
        console.log(res.data.count, "first")
        setNumOfResult(0)
        setNumOfResult(res.data.count)
        getApiDatas(defineRequestUrl(res.data.count))
      })
      .catch(e => setErrorRequest("Error, please check your ingredients"))

  }
  // Else we fetch the datas
  const getApiDatas = (url) => {
    axios.get(url)
      .then(res => {
        console.log(res.data.hits, "hits")
        SetRecipes(res.data.hits)
      })
      .catch(e => setErrorRequest("Error, please check your ingredients"))
  }

  const submitForm = (e) => {
    e.preventDefault()
    callApi(defineRequestUrl())
  }

  const handleChange = (e) => {
    const value = (e.target.value).toLowerCase()
    switch (e.target.id) {
      case "userIngredient1":
        setUserIngredient1(value)
        break
      case "userIngredient2":
        setUserIngredient2(value)
        break
      case "userIngredient3":
        setUserIngredient3(value)
        break
      case "userCalories":
        setUserCalories(e.target.value)
        break
      case "specialDiets":
        e.target.value !== "Specify a special diet" ? setUserDiets(e.target.value) : setUserDiets('')
        break
      case "intolerables":
        const selectedValues = [...e.target.options]
          .filter((x) => x.selected)
          .map((x) => x.value);
        console.log(selectedValues, "intolerables")
        setUserIntolerables(selectedValues)
        break
      default:
    }
  }

  return (
    <div className='recipeSearch'>
      <h2>Recipe by ingredient</h2>
      <h3>What do you have in your fridge?</h3>
      <div className='ingredientSearch'>
        <form onSubmit={submitForm} class="form-example">
          <label htmlFor='userIngredient1'></label>
          <input onChange={handleChange} id='userIngredient1' type='text' required pattern="[A-Za-z]+"></input>

          <label htmlFor='userIngredient2'></label>
          <input onChange={handleChange} id='userIngredient2' type='text' />

          <label htmlFor='userIngredient3'></label>
          <input onChange={handleChange} id='userIngredient3' type='text' />
          <div>{errorRequest}</div>
          <div>
            <select id="specialDiets" name="specialDiets" onChange={handleChange}>
              <option selected>Specify a special diet</option>
              {specialDiet.map(diet => <option key={diet} value={diet}>{diet}</option>)}
            </select><br />
            <select id="intolerables" name="intolerables" multiple size="3" onChange={handleChange}>
              <option selected>If intolerable</option>
              {intolerables.map(intolerable => <option key={intolerable} value={intolerable}>{intolerable}</option>)}
            </select>
          </div>
          <label htmlFor="userCalories">Number of minimum calories:</label>
          <input onChange={handleChange} type="range" id="userCalories" name="userCalories" min="0" max="10000" step="1" />{userCalories}
          <p>{numOfResult} recettes trouvées !</p>
          <div><input className="submit" type="submit" value="Get recipe"></input></div>
        </form>
        {recipe[0] &&
          <>
            <fieldset>
              <legend>Other recipes</legend>
              <ul>{recipe && recipe.map((e, id) => <li key={id}>{e.recipe.label}</li>)}</ul>
            </fieldset>
            <h3>{recipe[0].recipe.label}</h3>
            <p><img src={recipe[0].recipe.image} alt={recipe[0].recipe.label} /></p>
          </>
        }

      </div>
    </div>
  )
}

export default RecipeSearch