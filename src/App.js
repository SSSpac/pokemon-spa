import React, { useState } from 'react';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Navigation from './components/Navigation';
import styles from './App.module.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'page1':
        return <Page1 />;
      case 'page2':
        return <Page2 />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={styles.app}>
      <Navigation setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;