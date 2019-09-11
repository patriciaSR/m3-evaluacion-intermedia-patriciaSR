import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.scss';

class Pokemon extends React.Component {
  render() {
    return (
      <div className="pokemon-card">
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
  image: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
}


export default Pokemon;