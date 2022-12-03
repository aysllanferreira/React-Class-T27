import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Inputs.scss';

class Inputs extends Component {
  render() {
    return (
      <div className="Inputs">
        <input
          type="text"
          placeholder="Nome"
          onChange="nada"
          value="nome"
          name="nome"
        />
        <input
          type="text"
          placeholder="Alcunha"
          onChange="nada"
          value="alcunha"
          name="alcunha"
        />
        <input
          type="text"
          placeholder="Imagem"
          onChange="nada"
          value="imagem"
          name="imagem"
        />
        <textarea
          name="descricao"
          id=""
          cols="30"
          rows="10"
          placeholder="descricao"
          onChange="nada"
          value="descricao"
        />
        <button
          type="button"
          onClick="nada"
        >
          Criar Card

        </button>
      </div>
    );
  }
}

export default Inputs;
