import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

import './BodyMenu.scss';

const BodyMenu = ({ className }) => (
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
      <LinkContainer to="/users">
        <NavItem eventKey={4} >
          Users
        </NavItem>
      </LinkContainer>
    </Nav>
  </div>
);


BodyMenu.propTypes = {
  className: PropTypes.string,
};

BodyMenu.defaultProps = {
  className: '',
};


export default BodyMenu;
