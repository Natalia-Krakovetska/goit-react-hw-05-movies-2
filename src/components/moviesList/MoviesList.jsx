import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export const MoviesList = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`movie/${movie.id}`}>
                      <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt={movie.title}
                          width="300"
                          height="300"
                      />

                  <p>{movie.original_title}</p>    
          </Link>
        </div>
      ))}
    </div>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};