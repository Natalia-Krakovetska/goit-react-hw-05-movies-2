import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'b19297acdc563e9276d9a5dae9c54e60';

export const fetchTrendingMovie = async () => {
  const response = await axios.get(
    `trending/movie/day?api_key=${KEY}`
  );
  return response.data;
};
export const fetchSearchMovies = async keyword => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
  );
  return response.data;
};
export const fetchFullMovieInformation = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};
export const fetchMovieActors = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data;
};
export const fetchMovieReview = async id=> {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=en-US`
  );
  return response.data;
};