import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // Message for people accessing the console after loading the page.
    console.log("%cSTOP!\n\n%cPlease don't change anything here unless you know what you're doing.\n\nYou might give hackers access to your account if you're not careful.\n\n\nGood luck,\nbigBOF.com team.", "color: red; font-size: 25px;", "color: blue; font-size: 15px;");

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
