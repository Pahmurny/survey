import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import { userLogin } from '../../actions/userActions';

import './Login.scss';
import '../../styles/common.scss';

const mapStateToProps = (state) => {
  return {
    user: state.user.name,
    isLoggedIn: state.user.isLoggedIn,
  };
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.onLogin(this.state.login);
    this.props.dispatch(userLogin(this.state.email, this.state.password));
  }

  render() {
    return (
      this.props.isLoggedIn ? <Redirect to="" /> :
      <div className="Login signform">
        <form onSubmit={this.handleSubmit}>
          <h1>Log in to your account</h1>
          <FormGroup controlId="login-input">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              name="email"
              type="email"
              value={this.state.login}
              placeholder="Enter login"
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
          <Button bsStyle="primary" type="submit">LOG IN</Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
