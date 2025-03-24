import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../Home.module.css';

const Home = () => {
  return (
    <div className={styles.page}>
      <Header title="Welcome to the Pokémon World!" />
      <main className={styles.content}>
        <p>Explore info about Pokomon</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;