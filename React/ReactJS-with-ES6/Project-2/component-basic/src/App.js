import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //create constructor
  constructor(props) {
    super(props); //parent method
    this.lastName = 'El';
    this.state = {}; //default value with the page is loaded
  }

  //create a function called sayHello
  sayHello(name) {
    return 'Hello ' + name;
  }
  render() {
    const myName = 'LA';
    return (
      <div className='App'>
        <h2>
          Sample data {this.sayHello('LA')} {this.lastName}
        </h2>
      </div>
    );
  }
}

export default App;
