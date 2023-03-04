import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReview } from '../../api-service/Api';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
    console.log(reviews);
    
  useEffect(() => {
    async function getReviews() {
      try {
        const data = await fetchMovieReview(movieId);
        setReviews(data.results);
      } catch (error) {
        alert('Error');
      }
    }
    getReviews();
  }, [movieId]);
    
    return (
         <>
      {reviews.length === 0 && <p>We don't have any reviews for the movie</p>}
      {reviews.length > 0 && (
        <div>
          {reviews.map(review => {
            return (
              <div key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
    )
}
export default Reviews;
