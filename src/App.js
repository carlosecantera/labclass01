import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Beast1 from './Beast1';

constructor() {
  super()
  this.state = {
    count: 0,
  }
} 

  voteCount = () => {
    this.setState({count: this.state.count + 1});
  }

function Beast() {
  return (
    <div className="Beast">
      <Header />
      <Main />
      <Footer />
      <Beast1 />
    </div>
  )
}

export default Beast;
