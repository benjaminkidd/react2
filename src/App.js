import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
