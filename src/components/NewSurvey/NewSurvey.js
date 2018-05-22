import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { createSurvey } from '../../actions/surveysActions';
import './NewSurvey.scss';
import '../../styles/common.scss';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    isChecked: state.user.isChecked,
    redirectTo: state.surveys.redirectTo,
  };
};


class NewSurvey extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: '',
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(createSurvey({ title: this.state.title }, this.props.dispatch));
  }

  render() {
    if (!this.props.redirectTo) {
      return (
        <div className="NewSurvey datapanel">
          <form onSubmit={this.handleSubmit}>
            <h1>Create new survey</h1>
            <FormGroup controlId="title-input">
              <ControlLabel>Title</ControlLabel>
              <FormControl
                name="title"
                type="text"
                value={this.state.title}
                placeholder="Enter survey title"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
            <Button bsStyle="primary" type="submit">CREATE</Button>
          </form>
        </div>
      );
    } else {
      return (
        <Redirect to={`/edit/${this.props.redirectTo}`} />
      );
    }
  }
}


export default withRouter(connect(mapStateToProps)(NewSurvey));
