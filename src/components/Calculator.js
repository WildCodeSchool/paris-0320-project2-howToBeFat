import React from 'react'
import './Calculator.css'

class Calculator extends React.Component {
    state = {
        userWeight: null,
        weightToReach: null
    }


    handleChange = (event) => {
        this.setState({ userWeight: event.target.value })
    }


    getWeightToReach = (userWeight) => {
        if (userWeight < 0) {
            return this.setState({ weightToReach: 'Enter a positive number' })
        } else if (userWeight < 35 && userWeight > 0) {
            return this.setState({ weightToReach: ' Children are not allowed to play this game !' })
        }
        else {
            this.setState({ weightToReach: parseInt(this.state.userWeight) + parseInt(this.state.userWeight) * 0.2 + ' kg' })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label>Enter your Weight
                    <input
                            type='number'
                            className="userWeight"
                            value={this.state.userWeight}
                            onChange={this.handleChange}
                            placeholder="Enter your weight in kg">
                        </input>
                    </label>
                    <p>Poids actuel: {this.state.userWeight} kg</p>
                    <div>
                        <label>Motivation Bar</label>
                        <input 
                        className="motivationBar"
                        type="range"
                        id="motivationBar"
                        min="0"
                        step="50"
                        max="100"/>
                        {/* <datalist>
                            <option value='0' label='beginner'></option>
                        </datalist> */}
                    </div>
                    <input type="button" value='push' onClick={() => this.getWeightToReach(this.state.userWeight)}></input>
                    <p>Your result : {this.state.weightToReach}</p>
                </form>
            </div>
        )
    }
}

export default Calculator