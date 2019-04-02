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
              <FontAwesomeIcon icon="globe" />
            </div>
            {this.props.selCol}
          </div>
        </div>
      </div>
    )
  }
}

export default Header
