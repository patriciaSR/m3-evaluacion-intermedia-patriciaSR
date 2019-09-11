import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import './PokemonList.scss';

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
              selected={this.props.selected}
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

