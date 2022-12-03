import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

class Card extends Component {
  render() {
    const {
      nome, alcunha, imagem, descricao,
    } = this.props;
    return (
      <>
        <h1>{nome}</h1>
        <h2>{alcunha}</h2>
        <img src={imagem} alt={`Imagem: ${nome}`} />
        <p>{descricao}</p>

      </>
    );
  }
}

Card.propTypes = {
  nome: PropTypes.string.isRequired,
  alcunha: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default Card;
