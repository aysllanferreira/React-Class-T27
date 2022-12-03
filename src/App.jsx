import React, { Component } from 'react';
import Inputs from './components/Inputs';
import Card from './components/Card';
import './App.scss';

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

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  saveCardLocalStorage = () => {
    const { savedCards } = this.state;
    localStorage.setItem('savedCards', JSON.stringify(savedCards));
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
    }, this.saveCardLocalStorage);
  };

  deleteBtn = ({ target }) => {
    const { savedCards } = this.state;
    const getParentName = target.parentNode.firstChild.innerText;

    this.setState({
      savedCards: savedCards.filter((card) => card.nome !== getParentName),
    }, this.saveCardLocalStorage);
  };

  render() {
    const {
      nome, alcunha, imagem, descricao, savedCards,
    } = this.state;
    return (
      <div className="App">
        <div className="inputs">
          <div>
            <Inputs
              nome={nome}
              alcunha={alcunha}
              imagem={imagem}
              descricao={descricao}
              onChange={this.handleChange}
              handleClick={this.handleClick}
            />
          </div>
          <div>

            <Card
              nome={nome}
              alcunha={alcunha}
              imagem={imagem}
              descricao={descricao}
            />
          </div>
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
              <button type="button" onClick={this.deleteBtn}>Deletar Card</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
