import React, { Component } from 'react';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    const courses = [
      {
        name: 'Complete IOS10 dev course',
        price: 199,
      },
      {
        name: 'Complete Frontend dev course',
        price: 299,
      },
      {
        name: 'Complete Bug Bounty dev course',
        price: 189,
      },
      {
        name: 'Complete Css dev course',
        price: 190,
      },
    ];
    return (
      <div className='App'>
        <header className='App-header'>
          <h2> Welcome to Course Purchase Page</h2>
        </header>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
