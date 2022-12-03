import React, { Component } from 'react';
import Inputs from './components/Inputs';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="inputs">
          <Inputs />
        </div>
      </div>
    );
  }
}

export default App;
