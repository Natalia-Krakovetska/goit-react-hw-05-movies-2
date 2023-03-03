import { useState, useEffect } from 'react';
import { MoviesList } from '../components/moviesList/MoviesList';
import { fetchTrendingMovie } from '../api-service/Api';
const Home = () => {
  const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    console.log(movies)
  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const data = await fetchTrendingMovie();
        setMovies(data.results);
      } catch (error) {
        setError('Error');
      }
    }
    getTrendingMovies();
  }, []);
    
  return (
    <main>
      <h1 style={{ marginBottom: '40px' }}>Trending today</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};
export default Home;
