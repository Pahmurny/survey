import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMySurveys } from '../../actions/surveysActions';

import './MySurveys.scss';
import '../../styles/common.scss';

import SurveyElement from './SurveyElement/SurveyElement';

const mapStateToProps = (state) => {
  return {
    surveys: state.surveys.surveys,
    isRecieved: state.users.isRecieved,
  };
};

class MySurveys extends Component {
  componentDidMount() {
    this.props.dispatch(getMySurveys());
  }

  render() {
    const surveysList = this.props.surveys.map((survey) => {
      return (
        <SurveyElement key={survey._id} survey={survey} />
      );
    });
    return (
      <div className={`${this.props.className} MySurveys datapanel`}>
        My surveys
        <table className="MySurveys-surveysTable">
          <tbody>
            <tr className="MySurveys-surveysTableHeader">
              <th>Name</th>
              <th>Upadted at</th>
              <th>Answers</th>
              <th>Link</th>
              <th>Results</th>
              <th>Actions</th>
            </tr>
            {surveysList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(MySurveys);
