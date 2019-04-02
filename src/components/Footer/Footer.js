import React from 'react';
import './footer.css';
import text from '../../languages/text';

function Footer(props) {
  return(
    <div>
      <div className="copyrightDiv">
        {`© bigBOF.com ${text[7][props.lang]}!`}
      </div>
    </div>
  )
}

export default Footer
