import React from 'react'
import axios from 'axios'

import FoodPairing from './FoodPairing'

import './SearchBeer.css'

class SearchBeer extends React.Component {
	state = {
		post: [],
		abvLevel: "4",
		verso: true
	};

	componentDidMount() {
		this.getBeers()
	}

	getBeers = () => {
		axios.get('https://api.punkapi.com/v2/beers')
			.then(res =>
				this.setState({ post: res.data })
			)
	}

	filterRange = (e) => {
		this.setState({ abvLevel: parseInt(e.target.value) })
	}

	getBeerAbv = () => {
		this.state.post.filter(item => item.abv > this.state.abvLevel)
	}

	render() {
		return (
			<>
				<div className="beer-container">
					<div className="beer-range">
						<label>How strong do you like your beer ?</label>
						<p>more than {this.state.abvLevel} % vol</p>
						<input type="range"
							className="abv-range"
							min="4"
							max="15"
							step="1"
							value={this.state.abvLevel}
							onChange={(e) => this.filterRange(e)} />
					</div>
				</div>
				<div className="containers-beersList">
					{this.getBeerAbv()}
					{this.state.post
						.filter(beer => beer.abv > this.state.abvLevel)
						.map((item, index) => (
							<FoodPairing index={index} item={item} key={index} />
						))
					}
				</div>
			</>
		);
	}
}

export default SearchBeer