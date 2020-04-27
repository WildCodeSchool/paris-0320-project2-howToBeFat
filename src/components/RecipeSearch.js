import React from 'react'
import './RecipeSearch.css'

class RecipeSearch extends React.Component {



    render() {
        return (
            <div className='recipeSearch'>
                <h2>Recipe by ingredient</h2>
                <h3>What do you have in your fridge?</h3>
                <div className='ingredientSearch'>
                    <form onSubmit={this.props.submitForm} class="form-example">
                        <label htmlFor='firstIngredient'></label>
                        <input onChange={this.props.handleChange} id='firstIngredient' type='text' placeholder='first ingredient' required pattern="[A-Za-z]+"></input>

                        <label htmlFor='secondIngredient'></label>
                        <input onChange={this.props.handleChange} id='secondIngredient' type='text' placeholder='second ingredient'></input>

                        <label htmlFor='thirdIngredient'></label>
                        <input onChange={this.props.handleChange} id='thirdIngredient' type='text' placeholder='third ingredient'></input>

                        <div><input className="submit" type="submit" value="Get recipe"></input></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default RecipeSearch