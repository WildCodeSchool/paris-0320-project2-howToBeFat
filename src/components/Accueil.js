import React from 'react'
import RecipeCard from './RecipeCard'
import BeerCard from './BeerCard'

const Acceuil = () => {
    return (
        <div className="accueil">
            <RecipeCard />
            <BeerCard />
            {/* ajouter card citation */}
        </div>
    )
}

export default Acceuil