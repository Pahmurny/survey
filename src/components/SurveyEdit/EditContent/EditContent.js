import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Tabs, Tab, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { saveSurvey } from '../../../actions/surveysActions';
import { addPage, setActivePage } from '../../../actions/pagesActions';

import SurveyPage from '../SurveyPage/SurveyPage';

const mapStateToProps = (state) => {
  return {
    activeSurvey: state.surveys.activeSurvey,
    isRecieved: state.surveys.isRecieved,
    activeSurveyPages: state.pages.activeSurveyPages,
    activeSurveyPage: state.pages.activeSurveyPage,
  };
};

class EditContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSurvey: props.activeSurvey,
    };
    this.handleAddPage = this.handleAddPage.bind(this);
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  componentDidMount() {
    const pages = this.props.activeSurveyPages;
    const survey = this.props.activeSurvey;
    if (!pages || !Array.isArray(pages) || pages.length < 1) {
      const surveyPage = {
        order: 1,
        title: 'Page 1',
      };
      this.props.dispatch(addPage(survey, surveyPage));
    }
  }

  componentDidUpdate() {
    const pages = this.props.activeSurveyPages;
    const survey = this.props.activeSurvey;
    if (!pages || !Array.isArray(pages) || pages.length < 1) {
      const surveyPage = {
        order: 1,
        title: 'Page 1',
      };
      this.props.dispatch(addPage(survey, surveyPage));
    }
    if (pages[0] && !pages.find(page => page.order === this.props.activeSurveyPage.order)) {
      this.props.dispatch(setActivePage(pages[0].order));
    }
  }

  handleTabSelect(order) {
    this.props.dispatch(setActivePage(order));
  }

  handleAddPage() {
    const newPageOrder = this.props.activeSurveyPages[this.props.activeSurveyPages.length - 1].order + 1;
    const survey = this.props.activeSurvey;
    const surveyPage = {
      order: newPageOrder,
      title: `Page ${newPageOrder}`,
    };
    this.props.dispatch(addPage(survey, surveyPage));
  }

  handleSaveClick() {
    this.props.dispatch(saveSurvey(this.state.activeSurvey, this.props.dispatch));
  }

  handleTitleChange(e) {
    // this.setState({ activeSurvey: { ...this.state.activeSurvey, title: e.target.value } });
    const { state: { activeSurvey } } = this;
    activeSurvey.title = e.target.value;
    this.forceUpdate();
  }

  render() {
    const { props: { activeSurveyPages: pages } } = this;
    console.log('REnder survey pages', pages);
    const pageTabs = pages.map((page) => {
      return (
        <Tab eventKey={page.order} key={page.order} title={page.title}>
          <SurveyPage page={page} />
        </Tab>
      );
    });

    return (
      <div >
        <Form inline>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Survey Title: &nbsp;</ControlLabel>
            <FormControl
              type="text"
              value={this.state.activeSurvey.title}
              placeholder="Enter survey title"
              onChange={this.handleTitleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
        </Form>
        <div className="SurveyEdit__controls">
          <Button bsSize="small" bsStyle="primary" onClick={this.handleSaveClick}>Save</Button>
          <Button bsSize="small" bsStyle="primary" onClick={this.handleAddPage}>Save as template</Button>
          <Button bsSize="small" bsStyle="primary" onClick={this.handleAddPage}>Cancel</Button>
          <Button bsSize="small" bsStyle="primary" className="SurveyEdit__AddPage" onClick={this.handleAddPage}>Add page</Button>
        </div>

        <Tabs
          id="controlled-tab-example"
          animation={false}
          activeKey={this.props.activeSurveyPage.order}
          onSelect={this.handleTabSelect}
        >
          {pageTabs}
        </Tabs>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(EditContent));
