import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewSurvey extends Component {
  render() {
    return (
      <div className={this.props.className}>
        New survey
      </div>
    );
  }
}

NewSurvey.propTypes = {
  className: PropTypes.string,
};

NewSurvey.defaultProps = {
  className: '',
};

export default NewSurvey;
