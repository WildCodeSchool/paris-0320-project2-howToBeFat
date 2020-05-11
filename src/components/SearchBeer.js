import React from 'react'
import axios from 'axios'

import './SearchBeer.css'

class SearchBeer extends React.Component {
	state = {
		post: [],
		allPosts: [],
		rangePost: []
	};

	componentDidMount () {
        this.getBeers()
    }

    getBeers = () => {
        axios.get('https://api.punkapi.com/v2/beers')
        .then(res => this.setState({post: res.data, allPosts: res.data, rangePost: res.data}))
    }

	onKeyUp = e => {
		// filter post list by title using onKeyUp function
		const post = this.state.allPosts.filter(item =>
			item.name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		this.setState({ post });
	};

	filterRange = (e) => {
		const post = this.state.rangePost.filter(item => item.abv >= 0 && e.target.value <= 80)
		this.setState({post})
	}

	render() {
		return (
			<div className="container">
                <div className="search-outer">
		    		<form role="search" method="get" id="searchform" className="searchform" action="">
		    			<input type="search" onChange={this.onKeyUp} name="s" id="s" placeholder="Search" />
						<input type="range" min="0" max="80" onChange={this.filterRange} />
		    		</form>
		    	</div>
				<div className="data-list">
					{this.state.post.map((item, index) => (
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