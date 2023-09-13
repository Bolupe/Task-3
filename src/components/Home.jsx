// Import necessary components and assets
import Navbar from "./Navbar"; // Import the Navbar component
import { FaPlayCircle } from "react-icons/fa"; // Import the FaPlayCircle icon from react-icons
import imdbRating from "../assets/imdbLogo.png"; // Import the IMDb rating logo
import tomatoRating from "../assets/tomatoLogo.png"; // Import the Rotten Tomatoes rating logo

export default function Home() {
  // This is the Home component that represents the homepage of the application

  return (
    <section className="bg-hero bg-cover bg-center bg-no-repeat bg-fixed text-white">
      <div className="bg-black/50 lg:px-24 md:px-6 px-4 pb-20">
        <Navbar /> {/* Render the Navbar component */}
      
        <div className="md:w-[28%] w-full my-20">
          <h1 className="text-5xl font-bold">John Wick 3: Parabellum</h1>

          <div className="flex items-center gap-x-10 my-4">
            <div className="flex gap-x-2">
              <img src={imdbRating} alt="imdb" className="w-9 h-4 object-contain" />
              <span className="text-xs font-normal">86.0/100</span>
            </div>
            <div className="flex gap-x-2">
              <img src={tomatoRating} alt="rotten tomatoes rating" className="w-9 h-4 object-contain"/>
              <span className="text-xs font-normal">97%</span>
            </div>
          </div>

          <p className="text-sm font-medium">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>

          <button className="flex gap-x-2 text-sm leading-6 bg-[#BE123C] rounded-md px-4 py-1.5 items-center my-4">
            <span><FaPlayCircle /></span>
            <span>WATCH TRAILER</span>
          </button>
        </div>
      </div>
    </section>
  )
}
