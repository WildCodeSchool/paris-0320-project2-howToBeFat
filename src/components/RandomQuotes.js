import React from 'react'

const Quotes = [
     "Always have a whipped cream bomb at home",
     "If you are hungry, favor the cakes",
     "  Learn to become lazy",
     "Never lose sight of the remote control",
     "Always have something to snack on hand",
     "Avoid unnecessary trips",
     "Don't Forget to eat !",
     "Do things very slowly",
     "Inhale exhale eat repeat"
]

class RandomQuotes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            quote: ""
        }
    }
    
    randomNumber = () => Math.floor(Math.random() * Math.floor(Quotes.length))

    componentDidMount = () => {
        this.getRandomQuote(this.randomNumber())
    }
    
    getRandomQuote = (number) => {
        this.setState({quote: Quotes[number]})
    }

    render() {
        return (
            <div>
            <h2 className="quote">Quote of the day:
            <br/>{this.state.quote}</h2>
            </div>
        )
    }
}

export default RandomQuotes