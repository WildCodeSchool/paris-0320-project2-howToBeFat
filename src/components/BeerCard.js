import React from 'react'
import axios from 'axios'
import './BeerCard.css'
import Waiting from './Waiting'

// const [recipes, setRecipes] = useState([])
class BeerCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: [],
            affiche :null,
            isLoading: false
        }
    }
    
    handleClick = () => {
        this.setState(prevState =>({
            affiche: ! prevState.affiche
        }))
    }
    
    componentDidMount() {
        this.getBeer()
    }
    
    getBeer = () => {
        axios.get('https://api.punkapi.com/v2/beers/random')
            .then(res => {
                if (!res.data[0].image_url || res.data[0].image_url.includes('keg')) {
                    this.getBeer()
                } else {
                    this.setState({ beers: (res.data[0]), isLoading: true })
                }
            })
    }

    render() {
        const { name, image_url, abv, food_pairing } = this.state.beers
        return (
            <>
                {this.state.isLoading ?
                    ((<div className="cardBeer">
                        <h2> BEER OF THE DAY</h2>
                        <img
                            src={image_url} alt={name} />
                        <p className="beerName"> {name} </p>
                        <p className="beerName">{abv} % vol</p>
                        <p className="titlePairing">Food pairing :</p>
                        <span className="pairingBeer ">{food_pairing}</span>
                    </div>)) :
                    (<Waiting />)
                }
            </>
        )
    }
}

export default BeerCard