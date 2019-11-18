import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../../api/users';

import styles from './styles.module.scss';

const Users = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetchUsers().then(() => setUsers());
  }, []);

  return (
    <div className={styles.users}>{users && users.map(({ name }) => name)}</div>
  );
};

export default Users;
