import { Link } from "react-router-dom";
import imdbRating from "../assets/imdbLogo.png";
import tomatoRating from "../assets/tomatoLogo.png";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import PropTypes from "prop-types";

export default function MovieCard({ id, movieTitle, moviePoster, originCountry, movieGenre, releaseDate }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Function to handle favorite toggle
  function handleFavoriteToggle(e) {
    e.preventDefault(); // Prevent default link behavior
    setIsFavorite((prev) => !prev);
  }

  return (
    <Link to={`/movies/${id}`} className="flex flex-col gap-y-3 font-bold w-full" data-testid="movie-card">
      <div className="relative">
        {/* Movie Poster */}
        <img src={`https://image.tmdb.org/t/p/w200${moviePoster}`} alt="movie poster" className="w-full sm:w-[350px] h-[370px] object-cover" data-testid="movie-poster" />
        
        {/* Favorite icon */}
        <p onClick={handleFavoriteToggle} className="absolute sm:top-2 top-3 sm:right-2 right-[20px] p-2 bg-white/30 rounded-full z-[99]">
          <AiFillHeart className={`${isFavorite ? 'text-[#BE123C]' : 'text-white'}`} />
        </p>
      </div>
      
      {/* Country and Release Date */}
      <p className="text-[#9CA3AF] text-xs">
        <span>{originCountry}USA, </span>
        <span data-testid="movie-release-date">{releaseDate}</span>
      </p>
      
      {/* Movie Title */}
      <p className="text-lg" data-testid="movie-title">{movieTitle}</p>

      {/* IMDB and Tomato Rating */}
      <div className="flex items-center gap-x-10 font-normal justify-between w-full">
        <div className="flex gap-x-2">
          <img src={imdbRating} alt="imdb" className="w-9 h-4 object-contain" />
          <span className="text-xs">86.0/100</span>
        </div>
        <div className="flex gap-x-2">
          <img src={tomatoRating} alt="rotten tomatoes rating" className="w-9 h-4 object-contain" />
          <span className="text-xs">97%</span>
        </div>
      </div>

      {/* Movie Genre */}
      <p className="text-[#9CA3AF] text-xs">{movieGenre}</p>
    </Link>
  );
}

// Prop type validation
MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  moviePoster: PropTypes.string.isRequired,
  originCountry: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};


