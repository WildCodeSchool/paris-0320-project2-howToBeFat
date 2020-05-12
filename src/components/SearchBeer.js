import React from 'react'
import axios from 'axios'

import './SearchBeer.css'

class SearchBeer extends React.Component {
	state = {
		post: [],
		allPosts: [],
		abv: [],
		abvLevel : []
	};

	componentDidMount () {
        this.getBeers()
    }

    getBeers = () => {
        axios.get('https://api.punkapi.com/v2/beers')
		.then(res => 
			// console.log('res', res.data) || 
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

	getBeerAbv = (abvLevel) => {
		const temp = this.state.post.filter(item => item.abv > this.state.abvLevel)
	}

	render() {
		// console.log(this.state.abvLevel)
		return (
			<div className="container">
                <div className="search-outer">
		    		{/* <form role="search" method="get" id="searchform" className="searchform" action=""> */}
		    			{/* <input type="search" onChange={this.onKeyUp} name="s" id="s" placeholder="Search" /> */}
						<input type="range" 
								min="4" 
								max="15" 
								step = "1"
								value= {this.state.abvLevel}
								onChange={(e)=> this.filterRange(e)} />
		    		{/* </form> */}
					<p>more than {this.state.abvLevel} %</p>
		    	</div>
				<div className="data-list">
					{this.getBeerAbv()}
					{this.state.post
					.filter(beer => beer.abv > this.state.abvLevel)
					.map((item, index) => (
						<div className="block-" key= {index}>
							<img src={item.image_url} alt={item.name} />
							<div className="h3">
								<h3>{item.name}</h3>
								<h3>{item.abv} %</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default SearchBeer