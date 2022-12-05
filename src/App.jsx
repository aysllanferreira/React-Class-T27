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
    const pegarLS = JSON.parse(localStorage.getItem('cardSalvo'));

    if (pegarLS !== null) {
      this.setState({
        savedCards: pegarLS,
      });
    }
  }

  saveLocalStorage = () => {
    const { savedCards } = this.state;
    localStorage.setItem('cardSalvo', JSON.stringify(savedCards));
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

  removeItem = ({ target }) => {
    const getName = target.id;
    const { savedCards } = this.state;

    const verifyDeleted = savedCards.filter((cards) => cards.nome !== getName);
    this.setState({
      savedCards: verifyDeleted,
    }, this.saveLocalStorage);
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
          {savedCards.length > 0 && savedCards.map((card) => (
            <div key={card.nome}>
              <Card
                nome={card.nome}
                alcunha={card.alcunha}
                imagem={card.imagem}
                descricao={card.descricao}
              />
              <button onClick={this.removeItem} id={card.nome} type="button">Remover</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
