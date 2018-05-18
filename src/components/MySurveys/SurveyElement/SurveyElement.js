import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Glyphicon, Button, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { deleteSurvey } from '../../../actions/surveysActions';

import './SurveyElement.scss';

const mapStateToProps = (state) => {
  return {
    isRecieved: state.users.isRecieved,
  };
};

class SurveyElement extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(e) {
    e.preventDefault();
    console.log('deleting survey with id', this.props.survey._id);
    this.props.dispatch(deleteSurvey(this.props.survey._id));
  }

  render() {
    const { props: { survey } } = this;
    return (
      <tr key={survey._id}>
        <td>
          {survey.title}
        </td>
        <td>
          {new Date(survey.updatedAt).toLocaleDateString()}
        </td>
        <td>NIY</td>
        <td>NIY</td>
        <td>NIY</td>
        <td className="SurveyElement-actions">
          <ButtonGroup>
            <LinkContainer to={`/edit/${survey._id}`}>
              <Button bsStyle="primary" bsSize="xsmall">
                <Glyphicon glyph="pencil" /> Edit
              </Button>
            </LinkContainer>
            <Button bsStyle="danger" bsSize="xsmall" onClick={this.handleDeleteClick}>
              <Glyphicon glyph="trash" /> Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  }
}

export default withRouter(connect(mapStateToProps)(SurveyElement));
