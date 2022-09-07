const API_KEY = "30876db9";

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const REMOVE = 'REMOVE';

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=` + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=` + id)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: json });
      });
  };
}

export function addMovieFavorite(movie) {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload: movie,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    payload: id,
  }
}