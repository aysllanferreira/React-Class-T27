import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

class Card extends Component {
  render() {
    const {
      nome, alcunha, imagem, descricao,
    } = this.props;
    return (
      <div className="card">
        <h1>{nome}</h1>
        <h2>{alcunha}</h2>
        <img
          src={imagem}
          alt={`Imagem: ${nome}`}
        />
        <p>{descricao}</p>
      </div>
    );
  }
}

Card.propTypes = {
  nome: PropTypes.string,
  alcunha: PropTypes.string,
  imagem: PropTypes.string,
  descricao: PropTypes.string,
}.isRequired;

export default Card;
