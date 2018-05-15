import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      login: '',
      password: '',
    };
  }

  getValidationState() {
    const length = this.state.login.length;
    if (length > 6) return 'success';
    // else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    this.props.onLoginClick(e.target.value);
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <h1>Log in to your account</h1>
          <FormGroup controlId="login-input" validationState={this.getValidationState()}>
            <ControlLabel>Login</ControlLabel>
            <FormControl
              name="login"
              type="text"
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

Login.propTypes = {
  onLoginClick: PropTypes.func,
};

Login.defaultProps = {
  onLoginClick: null,
};

export default Login;
