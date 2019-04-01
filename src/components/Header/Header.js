import React, { Component } from 'react';
import './header.css';
import text from '../../languages/text';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// function Header(props) {
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.lang
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.state.language = e.target.value;
    console.log(this.state.language);
  }

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
            <select
              onChange={this.handleChange}
            >
              <option defaultValue="english" disabled selected>{text[5][this.props.lang]}</option>
              <option value="english">English</option>
              <option value="arabic">عربى</option>
              <option value="russian">русский</option>
              <option value="czech">čeština</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
