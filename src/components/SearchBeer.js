import React from 'react'
import axios from 'axios'

import './SearchBeer.css'

class SearchBeer extends React.Component {
	state = {
		post: [],
		allPosts: [],
		abv: [],
		abvLevel : "4"
	};

	componentDidMount () {
        this.getBeers()
    }

    getBeers = () => {
        axios.get('https://api.punkapi.com/v2/beers')
		.then(res => 
			console.log('res', res.data) || 
			this.setState(
			{post: res.data}
			)
		)
    }

	// onKeyUp = (e) => {
	// 	// filter post list by title using onKeyUp function
	// 	const post = this.state.allPosts.filter(item =>
	// 		item.name.toLowerCase().includes(e.target.value.toLowerCase())
	// 	);
	// 	this.setState({ post });
	// };

	filterRange = (e) => {
		// console.log('abvLevel',this.state.abvLevel) ||
		this.setState({abvLevel: parseInt(e.target.value)}
		// 	, 
		// ()=>this.getBeerAbv(this.state.abvLevel)
		)
	}

	getBeerAbv = () => {
		const temp = this.state.post.filter(item => item.abv > this.state.abvLevel)
	}

	render() {
		// console.log(this.state.abvLevel)
		return (
			<div className="beer-container">
                <div className="beer-range">
		    		{/* <form role="search" method="get" id="searchform" className="searchform" action=""> */}
		    			{/* <input type="search" onChange={this.onKeyUp} name="s" id="s" placeholder="Search" /> */}
						<label>How strong do you like your beer ?</label>
						<p>more than {this.state.abvLevel} % vol</p>
						<input type="range"
								className="abv-range" 
								min="4" 
								max="15" 
								step = "1"
								value= {this.state.abvLevel}
								onChange={(e)=> this.filterRange(e)} />
		    		{/* </form> */}
		    	</div>
				<div className="beer-abv">
					{this.getBeerAbv()}
					{this.state.post
					.filter(beer => beer.abv > this.state.abvLevel)
					.map((item, index) => (
						<div className="block" key= {index}>
							<img src={item.image_url} alt={item.name} />
							<div className="name-abv">
								<h3>{item.name}</h3>
								<h3>{item.abv} % vol</h3>
								{/* <h4 className="beer-description">{item.description} %</h4> */}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default SearchBeer