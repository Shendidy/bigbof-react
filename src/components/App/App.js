import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  render() {
    // Message for people accessing the console after loading the page.
    console.log("%cSTOP!\n\n%cPlease don't change anything here unless you know what you're doing.\n\nYou might give hackers access to your account if you're not careful.\n\n\nGood luck,\nbigBOF.com team.", "color: red; font-size: 25px;", "color: blue; font-size: 15px;");

    return (
      <main-body>
        <Header />
      </main-body>
    )
  }
}

export default App
