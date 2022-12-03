import React, { Component } from 'react';
import './Inputs.scss';

export default class Inputs extends Component {
  render() {
    const {
      nome, alcunha, imagem, descricao, onChange, handleClick,
    } = this.props;
    return (
      <div className="Inputs">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Alcunha" />
        <input type="text" placeholder="Imagem" />
        <textarea name="" id="" cols="30" rows="10" placeholder="descricao" />
      </div>
    );
  }
}
