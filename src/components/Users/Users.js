import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Users extends Component {
  render() {
    return (
      <div className={this.props.className}>
        Users
      </div>
    );
  }
}

Users.propTypes = {
  className: PropTypes.string,
};

Users.defaultProps = {
  className: '',
};

export default Users;
