import './App.css';
import Pokedex from './Pokedex'
import {pokemon} from './pokemon'

function App() {
  return (
    <Pokedex pokemon={pokemon}/>
  )
}

export default App;