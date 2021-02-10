import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    pokeName: "",
    pokeHp: 0,
    front: "",
    back: ""
  }

  handleSubmit(e) {
    e.preventDefault()

    let newPokemon = {
      name: this.state.pokeName,
      hp: this.state.pokeHp,
      sprites: {
        front: this.state.front,
        back: this.state.back
      }
    }

    let reqPack = {}
        reqPack.headers = {"Content-Type" : "application/json"}
        reqPack.method = "POST"
        reqPack.body = JSON.stringify(newPokemon)
      
    fetch("http://localhost:3000/pokemon", reqPack)
      .then(r => r.json())
      .then(newPokemon => {
        this.props.addNewPokemon(newPokemon)
      })
      e.target.reset()
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input onChange={(e) => this.setState({pokeName: e.target.value})} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={(e) => this.setState({pokeHp: e.target.value})} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={(e) => this.setState({front: e.target.value})} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={(e) => this.setState({back: e.target.value})} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
