import React from 'react';
import styles from '../PokemonCard.module.css';

const PokemonCard = ({ name, image, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PokemonCard;