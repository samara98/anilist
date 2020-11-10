import React, { useEffect, useState } from 'react';
import './Home.scss';

import Loader from '../components/common/Loader';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {};
  }, []);

  return (
    <div class="home">
      {isLoading && (
        <div v-if="this.$store.state.topAiringAnimes.length === 0" class="loading">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <div v-else>
          <div class="featured">
            <div class="featured--vertical">
              <div class="featured--horizontal">
                <div class="featured--content">
                  <div class="featured--content--title">Kimetsu no Yaiba</div>
                  <span class="featured--content--synopsis">
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
                  <div class="featured--content--action">
                    <router-link
                      to="'/details/anime/40456'"
                      class="featured--content--action--button"
                    >
                      <span class="material-icons">theaters</span>
                      <span>Details</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="home--sliders">
            <div class="home--sliders--item">
              {/* <Slider
              title="'Airing Animes'"
              mediaType="anime"
              items="this.$store.state.topAiringAnimes"
            />
            <Slider
              title="'Today Releases'"
              mediaType="anime"
              items="this.$store.state.todayAnimes"
            />
            <Slider title="'Top upcoming'" mediaType="anime" items="this.$store.state.topAnimes" />
            <Slider title="'top mangas'" mediaType="manga" items="this.$store.state.topMangas" /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
