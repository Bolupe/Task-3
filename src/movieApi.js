import axios from "axios";

// Define API key and base URL
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';

/**
 * Fetches a list of top-rated movies.
 * @returns {Array} An array of top-rated movie objects.
 * @throws {Error} If there is an issue with the API request.
 */
export async function fetchMoviesFromApi() {
  try {
    const response = await axios.get(`${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    alert('An error occurred while fetching top-rated movies. Please try again later.');
    throw error;
  }
}

/**
 * Searches for movies by a query string.
 * @param {string} query - The search query.
 * @returns {Array} An array of movie objects that match the search query.
 * @throws {Error} If there is an issue with the API request.
 */
export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
  } catch (error) {
    console.error('Error searching for movies:', error);
    alert('An error occurred while searching for movies. Please try again later.');
    throw error;
  }
}

/**
 * Fetches movie details by ID.
 * @param {number} id - The ID of the movie to fetch details for.
 * @returns {Object} Details of the specified movie.
 * @throws {Error} If there is an issue with the API request.
 */
export async function fetchMovieDetailsWithId(id) {
  try {
    const response = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    alert('An error occurred while fetching movie details. Please try again later.');
    throw error;
  }
}

/**
 * Fetches a list of movie genres.
 * @returns {Array} An array of movie genre objects.
 * @throws {Error} If there is an issue with the API request.
 */
export async function fetchMovieGenre() {
  try {
    const response = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching movie genres:', error);
    alert('An error occurred while fetching movie genres. Please try again later.');
    throw error;
  }
}

export async function fetchMovieReleaseDates(movieId) {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}/release_dates?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching release dates:', error);
    alert('An error occurred while fetching release dates. Please try again later.');
    throw error;
  }
}
