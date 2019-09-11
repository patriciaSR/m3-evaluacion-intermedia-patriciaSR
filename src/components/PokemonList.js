import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokemonList extends React.Component {
  render() {
    return (
      <ul className="pokemon__list">
        {this.props.pokemons.map(pokemon =>
          <li className="list__pokemon" key={pokemon.id}>
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
  pokemons: PropTypes.arrayOf(PropTypes.object)
}

export default PokemonList;

