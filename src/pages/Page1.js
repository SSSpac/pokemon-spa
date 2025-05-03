import React from 'react';
import Header from '../components/js/Header';
import Footer from '../components/footer/Footer';
import PokemonCard from '../components/js/PokemonCard';
import styles from '../components/modules/Pages.module.css';

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