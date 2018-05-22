import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';

import { deletePage } from '../../../actions/surveysActions';

import QuestionCanvas from './QuestionsCanvas/QuestionsCanvas';

const mapStateToProps = (state) => {
  return {
    activeSurvey: state.surveys.activeSurvey,
    isRecieved: state.users.isRecieved,
  };
};

class SurveyPage extends Component {
  constructor(props) {
    super(props);
    this.handleDeletePage = this.handleDeletePage.bind(this);
  }

  handleDeletePage() {
    console.log('delete page clicked');
    this.props.dispatch(deletePage(this.props.page));
  }

  render() {
    const { props: { page } } = this;
    return (
      <div className="SurveyPage">
        <div style={{ padding: '10px' }}>
          Page: { page.title }
          <Button className="SurveyPage__Delete" bsSize="xsmall" bsStyle="danger" onClick={this.handleDeletePage}>
            <Glyphicon glyph="trash" />
          </Button>
        </div>
        <QuestionCanvas page={page} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(SurveyPage));
