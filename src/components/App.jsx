import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import NotFound from "../pages/NotFound";
import MovieDetails from "../pages/MovieDetails";
import SharedLayout from "./sharedLayout/SharedLayout ";
export const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>   
    </div>
  );
};
