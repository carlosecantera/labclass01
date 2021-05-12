import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Beast1 from './Beast1';

class App extends React.Component {
  constructor() {
    super();
  }


  render(){
    return(
      <div id="app">
        <Header />
        <Main title="my horned beast" />
        <Footer />
        <Beast1 />
      </div>
    )
  }
}
export default App;
