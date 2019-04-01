import React from 'react';
import './header.css';
import text from '../../languages/text';

function Header(props) {
  return(
    <div>
      <div className="logoDiv">
        <img className="logoImg" src={"./img/bigBOFcom(360x120).png"} alt='bigBOF.com' width='180' height='60'/>
      </div>
      <div className="navbarLinks">
        <div className="usernameDiv">
          {text[5][props.lang]}
        </div>
      </div>
    </div>
  )
}

export default Header
