import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {MovieContainer, MovieImg} from "./movieList.styled"
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieContainer>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                      <MovieImg
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt={movie.title}
                          width="300"
                          height="300"
                      />

                  <p>{movie.original_title}</p>    
          </Link>
        </div>
      ))}
    </MovieContainer>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};