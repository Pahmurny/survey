import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSurveyById } from '../../actions/surveysActions';

import './SurveyEdit.scss';


const mapStateToProps = (state) => {
  return {
    activeSurvey: state.surveys.activeSurvey,
    isRecieved: state.users.isRecieved,
  };
};

class SurveyEdit extends Component {
  componentDidMount() {
    this.props.dispatch(getSurveyById(this.props.match.params.surveyId));
  }

  render() {
    console.log('props', this.props);
    const { props: { activeSurvey } } = this;
    return (
      <div className={`${this.props.className} SurveyEdit datapanel`}>
        Edit Survey
        <div>{activeSurvey.title}</div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(SurveyEdit));
