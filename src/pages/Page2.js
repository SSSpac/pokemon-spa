import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PokemonCard from '../components/PokemonCard';
import styles from '../Page2.module.css';

const Page2 = () => {
  const charizardData = {
    name: 'Charizard',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    description: 'Snorlax is a normel type pokemon, and its known as the gluttonous Pokémon  that eats constantly, apart from when its asleep.',
  };

  return (
    <div className={styles.page}>
      <Header title="Charizard" />
      <main className={styles.content}>
        <PokemonCard {...charizardData} />
      </main>
      <Footer />
    </div>
  );
};

export default Page2;