import { fetchFullMovieInformation } from '../api-service/Api';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { MovieCard } from '../components/movieCard/MovieCard';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
    const locRef = useRef(location.state?.from ?? '/movies');
    console.log(movie)

  useEffect(() => {
    async function getFullMovieInformation() {
      try {
        const data = await fetchFullMovieInformation(movieId);
        setMovie(data);
      } catch (error) {
        alert('Error');
      }
    }
    getFullMovieInformation();
  }, [movieId]);

  return (
    <>
      <div>
        <Link to={locRef.current}>Go back</Link>
      </div>
      <MovieCard movie={movie} />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetails;
