import React, { Component } from 'react';
import Ipsum from '../Ipsum/Ipsum';
import FacebookFeedback from '../FacebookFeedback/FacebookFeedback';
import './MainRightBody.css';

class MainRightBody extends Component {
  render() {
    return (
      <div>
        <div className="facebook-winners-feedback">
          <FacebookFeedback />
        </div>
        <Ipsum />
      </div>
    )
  }
}

export default MainRightBody
