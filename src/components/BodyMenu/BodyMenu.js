import React from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';

import './BodyMenu.scss';

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    isLoggedIn: state.user.isLoggedIn,
  };
};


const BodyMenu = ({ className, user }) => (
  <div className={`${className} BodyMenu`}>
    <Nav bsStyle="pills" stacked activeKey={1}>
      <LinkContainer to="/new-survey">
        <NavItem eventKey={1} >
          New survey
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/my-surveys">
        <NavItem eventKey={2} >
          My Surveys
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/templates">
        <NavItem eventKey={3} >
          Templates
        </NavItem>
      </LinkContainer>
      { user.role === 'admin' &&
      <LinkContainer to="/users">
        <NavItem eventKey={4} >
          Users
        </NavItem>
      </LinkContainer>
      }
    </Nav>
  </div>
);

export default withRouter(connect(mapStateToProps)(BodyMenu));
