import React from 'react'
import './Calculator.css'

class Calculator extends React.Component {
    state = {
        userWeight: null,
        weightToReach: null,
        motivation: "0"
    }


    handleChange = (event) => {
        this.setState({ userWeight: event.target.value })
    }

    getWeightToReach = (userWeight) => {
        const motiv = this.state.motivation
        if (userWeight < 0) {
            return this.setState({ weightToReach: 'Enter a positive number' })
        } else if (userWeight < 35 && userWeight > 0) {
            return this.setState({ weightToReach: ' Children are not allowed to play this game !' })
        }
        else {
            if (motiv === "0") {
                this.setState({ weightToReach: parseInt(this.state.userWeight) + parseInt(this.state.userWeight) * 0.1 + ' kg' })
            } else if (motiv === "50") {
                this.setState({ weightToReach: parseInt(this.state.userWeight) + parseInt(this.state.userWeight) * 0.2 + ' kg' })
            } else {
                this.setState({ weightToReach: parseInt(this.state.userWeight) + parseInt(this.state.userWeight) * 0.3 + ' kg' })
            }
        }
    }

    getMotivation = (event) => {
        this.setState({ motivation: event.target.value })
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
                    {/* <div className= 'container-motivation'>
                        <label>Motivation Bar</label>
                        <select id="motivationBar" onChange={this.getMotivation}>
                            <option value="">--Please choose an option--</option>
                            <option value='easy'>Easy</option>
                            <option value='medium'>Medium</option>
                            <option value='hardcore'>Hardcore</option>
                        </select>
                    </div> */}
                    <div>
                        <input
                            className="motivationBar"
                            onChange={this.getMotivation}
                            id="motivationBar"
                            type="range"
                            min="0"
                            step="50"
                            max="100"
                            // value=""
                        />
                    </div>
                    <input type="button" value='push' onClick={() => this.getWeightToReach(this.state.userWeight)}></input>
                    <p>Your result : {this.state.weightToReach}</p>
                </form>
            </div>
        )
    }
}

export default Calculator
