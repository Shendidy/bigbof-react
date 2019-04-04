import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Ipsum from '../Ipsum/Ipsum';
import text from '../../languages/text';
import './App.css';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

library.add(faGlobe)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ language: e.target.value });
  }

  render() {
    // Don't show errors in console!
    console.warn = console.error = () => {};

    let selCol =
      <select onChange={this.handleChange}>
      <option value="arabic">عربى</option>
      <option value="bangla">বাংলা</option>
      <option value="bulgarian">български</option>
      <option value="chinese">中文</option>
      <option value="croatian">Hrvatski</option>
      <option value="czech">čeština</option>
      <option value="danish">dansk</option>
      <option value="dutch">Nederlands</option>
      <option value="english" selected>English</option>
      <option value="filipino">filipino</option>
      <option value="finnish">Suomalainen</option>
      <option value="french">français</option>
      <option value="german">Deutsche</option>
      <option value="greek">Ελληνικά</option>
      <option value="hebrew">עברית</option>
      <option value="hindi">हिंदी</option>
      <option value="hungarian">Magyar</option>
      <option value="indonesian">bahasa Indonesia</option>
      <option value="italian">italiano</option>
      <option value="japanese">日本人</option>
      <option value="korean">한국어</option>
      <option value="kurdish">Kurdî</option>
      <option value="latvian">latviešu</option>
      <option value="lithuanian">lietuviškai</option>
      <option value="maltese">maltese</option>
      <option value="nepali">nepali</option>
      <option value="norwegian">norsk</option>
      <option value="persian">فارسی</option>
      <option value="polish">Polskie</option>
      <option value="portuguese">Português</option>
      <option value="punjabi">ਪੰਜਾਬੀ</option>
      <option value="romanian">Română</option>
      <option value="russian">русский</option>
      <option value="slovak">slovenský</option>
      <option value="slovenian">Slovenščina</option>
      <option value="somali">somali</option>
      <option value="spanish">Español</option>
      <option value="swedish">svenska</option>
      <option value="tamil">தமிழ்</option>
      <option value="telugu">తెలుగు</option>
      <option value="thai">ไทย</option>
      <option value="turkish">Türk</option>
      <option value="ukrainian">українська</option>
      <option value="urdu">اردو</option>
      <option value="uzbek">Uzbek</option>
      </select>;

    // Message for people accessing the console after loading the page.
    console.log(`Current language is ${this.state.language}`)
    console.log(`%c${text[1][this.state.language]}\n\n%c${text[2][this.state.language]}\n\n${text[3][this.state.language]}\n\n\n${text[4][this.state.language]}\n${text[5][this.state.language]}\n\n`, "color: red; font-size: 35px;", "color: blue; font-size: 15px;");

    return (
      <div className="mainContainer">
        <div className="appContainer">
          <div className="navbarDiv">
            <Header lang={this.state.language} selCol={selCol} selLang={text[6][this.state.language]}/>
          </div>
          <div className="leftBody scrollable">
            <Ipsum />
          </div>
          <div className="rightBody">
            <div className="rightTopContent scrollable">
             <Ipsum />
            </div>
            <div className="rightMainContent scrollable">
              <div className="freeText">
                <table className="freePlayTable">
                  <tbody>
                    <tr>
                      <td><h2>{text[8][this.state.language]}</h2></td>
                      <td><small>{text[9][this.state.language]}</small></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <Ipsum />
            </div>
          </div>
          <div className="footerDiv">
            <div className="footerContentDiv">
              <Footer lang={this.state.language} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
