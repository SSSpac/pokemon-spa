import React from 'react';
import styles from '../Navigation.module.css';

const Navigation = ({ setCurrentPage }) => {
  return (
    <nav className={styles.nav}>
      <button onClick={() => setCurrentPage('home')}>Home</button>
      <button onClick={() => setCurrentPage('page1')}>Pikachu</button>
      <button onClick={() => setCurrentPage('page2')}>Snorlax</button>
    </nav>
  );
};

export default Navigation;