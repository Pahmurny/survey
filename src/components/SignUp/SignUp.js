import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import { userSignup } from '../../actions/userActions';

import './SignUp.scss';
import '../../styles/common.scss';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      name: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.onLogin(this.state.login);
    this.props.dispatch(userSignup(this.state.email, this.state.password, this.state.name));
  }

  render() {
    return (
      this.props.isLoggedIn ? <Redirect to="" /> :
      <div className="SignUp signform">
        <form onSubmit={this.handleSubmit}>
          <h1>Create a FREE account</h1>
          <FormGroup controlId="email-input">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              name="email"
              type="email"
              value={this.state.email}
              placeholder="Enter email"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup controlId="name-input">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              name="name"
              type="text"
              value={this.state.name}
              placeholder="Enter your name"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup controlId="password-input">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              name="password"
              type="password"
              value={this.state.password}
              placeholder="Enter password"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button bsStyle="primary" type="submit">CREATE ACCOUNT</Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SignUp);
