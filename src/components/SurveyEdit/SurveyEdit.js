import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSurveyById } from '../../actions/surveysActions';

import './SurveyEdit.scss';

import EditContent from './EditContent/EditContent';

const mapStateToProps = (state) => {
  return {
    activeSurvey: state.surveys.activeSurvey,
    activeSurveyPages: state.surveys.activeSurveyPages,
    isRecieved: state.surveys.isRecieved,
    activeSurveyPage: state.surveys.activeSurveyPage,
  };
};

class SurveyEdit extends Component {
  componentDidMount() {
    this.props.dispatch(getSurveyById(this.props.match.params.surveyId));
  }

  render() {
    console.log('updating:', this.props);
    const { props: { isRecieved } } = this;

    const editContent = isRecieved ? (
      <EditContent />
    ) : (
      <div> LOADING... </div>
    );

    return (
      <div className={`${this.props.className} SurveyEdit datapanel`}>
        { editContent }
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(SurveyEdit));
