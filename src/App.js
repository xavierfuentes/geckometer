import React, { Component } from 'react';
import GeckoMeter from './components/GeckoMeter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { min: 0, max: 0, value: 0, goal: 0 };
    // this.handleInputChange = this.handleInputChange;
  }

  componentDidMount() {
    fetch('https://widgister.herokuapp.com/challenge/frontend')
    .then(response => response.json())
    .then(json => {
      const { min, max, value, unit } = json;
      this.setState({ min, max, value, unit });
    })
    .catch(error => {
      throw Error(error);
    })
  }

  handleInputChange(e) {
    this.setState({goal: +e.target.value});
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleInputChange.bind(this)}/>
        <GeckoMeter
          min={this.state.min}
          max={this.state.max}
          value={this.state.value}
          goal={this.state.goal}
          unit={this.state.unit}/>
      </div>
    );
  }
}

export default App;
