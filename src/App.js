import React, { Component } from 'react';
import GeckoMeter from './components/GeckoMeter';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { min: 0, max: 0, value: 0 };
  }

  componentDidMount() {
    fetch('https://widgister.herokuapp.com/challenge/frontend')
    .then(response => response.json())
    .then(json => {
      const { min, max, value } = json;
      this.setState({ min, max, value });
    })
    .catch(error => {
      throw Error(error);
    })
  }

  render() {
    return (
      <div className="App">
        <GeckoMeter
          min={this.state.min}
          max={this.state.max}
          value={this.state.value}/>
      </div>
    );
  }
}

export default App;

// todo: move data fetching to a Container Component
// todo: unit testing for toCurrency
