import React, { useEffect, useState } from 'react';
import './Home.scss';

import Loader from '../components/common/Loader';
import jikanApi from '../apis/jikanApi';
import Slider from '../components/home/Slider';

function getToday() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  return days[now.getDay()];
}

function getCurrentDay() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  return days[now.getDay()];
}

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [topAnimes, setTopAnimes] = useState([]);
  const [topAiringAnimes, setTopAiringAnimes] = useState([]);
  const [topMangas, setTopMangas] = useState([]);
  const [todayAnimes, setTodayAnimes] = useState([]);

  useEffect(() => {
    async function getTopAiringAnimes() {
      const response = await jikanApi.get('/top/anime/1/airing');
      setTopAiringAnimes(response.data.top);
      setIsLoading(false);
    }

    async function getTopAnimeList() {
      const response = await jikanApi.get('/top/anime/1/upcoming');
      setTopAnimes(response.data.top);
    }

    async function getTodayAnimes(today) {
      const response = await jikanApi.get(`/schedule/${today}`);
      setTodayAnimes(response.data[getToday().toLowerCase()]);
    }

    async function getTopMangas() {
      const response = await jikanApi.get('/top/manga');
      setTopMangas(response.data.top);
    }

    getTopAiringAnimes();
    getTopAnimeList();
    getTodayAnimes(getCurrentDay());
    getTopMangas();

    return () => {};
  }, []);

  return (
    <div className="home">
      {isLoading && (
        <div className="loading">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="featured">
            <div className="featured--vertical">
              <div className="featured--horizontal">
                <div className="featured--content">
                  <div className="featured--content--title">Kimetsu no Yaiba</div>
                  <span className="featured--content--synopsis">
                    Ever since the death of his father, the burden of supporting the family has
                    fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote
                    mountain, the Kamado family are able to enjoy a relatively peaceful and happy
                    life. One day, Tanjirou decides to go down to the local village to make a little
                    money selling charcoal. On his way back, night falls, forcing Tanjirou to take
                    shelter in the house of a strange man, who warns him of the existence of
                    flesh-eating demons that lurk in the woods at night. When he finally arrives
                    back home the next day, he is met with a horrifying sight—his whole family has
                    been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has
                    been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou
                    swears to avenge his family and stay by his only remaining sibling. Alongside
                    the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do
                    whatever it takes to slay the demons and protect the remnants of his beloved
                    sister's humanity.
                  </span>
                  <div className="featured--content--action">
                    <a href="'/details/anime/40456'" className="featured--content--action--button">
                      <span className="material-icons">theaters</span>
                      <span>Details</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home--sliders">
            <div className="home--sliders--item">
              <Slider title="Airing Animes" mediaType="anime" items={topAiringAnimes} />
              <Slider title="Today Releases" mediaType="anime" items={todayAnimes} />
              <Slider title="Top Upcoming" mediaType="anime" items={topAnimes} />
              <Slider title="Top Mangas" mediaType="manga" items={topMangas} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
