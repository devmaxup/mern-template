import React from 'react';

import styles from './styles.module.scss';

const App = ({ children }) => (
  <div className={styles.content}>
    Hello from app!
    {children}
  </div>
);

export default App;
