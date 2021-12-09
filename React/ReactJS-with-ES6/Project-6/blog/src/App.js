import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {/* Page Header */}
        <Header />
        {/* Main Content */}
        <Container />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
