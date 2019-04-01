import React from 'react';
import './header.css';

function Header() {
  return(
    <div>
      <div className="headerDiv">
        <div className="logoDiv">
          <img src={"./img/bigBOFcom(360x120).png"} alt='bigBOF.com' width='180' height='60'/>
        </div>
        <div className="usernameDiv">
          "Username"
        </div>
      </div>
    </div>
  )
}

export default Header
