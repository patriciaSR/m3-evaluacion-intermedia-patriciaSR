import React from 'react';
import './App.scss';
import { pokemons } from './pokemons';
import PokemonList from './components/PokemonList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemons,
      favList: []
    };

    this.favPokemon = this.favPokemon.bind(this);
  }

  favPokemon(pokemon) {
    const isFavourite = this.state.favList.includes(pokemon);
  
    if (isFavourite){
      const pokemonIndex = this.state.favList.findIndex(fav => fav.id === pokemon.id);
      const favList = [...this.state.favList];
      favList.splice(pokemonIndex, 1);

      this.setState({ favList });
    } else {
      const favList = [...this.state.favList, pokemon];

      this.setState({ favList });
    }
  }

render() {
  return (
    <div className="app">
      <h1 className="page__title">Mi Lista de Pokemon</h1>
      <PokemonList
        pokemons={this.state.pokemons}
        favPokemon={this.favPokemon}
        favList={this.state.favList}
      />
    </div>
  );
}
}

export default App;
