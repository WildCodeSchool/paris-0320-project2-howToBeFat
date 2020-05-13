import React from 'react'

import RandomQuotes from './RandomQuotes'
import RecipeCard from './RecipeCard'
import BeerCard from './BeerCard'
import './Accueil.css'

const Accueil = () => {
    return (
        <div>
            <RandomQuotes />
            <div className="accueil">
                <RecipeCard />
                <BeerCard />
            </div>
        </div>
    )
}

export default Accueil