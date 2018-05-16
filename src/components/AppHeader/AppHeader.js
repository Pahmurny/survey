import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { userLogout } from '../../actions/userActions';

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

  handleLogoutClick(e) {
    this.props.dispatch(userLogout());
  }

  render() {
    return (
      <Navbar style={{ marginBottom: '0' }} inverse collapseOnSelect staticTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            { this.props.isLoggedIn ? (
              <NavDropdown eventKey={4} title={`Hello, ${this.props.user.name}`} id="basic-nav-dropdown">
                <MenuItem eventKey={4.1} onClick={this.handleLogoutClick}>Logout</MenuItem>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <NavItem eventKey={10}>
                  Login
                </NavItem>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps)(AppHeader);
