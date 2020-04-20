import React from 'react'
import axios from 'axios'
import './BeerCard.css'

class BeerCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        this.getBeer()
    }

    getBeer = () => {
        axios.get('https://api.punkapi.com/v2/beers/random')
            .then(res => this.setState({ beers: res.data[0] })

            )

    }

    render() {
        const { name, image_url, abv, food_pairing } = this.state.beers
        return (
            <div className="cardBeer">
                <h2> Beer of day :</h2>
                <img src={image_url} alt={name}/>
                <p>Name :  {name}</p>
                <p>Alcool by volume : {abv} %</p>
                <p>Food pairing : {food_pairing}</p>

            </div>
        )
    }
}

export default BeerCard