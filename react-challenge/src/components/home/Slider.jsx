import React, { useState } from 'react';
import styles from './Slider.module.scss';

import AnimeCard from './AnimeCard';

function Slider({ items, title, mediaType }) {
  const [offset, setOffset] = useState(0);

  function handleSlide(direction) {
    const cardsize = 212;
    const width = window.innerWidth;
    const listSize = items.length;
    const canShow = Math.ceil(width / cardsize);
    const multiplier = getSizeMultiplier(width);
    const offsetMoveTo = cardsize * multiplier;
    if (direction === 'l') setOffset(offset - offsetMoveTo < 0 ? 0 : offset - offsetMoveTo);
    if (direction === 'r')
      setOffset(offset > (listSize - canShow) * cardsize ? 0 : offset + offsetMoveTo);
  }

  function getSizeMultiplier(width) {
    if (width <= 767) return 1;
    else if (width <= 1440) return 3;
    else return 5;
  }

  return (
    <div>
      <div className={styles['separator']}>
        <h2 className={styles['separator--title']}>{title}</h2>
        <div className={styles['flexed-line']}></div>
        <div className={styles['separator--actions']}>
          <button onClick={() => handleSlide('l')} className={styles['separator--actions--button']}>
            <span className={'material-icons'}>navigate_before</span>
          </button>
          <button onClick={() => handleSlide('r')} className={styles['separator--actions--button']}>
            <span className={'material-icons'}>navigate_next</span>
          </button>
        </div>
      </div>

      <div className={styles['slider']} style={{ marginLeft: `-${offset}px` }}>
        {items.map((item, idx) => (
          <AnimeCard mediaType={mediaType} anime={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
