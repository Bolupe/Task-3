import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import MovieDetails from "./MovieDetails";
import { useEffect, useState } from "react";
import { fetchMovieDetailsWithId } from "../movieApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function MoviesDetailsPage() {
  // Get the movie ID from the URL
  const { id } = useParams();

  // State variables to store movie details and loading status
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch movie details when the component mounts or when the movie ID changes
  useEffect(() => {
    // Fetch movie details with the given ID using the movieApi function
    fetchMovieDetailsWithId(id)
      .then((moviesData) => {
        // Update the movie state with the fetched data
        setMovie(moviesData);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false); // Set loading to false on error
      });
  }, [id]); // The effect depends on the 'id' parameter in the URL

  // Extract the genre names from the movie's genre data
  const genre = movie?.genres?.map((genre) => (
    <p key={genre.id}>{genre.name}</p>
  ));

  // Convert the release date to UTC milliseconds
  const releaseDateUTC = new Date(movie?.release_date).getTime();

  return (
    <main className="font-detail flex w-full lg:gap-x-10 gap-x-6">
      <Sidebar />
      <>
        {loading ? (
          // Display a loading message while data is being fetched
          <h1 className="text-4xl font-bold text-center flex items-center justify-center h-screen">
          <FontAwesomeIcon icon={faSpinner} spin className="text-[2em] mr-2" />
          Loading...
          </h1>

        ) : (
          // Render the MovieDetails component with fetched data
          <MovieDetails
            overview={movie.overview}
            voteAverage={movie.vote_average}
            genre={genre}
            releaseDate={releaseDateUTC}
            runtime={movie.runtime}
            title={movie.title}
            movieBackdrop={movie.backdrop_path}
            movie={movie.title}
          />
        )}
      </>
    </main>
  );
}
