import jikanApi from '../../apis/jikanApi';
import {
  ANIME__SET_TODAY_ANIMES,
  ANIME__SET_TOP_AIRING_ANIMES,
  ANIME__SET_TOP_ANIMES,
  ANIME__SET_TOP_MANGAS,
} from '../types/animeActionTypes';

export function getTopAnimeList() {
  return async function (dispatch) {
    const response = await jikanApi.get('/top/anime/1/upcoming');
    dispatch({ type: ANIME__SET_TOP_ANIMES, payload: response.data });
  };
}

export function getTopAiringAnimes() {
  return async function (dispatch) {
    const response = await jikanApi.get('/top/anime/1/airing');
    dispatch({ type: ANIME__SET_TOP_AIRING_ANIMES, payload: response.data });
  };
}

export function getTopMangas() {
  return async function (dispatch) {
    const response = await jikanApi.get('/top/manga');
    dispatch({ type: ANIME__SET_TOP_MANGAS, payload: response.data });
  };
}

export function getTodayAnimes(today) {
  return async function (dispatch) {
    const response = await jikanApi.get(`/schedule/${today}`);
    dispatch({ type: ANIME__SET_TODAY_ANIMES, payload: response.data });
  };
}
