import React from 'react'
import axios from 'axios'
import './BeerCard.css'

// const [recipes, setRecipes] = useState([])
class BeerCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: [],
            affiche :null,
            
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
                .then(res => this.setState({ beers: res.data[0] })
        
            )
        }
        render() {
        const { name, image_url, abv, food_pairing} = this.state.beers
        const {affiche} = this.state
        return (
            <div className="cardBeer">
                <h2> BEER OF THE DAY</h2>

                {/* <button className="button-SearchBeer" value="More beers"><Link to={{pathname: "/SearchBeer", 
                    data:{beers: this.state.beers} } }>More beers</Link>
                </button> */}

                    <img src={image_url} alt={name} />
                    <p className="beerName"> {name} </p>
                    <p className="beerName">{abv} % vol</p>
                    {
                        // food_pairing ? <span className="pairingBeer "></span> : null
                        affiche ? <div className="pairingBeer "> <p className="titlePairing">Food pairing :</p> {food_pairing}</div> : null
                    }
                    {/* <button onClick={() => this.setState({affiche: !affiche})}>Show more Food pairing</button> */}
                    <button onClick={this.handleClick}> {this.state.affiche ? <span className="span1">&#10514;</span> : <span className="span2">&#10515;</span>} </button>
                
                
               
            </div>
        )
    }
}

export default BeerCard