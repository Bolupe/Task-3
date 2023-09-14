# Movie Discovery Web App

Welcome to the Movie Discovery web application! This app allows you to search for movies, view movie details, and save your favorite movies. It's powered by the TMDB API.

## Getting Started

To run this app locally, follow these steps:

1. **Clone or Download**: Clone this repository to your machine or download it as a ZIP file.

2. **Get TMDB API Key**:
   - Visit the TMDB website (https://www.themoviedb.org/) and sign up for an account.
   - After signing up and logging in, go to your account settings.
   - In the left sidebar, click on "API" to create a new API key.
   - Copy the generated API key.

3. **Create an Environment File**: In the project directory, create a `.env` file. Inside the `.env` file, add the following line and replace `YOUR_API_KEY` with the API key you obtained from TMDB:

   ```
   VITE_REACT_APP_API_KEY=YOUR_API_KEY
   ```

4. **Install Dependencies**: Open your terminal, navigate to the project directory, and run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

5. **Start the App**: After installing dependencies, start the development server with:

   ```bash
   npm run dev
   ```

6. **Access the App**: Open your web browser and go to http://localhost:3000 to use the web app.

## Enjoy!

With these instructions, you'll have the Movie Discovery Web App up and running locally with your own TMDB API key.
