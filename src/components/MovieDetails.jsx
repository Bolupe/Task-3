import { FaPlay } from "react-icons/fa";
import { AiOutlineUnorderedList, AiFillStar } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import PropTypes from "prop-types";
import bottomImg from "../assets/bottomImg.png";
import option from "../assets/showTimes.png";

export default function MovieDetails({
  movieBackdrop,
  title,
  runtime,
  releaseDate,
  genre,
  voteAverage,
  overview,
}) {
  return (
    <section className="w-[70vw] my-10 font-detail lg:mr-14 mr-8">
      {/* Movie Backdrop */}
      <div className="relative w-full rounded-[20px]">
        <img
          src={`https://image.tmdb.org/t/p/w200${movieBackdrop}`}
          alt="backdrop of movie"
          className="w-full h-[350px] object-cover rounded-[20px]"
        />
        {/* Play Button */}
        <div className="absolute flex flex-col justify-center items-center gap-y-2 text-2xl top-[30%] lg:left-[40%] left-[25%] text-center text-[#E8E8E8]">
          <span className="px-5 py-5 bg-slate-200/30 rounded-full w-fit">
            <FaPlay className="text-4xl" />
          </span>
          <p>Watch Trailer</p>
        </div>
      </div>

      {/* Movie Information */}
      <div className="flex lg:justify-between lg:flex-nowrap flex-wrap items-center my-7 whitespace-nowrap gap-y-3">
        {/* Movie Title, Release Date, Rating, and Duration */}
        <div className="flex items-center flex-wrap gap-x-5 gap-y-3">
          <p className="text-[#404040] text-2xl flex gap-x-3 flex-wrap">
            <span data-testid="movie-title">{title}</span>•
            <span data-testid="movie-release-date">{releaseDate}</span>•
            <span>PG-13</span>•
            <span data-testid="movie-runtime">{runtime} minutes</span>
          </p>
          <p className="flex gap-x-6 flex-wrap text-[#B91C1C] text-[15px] font-medium">{genre}</p>
        </div>

        {/* Movie Rating */}
        <div className="flex items-center gap-x-2">
          <AiFillStar className="text-amber-400/50 text-3xl" />
          <p>
            <span className="text-[#E8E8E8]">{voteAverage}</span> | 350k
          </p>
        </div>
      </div>

      {/* Movie Details */}
      <div className="flex justify-center lg:flex-row flex-col items-center gap-x-6 text-base font-normal text-[#333] gap-y-10">
        {/* Left Column */}
        <div className="flex flex-col gap-y-9 lg:w-2/3 w-full">
          {/* Movie Overview */}
          <p data-testid="movie-overview">{overview}</p>
          {/* Director */}
          <p>
            Director: <span className="text-[#BE123C]">Joseph Kosinski</span>
          </p>
          {/* Writers */}
          <p>
            Writers:{" "}
            <span className="text-[#BE123C]">
              Jim Cash, Jack Epps Jr, Peter Craig
            </span>
          </p>
          {/* Stars */}
          <p>
            Stars:{" "}
            <span className="text-[#BE123C]">
              Tom Cruise, Jennifer Connelly, Miles Teller
            </span>
          </p>

          {/* Additional Info */}
          <div className="font-medium flex w-full items-center border border-[#666]/50 rounded-[12px] whitespace-nowrap flex-wrap lg:flex-nowrap">
            <p className="text-white bg-[#BE123C] rounded-[10px] px-5 py-3 border border-[#BE123C] lg:w-fit w-full">
              Top rated movie #65
            </p>
            <p className="pl-6 pr-12 py-3">Awards 9 nominations</p>
            <RiArrowDropDownLine className="text-4xl font-thin justify-self-end lg:block hidden" />
          </div>
        </div>

        {/* Right Column */}
        <div className="self-start lg:w-1/3 w-full flex flex-col gap-y-3">
          {/* Showtimes */}
          <p className="flex py-1.5 gap-x-2 justify-center text-white items-center bg-[#BE123C] rounded-[10px]">
            <img src={option} alt="options" className="w-6 h-6 object-contain" />
            <span>See Showtimes</span>
          </p>

          {/* More Watch Options */}
          <p className="flex py-1.5 gap-x-3 justify-center items-center bg-[#BE123C]/20 border border-[#BE123C] rounded-[10px]">
            <AiOutlineUnorderedList />
            <span>More watch options</span>
          </p>

          {/* Bottom Image */}
          <div className="mt-9 relative w-full">
            <img src={bottomImg} alt="image" />
            <p className="flex items-center justify-center bg-black/20 absolute bottom-0 text-white">
              <AiOutlineUnorderedList />
              <span className="text-xs py-2 text-center w-full">
                The Best Movies and Shows in September
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Prop type validation
MovieDetails.propTypes = {
  movieBackdrop: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired, 
  releaseDate: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired, 
  voteAverage: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};
