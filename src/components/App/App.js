import React, { Component } from 'react';
import Header from '../Header/Header';
import text from '../../languages/text';
import './App.css';

class App extends Component {
  render() {
    let lang = 'english';
    // Message for people accessing the console after loading the page.
    console.log(`%c${text[0][lang]}\n\n%c${text[1][lang]}\n\n${text[2][lang]}\n\n\n${text[3][lang]}\n${text[4][lang]}\n\n`, "color: red; font-size: 25px;", "color: blue; font-size: 15px;");

    return (
      <main-body>
        <Header lang = {lang}/>
      </main-body>
    )
  }
}

export default App
