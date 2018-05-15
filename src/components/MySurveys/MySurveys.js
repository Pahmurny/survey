import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MySurveys extends Component {
  render() {
    return (
      <div className={this.props.className}>
        My surveys
      </div>
    );
  }
}

MySurveys.propTypes = {
  className: PropTypes.string,
};

MySurveys.defaultProps = {
  className: '',
};

export default MySurveys;
