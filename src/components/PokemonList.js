import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import './PokemonList.scss';

class PokemonList extends React.Component {
  render() {

    return (
      <ul className="pokemon__list">
        {this.props.pokemons.map(pokemon =>
          <li className={`list__pokemon ${this.props.favList.includes(pokemon) ? 'fav' : ''}`} id={pokemon.id} key={pokemon.id} onClick={() => this.props.favPokemon(pokemon)}>
            <Pokemon
              name={pokemon.name}
              image={pokemon.url}
              types={pokemon.types}
            />
          </li>

        )}
      </ul>
    )
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
  favPokemon: PropTypes.func,
  favList: PropTypes.arrayOf(PropTypes.object)
}

export default PokemonList;

