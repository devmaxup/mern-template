import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions as usersActions } from '../../resources/users';

import styles from './styles.module.scss';

class UsersPage extends Component {
  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    const { users, isFetching } = this.props;

    return (
      <div className={styles.users}>
        {isFetching && 'Loading...'}

        {users && users.map(({ email }) => email)}

        {!isFetching && !users && 'No users'}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isFetching: state.users.isFetching,
    users: state.users.items,
  }),
  {
    fetchUsers: usersActions.fetchUsers,
  }
)(UsersPage);
