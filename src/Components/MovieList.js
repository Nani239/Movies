/* eslint-disable react-hooks/exhaustive-deps*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const MoviesList = () => {
  const [randomMovies, setRandomMovies] = useState([]);
  const languages = [
    "en",
    "fr",
    "es",
    "de",
    "ja",
    "ko",
    "hi",
    "zh",
    "ru",
    "ar",
  ];

  useEffect(() => {
    const fetchRandomMovie = async () => {
      const randomLanguage =
        languages[Math.floor(Math.random() * languages.length)];
      // Replace 'YOUR_API_KEY' with your actual API key and 'YOUR_LANGUAGE' with the language code
      const apiKey = "f98328b31eb1e09b0dfbd9165467da7f";
      const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${randomLanguage}&page=1`;

      try {
        const response = await axios.get(apiUrl);
        // Assuming the response contains an array of movies
        const movies = response.data.results;
        if (movies.length > 0) {
          const randomIndex = Math.floor(Math.random() * movies.length);
          return movies[randomIndex];
        }
      } catch (error) {
        console.error(
          `Error fetching random movie data for ${randomLanguage}:`,
          error
        );
      }

      return null; // Return null if no movie was found
    };

    const fetchRandomMovies = async () => {
      const movies = [];

      while (movies.length < 10) {
        const randomMovie = await fetchRandomMovie();
        if (randomMovie) {
          movies.push(randomMovie);
        }
      }

      setRandomMovies(movies);
    };

    fetchRandomMovies();
  }, []); // No direct dependency array for 'languages'

  if (randomMovies.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Slide images={randomMovies.map((movie) => movie.poster_path)}>
        {randomMovies.map((movie, index) => (
          <div
            key={index}
            className="each-slide"
            style={{
              height: "600px",
              background: `url(http://image.tmdb.org/t/p/w500/${movie.backdrop_path}) center/cover no-repeat`,
              position: "relative",
            }}
          >
            <h3
              style={{
                color: "#fff",
                position: "absolute",
                bottom: "10px",
                left: "10px",
                margin: "0", // Remove margin for better alignment
                padding: "10px", // Remove padding for better alignment
                // background: "rgba(0, 0, 0, 0.6)", // Add a background for readability
              }}
            >
              <strong>{movie.title}</strong>
            </h3>
            {/* <p>Language: {movie.original_language}</p>
            <p>Overview: {movie.overview}</p>
            <p>Release Date: {movie.release_date}</p> */}
            {/* <img
              style={{
                width: "14vw",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
                objectFit: "cover",
              }}
              alt={movie.title}
              src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            /> */}
            {/* Add more details as needed */}
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default MoviesList;
