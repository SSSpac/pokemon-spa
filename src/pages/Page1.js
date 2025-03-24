import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PokemonCard from '../components/PokemonCard';
import styles from '../Page1.module.css';

const Page1 = () => {
  const pikachuData = {
    name: 'Pikachu',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    description: 'Pikachu is an Electric-type Pokémon known for its cute appearance and powerful Thunderbolt attack.',
  };

  return (
    <div className={styles.page}>
      <Header title="Pikachu" />
      <main className={styles.content}>
        <PokemonCard {...pikachuData} />
      </main>
      <Footer />
    </div>
  );
};

export default Page1;