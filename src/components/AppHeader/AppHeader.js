import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
      <Navbar inverse collapseOnSelect staticTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            { this.props.isLoggedIn ? (
              <NavDropdown eventKey={4} title="Hello, Admin(hardcode)" id="basic-nav-dropdown">
                <MenuItem eventKey={4.1} onClick={this.handleLogoutClick}>Logout</MenuItem>
              </NavDropdown>
            ) : (
              <NavItem eventKey={1} href="#">
                Login
              </NavItem>
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
