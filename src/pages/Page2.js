import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import PokemonCard from '../components/js/PokemonCard';
import styles from '../components/modules/Pages.module.css';

const PokemonListPage = () => {

  const pokemonList = [
    {
      name: 'Charizard',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
      description: 'Snorlax is a normel type pokemon, and its known as the gluttonous Pokémon  that eats constantly, apart from when its asleep.',
      },
    {
      name: 'Golduck',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png',
      description: 'Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail',
    },
  ];

  return (
    <div className={styles.page}>
      <Header title="Pokémon Collection" />
      <main className={styles.content}>
    <div className={styles.pokemonGrid}>
          {pokemonList.map((pokemon, index) => (
            <PokemonCard 
              key={index}
              name={pokemon.name}
              image={pokemon.image}
              description={pokemon.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PokemonListPage;
