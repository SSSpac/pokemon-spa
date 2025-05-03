import React from 'react';
import Header from '../components/js/Header';
import Footer from '../components//footer/Footer';
import PokemonCard from '../components/js/PokemonCard';
import styles from '../components/modules/Pages.module.css';

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