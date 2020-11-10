import React from 'react';
import styles from './About.module.scss';

import profile from '../assets/profile.png';

function About() {
  return (
    <div className={styles['about']}>
      <img data-v-98055720="" src={profile} alt="Sulthon Abdul Malilk" />
      <div className={styles['speech']}>
        <p>
          This website was made by <strong>Sulthon Abdul Malik</strong> in 2020.
        </p>
        <p>
          Website made with the pourpose of study and try <strong>React JS</strong>,{' '}
          <strong>React Router</strong> and <strong>Redux</strong>
        </p>
        <p>
          <a
            href="https://dribbble.com/shots/6823172-Anime-Streaming-Service-Design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Main layout inspiration for this project
          </a>
        </p>
        <p>
          This project uses
          <a
            href="https://jikan.docs.apiary.io/#introduction/information/links"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jinkan
          </a>
          FREE API
        </p>
        <p>New routes and details page are still under construction</p>
        <br />
        <br />
        <p>Links</p>
        <p>
          <a href="https://linkedin.com/in/sulthon-am/" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>{' '}
          |{' '}
          <a href="https://www.twitch.tv/sqslavv" target="_blank" rel="noopener noreferrer">
            Twitch
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
