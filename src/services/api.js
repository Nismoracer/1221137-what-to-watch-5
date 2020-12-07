import axios from "axios";

const BACKEND_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {

    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();

      // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации — это особый случай и важно дать понять приложению, что запрос был неудачным.
      throw err;
    }

    throw err;

  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export const adaptToClient = (movie) => {
  const {background_color, background_image, description, director, genre, id,
  is_favorite, name, poster_image, preview_image, preview_video_link, rating,
  released, run_time, scores_count, starring, video_link } = movie;
  return {
    backgroundColor: background_color,
    backgroundImage: background_image,
    description,
    director,
    genre,
    id,
    isFavorite: is_favorite,
    name,
    posterImage: poster_image,
    previewImage: preview_image,
    previewVideoLink: preview_video_link,
    rating,
    released,
    runtime: run_time,
    scoresCount: scores_count,
    starring,
    videoLink: video_link
  };
};
