import React from 'react';
import './App.scss';
import { pokemons } from './pokemons';
import PokemonList from './components/PokemonList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemons
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="page__title">Mi Lista de Pokemon</h1>
        <PokemonList
          pokemons={this.state.pokemons}
        />
      </div>
    );
  }
}

export default App;
