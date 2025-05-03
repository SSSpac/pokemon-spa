import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from '../components/modules/Home.module.css';

const Home = () => {
  return (
    <div className={styles.page}>
      <Header title="Welcome to the Pokémon World!" />
      <main className={styles.content}>
        <p>Explore info about Pokomon</p>
        <img 
          src={require('../images/elements.jpeg')} 
          alt="Pokemon Elements"
          className={styles.image}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;