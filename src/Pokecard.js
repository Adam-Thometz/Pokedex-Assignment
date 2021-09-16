import React from 'react'
import './Pokecard.css'

const Pokecard = ({name, type, id, exp}) => {
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-title">{name}</h4>
      <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
      <ul className="Pokecard-info">
        <li>Type: {type}</li>
        <li>EXP: {exp}</li>
      </ul>
    </div>
  )
}

export default Pokecard