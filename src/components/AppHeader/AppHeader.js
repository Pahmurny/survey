import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick(e) {
    console.log('Logout clicked');
    this.props.onLogoutClick(e.target.value);
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
              <NavDropdown eventKey={4} title="Hello, Admin(hardcode)" id="basic-nav-dropdown">
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

AppHeader.propTypes = {
  isLoggedIn: PropTypes.bool,
  onLogoutClick: PropTypes.func,
};

AppHeader.defaultProps = {
  isLoggedIn: false,
  onLogoutClick: null,
};

export default AppHeader;
