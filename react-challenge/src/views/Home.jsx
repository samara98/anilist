import React, { useEffect } from 'react';
import './Home.scss';

import Loader from '../components/common/Loader';
import Slider from '../components/home/Slider';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTodayAnimes,
  getTopAiringAnimes,
  getTopAnimeList,
  getTopMangas,
} from '../stores/actions/animeAction';
import { Link } from 'react-router-dom';

function getCurrentDay() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  return days[now.getDay()];
}

function Home() {
  const dispatch = useDispatch();

  const topAnimes = useSelector((state) => state.anime.topAnimes);
  const topAiringAnimes = useSelector((state) => state.anime.topAiringAnimes);
  const topMangas = useSelector((state) => state.anime.topMangas);
  const todayAnimes = useSelector((state) => state.anime.todayAnimes);

  useEffect(
    () => {
      dispatch(getTopAiringAnimes());
      dispatch(getTodayAnimes(getCurrentDay()));
      dispatch(getTopAnimeList());
      dispatch(getTopMangas());

      return () => {};
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className="home">
      {topAiringAnimes.length === 0 ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
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
                    <Link to="/details/anime/40456" className="featured--content--action--button">
                      <span className="material-icons">theaters</span>
                      <span>Details</span>
                    </Link>
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
