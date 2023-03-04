import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieActors } from '../../api-service/Api';
import {CastList} from './Cast.styled'
import {MovieImg} from '../../components/moviesList/movieList.styled'
const defaultSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  console.log(cast);
  useEffect(() => {
    async function getCast() {
      try {
        const data = await fetchMovieActors(movieId);
        setCast(data.cast);
      } catch (error) {
        alert('Error');
      }
    }
    getCast();
  }, [movieId]);
  return  <div>
    {cast && (
      <CastList>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
                <MovieImg
                  src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : defaultSrc}
                  alt={actor.name}
                  width="150"
                />
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
      </CastList>
    )}
  </div>
};
export default Cast;
