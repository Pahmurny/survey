import React, { Component } from 'react';

import './AppBody.scss';

import BodyMenu from '../BodyMenu/BodyMenu';
import BodyContent from '../BodyContent/BodyContent';

class AppBody extends Component {
  render() {
    return (
      <div className="AppBody">
        <BodyMenu />
        <BodyContent />
      </div>
    );
  }
}

export default AppBody;
