import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../../actions/usersActions';

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    isRecieved: state.users.isRecieved,
  };
};

class Users extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  render() {
    const usersList = this.props.users.map((e) => {
      return <li key={e.id}>{e.name} - {e.email}</li>;
    });
    return (
      <div className={this.props.className}>
        Users
        <ul>
          {usersList}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Users);
