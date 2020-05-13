import React from 'react'
import axios from 'axios'

import './SearchBeer.css'

class SearchBeer extends React.Component {
	state = {
		post: [],
		allPosts: [],
		abv: [],
		abvLevel: "4"
	};

	componentDidMount() {
		this.getBeers()
	}

	getBeers = () => {
		axios.get('https://api.punkapi.com/v2/beers')
			.then(res =>
				this.setState(
					{ post: res.data }
				)
			)
	}

	filterRange = (e) => {
		this.setState({ abvLevel: parseInt(e.target.value) })
	}

	getBeerAbv = () => {
		const temp = this.state.post.filter(item => item.abv > this.state.abvLevel)
	}

	render() {
		return (
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
				<div className="beer-abv">
					{this.getBeerAbv()}
					{this.state.post
						.filter(beer => beer.abv > this.state.abvLevel)
						.map((item, index) => (
							<div className="block" key={index}>
								<img className="photo_beer" src={item.image_url} alt={item.name} />
								<div className="name-abv">
									<h3>{item.name}</h3>
									<h3>{item.abv} % vol</h3>
									<div className="center-food">
										<p className="food_pairing">{item.food_pairing}</p>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		);
	}
}

export default SearchBeer