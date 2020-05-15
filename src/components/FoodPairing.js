import React, { useState } from 'react'
import Proptypes from 'prop-types'
import './SearchBeer.css'

const FoodPairing = (props) => {

  const [card, setCard] = useState(false)

  const handleClick = () => {
    setCard(!card)
  }

  const { item, index } = props
  return (
    <div id={index}
      className={card ? "verso" : 'recto'}
      key={index}
    >
      {!card ? (
        <div className="beer-abv" id={index} onClick={(e) => handleClick(e)}>
          <img className="photo_beer" id={index} src={item.image_url} alt={item.name} />
          <h3 className="name-abv">{item.abv} % vol</h3>
          <h2 className={card ? "beer-title" : "beer-title2"} > {item.name}</h2>
        </div>
      ) : (
          <div className="center-food" id={index} onClick={(e) => handleClick(e)}>
            <h3>Food pairing:</h3>
            <p className="food_pairing">{item.food_pairing}</p>
            <h3>{item.abv}% vol</h3>
            <h2 className="beer-title">{item.name} </h2>
          </div>
        )
      }
    </div>
  )
}

FoodPairing.prototype = {
  index: Proptypes.number.isRequired,
  item: Proptypes.object.isRequired
}

export default FoodPairing