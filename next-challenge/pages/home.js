// import Head from 'next/head';
import Head from 'next/head';
import Link from 'next/link';

import styles from './home.module.css';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div class={styles['home']}>
        {/* <div v-if="this.$store.state.topAiringAnimes.length === 0" class="loading">
        <Loader />
      </div> */}
        <div v-else>
          <div class={styles['featured']}>
            <div class={styles['featured--vertical']}>
              <div class={styles['featured--horizontal']}>
                <div class={styles['featured--content']}>
                  <div class={styles['featured--content--title']}>Kimetsu no Yaiba</div>
                  <span class={styles['featured--content--synopsis']}>
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
                  <div class={styles['featured--content--action']}>
                    <Link href="/details/anime/40456">
                      <a class={styles['featured--content--action--button']}>
                        <span class="material-icons">theaters</span>
                        <span>Details</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class={styles['home--sliders']}>
            <div class={styles['home--sliders--item']}>
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
              <Slider
                title="'Top upcoming'"
                mediaType="anime"
                items="this.$store.state.topAnimes"
              />
              <Slider title="'top mangas'" mediaType="manga" items="this.$store.state.topMangas" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
