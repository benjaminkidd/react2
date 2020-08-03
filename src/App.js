import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'Bill', age: 24},
            { name: 'Ted', age: 23}
        ]
    }
    switchNameHandler = () => {
        this.setState({persons: [
                { name: 'William', age: 24},
                { name: 'Theodore', age: 23}
            ]})
    }

  render() {
    return (
        <div className="App">
            <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
          hobbies: guitar
          </Person>
        </div>
    );
  }
}

export default App;
