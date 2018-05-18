import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { createSurvey } from '../../actions/surveysActions';
import './NewSurvey.scss';
import '../../styles/common.scss';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    isChecked: state.user.isChecked,
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
    this.props.dispatch(createSurvey({ title: this.state.title }));
  }

  render() {
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
  }
}


export default connect(mapStateToProps)(NewSurvey);
