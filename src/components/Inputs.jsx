import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Inputs.scss';

class Inputs extends Component {
  render() {
    const {
      nome, alcunha, imagem, descricao, handleChange, handleClick,
    } = this.props;
    return (
      <div className="Inputs">
        <input
          type="text"
          placeholder="Nome"
          onChange={handleChange}
          value={nome}
          name="nome"
        />
        <input
          type="text"
          placeholder="Alcunha"
          onChange={handleChange}
          value={alcunha}
          name="alcunha"
        />
        <input
          type="text"
          placeholder="Imagem"
          onChange={handleChange}
          value={imagem}
          name="imagem"
        />
        <textarea
          name="descricao"
          id=""
          cols="30"
          rows="10"
          placeholder="descricao"
          onChange={handleChange}
          value={descricao}
        />
        <button
          type="button"
          onClick={handleClick}
        >
          Criar Card

        </button>
      </div>
    );
  }
}

Inputs.propTypes = {
  nome: PropTypes.string.isRequired,
  alcunha: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Inputs;
