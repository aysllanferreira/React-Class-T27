import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Card.scss';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h1>nome</h1>
        <h2>alcunha</h2>
        <img
          src="https://sm.ign.com/ign_br/screenshot/default/blob_pgw1.jpg"
          alt="Imagem: $NOME"
        />
        <p>descricao</p>
      </div>
    );
  }
}

export default Card;
