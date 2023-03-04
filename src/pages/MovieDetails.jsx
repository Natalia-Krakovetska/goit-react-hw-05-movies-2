import { fetchFullMovieInformation } from '../api-service/Api';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { MovieCard } from '../components/movieCard/MovieCard';
import { BackLink } from 'components/backLink/BackLink';


const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
    const locRef = useRef(location.state?.from ?? '/movies');
  
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
        <BackLink to={locRef.current}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16" >
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
          Go back</BackLink>
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
