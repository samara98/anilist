import {
  ANIME__CLEAR_DETAILED,
  ANIME__GET_DETAILED,
  ANIME__SET_TODAY_ANIMES,
  ANIME__SET_TOP_AIRING_ANIMES,
  ANIME__SET_TOP_ANIMES,
  ANIME__SET_TOP_MANGAS,
} from '../types/animeActionTypes';

const initialState = {
  topAnimes: [],
  topAiringAnimes: [],
  topMangas: [],
  todayAnimes: [],
  detailed: {},
};

function getToday() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  return days[now.getDay()];
}

function setTopAnimes(state, data) {
  const topAnimes = data.top;
  return { ...state, topAnimes };
}

function setTopAiringAnimes(state, data) {
  const topAiringAnimes = data.top;
  return { ...state, topAiringAnimes };
}

function setTopMangas(state, data) {
  const topMangas = data.top;
  return { ...state, topMangas };
}

function setTodayAnimes(state, data) {
  const todayAnimes = data[getToday().toLowerCase()];
  return { ...state, todayAnimes };
}

function setDetailed(state, data) {
  const detailed = data;
  return { ...state, detailed };
}

const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANIME__SET_TOP_ANIMES:
      return setTopAnimes(state, action.payload);
    case ANIME__SET_TOP_AIRING_ANIMES:
      return setTopAiringAnimes(state, action.payload);
    case ANIME__SET_TOP_MANGAS:
      return setTopMangas(state, action.payload);
    case ANIME__SET_TODAY_ANIMES:
      return setTodayAnimes(state, action.payload);
    case ANIME__GET_DETAILED:
      return setDetailed(state, action.payload);
    case ANIME__CLEAR_DETAILED:
      return setDetailed(state, initialState.detailed);
    default:
      return state;
  }
};

export default animeReducer;
