import React, { Component } from 'react';
import './App.scss';
import Card from './components/Card';
import Inputs from './components/Inputs';

class App extends Component {
  state = {
    nome: '',
    alcunha: '',
    imagem: '',
    descricao: '',
    savedCards: [],
  };

  componentDidMount() {
    const savedCards = JSON.parse(localStorage.getItem('savedCards'));
    if (savedCards !== null) {
      this.setState({ savedCards });
    }
  }

  saveLocalStorage = () => {
    const { savedCards } = this.state;
    localStorage.setItem('savedCards', JSON.stringify(savedCards));
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const {
      nome, alcunha, imagem, descricao, savedCards,
    } = this.state;

    this.setState({
      savedCards: [
        ...savedCards,
        {
          nome,
          alcunha,
          imagem,
          descricao,
        },
      ],
      nome: '',
      alcunha: '',
      imagem: '',
      descricao: '',
    }, this.saveLocalStorage);
  };

  removeCard = ({ target }) => {
    const { id } = target;
    const { savedCards } = this.state;
    const filteredCards = savedCards.filter((card) => card.nome !== id);
    this.setState({ savedCards: filteredCards }, this.saveLocalStorage);
  };

  render() {
    const {
      nome, alcunha, imagem, descricao, savedCards,
    } = this.state;
    return (
      <div className="App">
        <div className="inputs">
          <Inputs
            nome={nome}
            alcunha={alcunha}
            imagem={imagem}
            descricao={descricao}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
          <Card
            nome={nome}
            alcunha={alcunha}
            imagem={imagem}
            descricao={descricao}
          />
        </div>
        <div className="Cards">
          {savedCards.map((card) => (
            <div key={card.nome}>
              <Card
                nome={card.nome}
                alcunha={card.alcunha}
                imagem={card.imagem}
                descricao={card.descricao}
              />
              <button id={card.nome} onClick={this.removeCard} type="button">Remover</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
