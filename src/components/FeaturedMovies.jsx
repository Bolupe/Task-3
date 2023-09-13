import { useEffect, useState } from "react";
import { fetchMoviesFromApi, fetchMovieGenre } from "../movieApi";
import { FaAngleRight } from "react-icons/fa";
import MovieCard from "./MovieCard";

export default function FeaturedMovies() {
  // State variables
  const [movies, setMovies] = useState([]); // Store movie data
  const [loading, setLoading] = useState(true); // Loading indicator state
  const [genres, setGenres] = useState([]); // Store movie genres

  useEffect(() => {
    // Fetch featured movies from the API
    fetchMoviesFromApi()
      .then((moviesData) => {
        setMovies(moviesData.slice(0, 10)); // Set the first 10 movies
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false); // Set loading to false on error
      });

    // Fetch movie genres from the API
    fetchMovieGenre()
      .then((genre) => {
        setGenres(genre);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  // Function to get movie genres based on genre IDs
  function getMovieGenre(genreIds) {
    return genreIds?.map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre ? genre.name : ""; // Return an empty string if genre is not found
    }).join(', ');
  }

  return (
    <section className="lg:px-24 md:px-6 px-4 pb-20 my-20">
      <div className="flex justify-between items-center mb-11 gap-x-20 flex-wrap gap-y-2">
        <h1 className="sm:text-4xl text-2xl font-bold">Featured Movies</h1>
        <button className="flex items-center md:text-lg text-sm font-normal text-[#BE123C] gap-x-2 ">
          See more <FaAngleRight />
        </button>
      </div>

      {/* Display loading message while fetching data or render movie cards */}
      <>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 xl:gap-20 gap-10 sm:mx-0 mx-5">
            {movies.map((movie) => (
              <MovieCard
                releaseDate={movie.release_date.slice(0, 4)}
                key={movie.id}
                id={movie.id}
                movieTitle={movie.title}
                moviePoster={movie.poster_path}
                movieGenre={getMovieGenre(movie.genre_ids)}
              />
            ))}
          </div>
        )}
      </>
    </section>
  );
}
