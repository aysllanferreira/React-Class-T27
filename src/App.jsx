import React, { Component } from 'react';
import './App.scss';
import Card from './components/Card';
import Inputs from './components/Inputs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="inputs">
          <Inputs />
          <Card />
        </div>
        <div className="Cards" />
      </div>
    );
  }
}

export default App;
