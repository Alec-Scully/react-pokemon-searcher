import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const BASE_URL = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: ''
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(r => r.json())
      .then(pokeData => this.setState({pokemon: pokeData}))
  }

  updateSearch = (search) => {
    this.setState({search: search})
  }

  addNewPokemon = (newPokemon) => {
    this.setState({pokemon: [...this.state.pokemon, newPokemon]})
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search updateSearch={this.updateSearch}/>
        <br />
        <PokemonCollection pokemon={this.state.pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.search))}/>
      </Container>
    )
  }
}

export default PokemonPage
