import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Glyphicon, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { deletePage, updatePage } from '../../../actions/pagesActions';

import QuestionCanvas from './QuestionsCanvas/QuestionsCanvas';

const mapStateToProps = (state) => {
  return {
    // activeSurvey: state.surveys.activeSurvey,
    // isRecieved: state.pages.isRecieved,
    // pages: state.pages.activeSurveyPages,
  };
};

class SurveyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: { ...props.page },
      editPage: {},
      isTitleEdit: false,
    };
    this.handleDeletePage = this.handleDeletePage.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTitleEditClick = this.handleTitleEditClick.bind(this);
    this.handleAcceptEditClick = this.handleAcceptEditClick.bind(this);
    this.handleCancelEditClick = this.handleCancelEditClick.bind(this);
  }

  handleDeletePage() {
    console.log('delete page clicked');
    this.props.dispatch(deletePage(this.props.page._id));
  }

  handleTitleEditClick() {
    this.setState({ editPage: { ...this.state.page }, isTitleEdit: true });
  }

  handleAcceptEditClick() {
    this.props.dispatch(updatePage(this.state.editPage));
    this.setState({ page: { ...this.state.editPage }, isTitleEdit: false });
  }

  handleCancelEditClick() {
    console.log('Cancel click', this.props);
    this.setState({ isTitleEdit: false });
  }

  handleTitleChange(e) {
    const { state: { editPage } } = this;
    editPage.title = e.target.value;
    this.forceUpdate();
  }

  render() {
    const { props: { page } } = this;
    return (
      <div className="SurveyPage">
        <div style={{ padding: '10px' }}>
          <Form inline>
            {this.state.isTitleEdit ? (
              <FormGroup controlId="formBasicText">
                <ControlLabel>Page Title: &nbsp;</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.editPage.title}
                  placeholder="Enter survey title"
                  onChange={this.handleTitleChange}
                />
                <Button bsSize="xsmall" bsStyle="link" onClick={this.handleAcceptEditClick} ><Glyphicon glyph="ok" /></Button>
                <Button bsSize="xsmall" bsStyle="link" onClick={this.handleCancelEditClick}><Glyphicon glyph="remove" /></Button>
              </FormGroup>
            ) : (
              <FormGroup controlId="formBasicText">
                <ControlLabel>Page Title: </ControlLabel>
                <FormControl.Static>&nbsp;{this.state.page.title}&nbsp;</FormControl.Static>
                <Button bsSize="xsmall" bsStyle="link" onClick={this.handleTitleEditClick} ><Glyphicon glyph="pencil" /></Button>
              </FormGroup>
            )}
          </Form>
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
