import React from 'react';
import Users from '../Users';

import styles from './styles.module.scss';

const App = () => (
  <div className={styles.content}>
    Hello from app!
    <Users />
  </div>
);

export default App;
