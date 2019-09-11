import React from 'react';
import './App.scss';
import {pokemons} from './pokemons';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemons: pokemons
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="pagge__title">Mi Lista de Pokemons</h1>
        <ul className="pokemon__list">
          {this.state.pokemons.map(pokemon => 
            <li className="list__pokemon" key={pokemon.id}>
              <div className="pokemon-card">
                <div className="pokemon-card__img">
                  <img src={pokemon.url} alt={pokemon.name} className="pokemon__img"/>
                  <h2 className="pokemon-card__name">{pokemon.name}</h2>
                  <ul className="pokemon-card__types-list">
                  {pokemon.types.map((type, index) => 
                    (<li className="pokemon__type" key={index} >{type}</li>)
                  )}
                  </ul>
                </div>
              </div>
            </li>
            
            )}
        </ul>
      </div>
    );
  }
}

export default App;
