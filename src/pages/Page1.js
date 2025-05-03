import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import PokemonCard from '../components/js/PokemonCard';
import styles from '../components/modules/Pages.module.css';

const PokemonListPage = () => {

  const pokemonList = [
    {
      name: 'Pikachu',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      description: 'Pikashu is an Electric-type Pokémon known for its cute appearance and powerful Thunderbolt attack.',
    },
    {
      name: 'Bulbasaur',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      description: 'Bulbasaur is a Grass/Poison type Pokémon with a plant seed on its back that grows as it develops.',
    },
    {
      name: 'Squirtle',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      description: 'Squirtle is a Water type Pokémon that shoots water from its mouth and withdraws into its shell when in danger.',
    }
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