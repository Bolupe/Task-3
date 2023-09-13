import axios from "axios";

const API_KEY = '3006a6a8521642f90f93ca3044fa675f'
const API_URL = 'https://api.themoviedb.org/3'


export async function fetchMoviesFromApi() {
   try {
    const response = await axios.get(`${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    throw error;
  }
}

 export const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
      return response.data.results;
  
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

export async function fetchMovieDetailsWithId (id) {
  try {
    const response = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
}

export async function fetchMovieGenre () {
  try {
    const response = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
}

