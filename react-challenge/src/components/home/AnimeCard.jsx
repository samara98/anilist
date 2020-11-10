import React from 'react';
import styles from './AnimeCard.module.scss';

function AnimeCard({ anime, mediaType }) {
  return (
    <a href={`/details/${mediaType}/${anime.mal_id}`} className={styles['card']}>
      <img className={styles['card-image']} src={anime.image_url} alt={anime.title} />
      <div className={styles['card--content']}>
        <div className={styles['card--content--title']}>{anime.title}</div>
        <button className={styles['card--content--details']}>DETAILS</button>
        <div className={styles['card--content--footer']}>
          <div>{anime.type}</div>
          <div>{anime.start_date}</div>
        </div>
      </div>
    </a>
  );
}

export default AnimeCard;
