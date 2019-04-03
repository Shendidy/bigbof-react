import React, { Component } from 'react';
// import App from '../App/App';
import './header.css';
// import text from '../../languages/text';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// function Header(props) {
class Header extends Component {

  render() {
    return(
      <div>
        <div className="logoDiv">
          <img className="logoImg" src={"./img/bigBOFcom(360x120).png"} alt='bigBOF.com' width='180' height='60'/>
        </div>
        <div className="navbarLinks">
          <div className="languageDiv">
            <div className="fontawesomeGlobe">
              <table className="selectLanguageTable">
                <tbody>
                  <tr><span className="fotawesomeGlobe"><FontAwesomeIcon icon="globe" /></span><small> {this.props.selLang}</small></tr>
                  <tr>{this.props.selCol}</tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Header
