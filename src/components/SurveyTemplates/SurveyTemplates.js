import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SurveyTemplates extends Component {
  render() {
    return (
      <div className={this.props.className}>
        Survey Templates
      </div>
    );
  }
}

SurveyTemplates.propTypes = {
  className: PropTypes.string,
};

SurveyTemplates.defaultProps = {
  className: '',
};

export default SurveyTemplates;
