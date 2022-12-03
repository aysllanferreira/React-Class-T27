import React, { Component } from 'react';
import './App.scss';
import Inputs from './components/Inputs';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="inputs">
          <div>
            <Inputs />
          </div>
          <div>
            <Card />
          </div>
        </div>
        <div className="Cards">
          <p> </p>
        </div>
      </div>
    );
  }
}

export default App;
