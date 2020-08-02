import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Person age="24" name="Bill"/>
          <Person age="24" name="Ted"/>
          <Person age="24" name="Neo">hobbies: guitar</Person>
        </div>
    );
  }
}

export default App;
