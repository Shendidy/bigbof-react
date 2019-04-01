import React from 'react';
import './header.css';
import text from '../../languages/text';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(props) {
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
          <select>
            <option value="" disabled selected>{text[5][props.lang]}</option>
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

export default Header
