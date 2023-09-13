// Importing necessary components
import Home from "./components/Home.jsx"; // Import the Hero component
import FeaturedMovies from "./components/FeaturedMovies.jsx"; // Import the FeaturedMovies component
import Footer from "./components/Footer.jsx"; // Import the Footer component

export default function App() {
  // This is the main component that renders the entire application

  return (
    <main className="font-home">
      {/* The main content of the web app */}
      <Home /> {/* Render the Home component */}
      <FeaturedMovies /> {/* Render the FeaturedMovies component */}
      <Footer /> {/* Render the Footer component */}
    </main>
  );
}
