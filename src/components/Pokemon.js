import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.scss';

class Pokemon extends React.Component {

  render() {
    return (
      <div className={`pokemon-card ${this.props.selected ? 'big' : ''}`} onClick={this.props.selectPokemon} >
        <img src={this.props.image} alt={this.props.name} className="pokemon__img" />
        <h2 className="pokemon-card__name">{this.props.name}</h2>
        <ul className="pokemon-card__types-list">
          {this.props.types.map((type, index) =>
            (<li className="pokemon__type" key={index} >{type}</li>)
          )}
        </ul>
      </div>
    )
  }
}

Pokemon.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Pokemon;