import React, { Component } from 'react';
import logo from './logo.svg';
import GeckoMeter from './components/GeckoMeter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeckoMeter min={100} max={200} value={50}/>
      </div>
    );
  }
}

export default App;
