import React from 'react'

const AllergenList = ({list}) => (
    <ul>
        {list.cautions.map(allergen => (
            <li key={allergen}><hr></hr>{allergen}</li>
        ))}
    </ul>
)

export default AllergenList