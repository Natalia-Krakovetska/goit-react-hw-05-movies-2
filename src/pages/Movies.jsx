import { useSearchParams } from 'react-router-dom';
import { MoviesList } from '../components/moviesList/MoviesList';
import { useState, useEffect } from 'react';
import { SearchBox } from '../components/searchBox/SearchBox';
import { fetchSearchMovies } from '../api-service/Api';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const movieTitle = searchParams.get('query') ?? '';

  const handleFormSubmit = searchValue => {
    setSearchParams({ query: searchValue });
  };
  useEffect(() => {
    async function getMoviesByKeyword() {
      if (movieTitle === '') {
        return;
      }
      try {
        const data = await fetchSearchMovies(movieTitle);
        if (data.results.length > 0) {
          setMovies(data.results);
        }
      } catch (error) {
        alert('Error');
      }
    }
    getMoviesByKeyword();
  }, [movieTitle]);

  return (
    <main>
      <SearchBox onSubmit={handleFormSubmit} />
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
