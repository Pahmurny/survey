import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { userLogout, checkUserToken } from '../../actions/userActions';

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    isLoggedIn: state.user.isLoggedIn,
  };
};

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('jwtToken')) {
      this.props.dispatch(checkUserToken());
    }
  }

  handleLogoutClick(e) {
    this.props.dispatch(userLogout());
  }

  render() {
    return (
      <Navbar style={{ marginBottom: '0' }} inverse collapseOnSelect staticTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
              <a>Survey</a>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>

          { this.props.isLoggedIn ? (
            <Nav pullRight>
              <NavDropdown eventKey={4} title={`Hello, ${this.props.user.name}`} id="basic-nav-dropdown">
                <MenuItem eventKey={4.1} onClick={this.handleLogoutClick}>Logout</MenuItem>
              </NavDropdown>
            </Nav>
            ) : (
              <Nav pullRight>
                <LinkContainer to="/login">
                  <NavItem eventKey={10}>
                  LOG IN
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <NavItem eventKey={11}>
                  SIGN UP
                  </NavItem>
                </LinkContainer>
              </Nav>
            )}

        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(connect(mapStateToProps)(AppHeader));
