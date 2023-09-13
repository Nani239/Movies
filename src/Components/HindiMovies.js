import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Modal } from "antd";

const { Meta } = Card;

const TeluguMovies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // State to track the selected movie
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const apiKey = "f98328b31eb1e09b0dfbd9165467da7f";
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_original_language=hi`;

    // Fetch the list of genres from TMDb API
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      .then((response) => {
        const genreData = response.data.genres;
        setGenres(genreData);
      })
      .catch((error) => {
        console.error("Error fetching genre data:", error);
      });

    axios
      .get(apiUrl)
      .then((response) => {
        const movieData = response.data.results;
        console.log(movieData);
        setMovies(movieData);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);
  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalVisible(true);
  };

  // Function to handle closing the modal
  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  // Function to get genre names by genre IDs
  const getGenreNames = (genreIds) => {
    const genreNames = genreIds.map((genreId) => {
      const genre = genres.find((genre) => genre.id === genreId);
      return genre ? genre.name : "";
    });
    return genreNames.join(", ");
  };

  return (
    <div>
      <center>
        <h2>Hindi Movies</h2>
      </center>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            hoverable
            style={{
              margin: "16px",
              width: "14vw",
              height: "500px",
              borderRadius: "12px",
              transition: "box-shadow 0.5s", // Add transition effect
            }}
            cover={
              <img
                style={{
                  width: "14vw",
                  height: "300px",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                  objectFit: "cover",
                }}
                alt={movie.title}
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            }
            onClick={() => handleCardClick(movie)} // Handle card click
          >
            <Meta
              title={movie.title}
              description={`Release Date: ${movie.release_date}`}
            />
            {/* <p style={{ margin: "0", padding: "0" }}>
              Title: {movie.title}
            </p> */}
            <p style={{ margin: "0", padding: "0" }}>
              Genres: {getGenreNames(movie.genre_ids)}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "16px 0",
                flex: "1", // Allow buttons to occupy available space
              }}
            >
              <Button
                style={{
                  width: "48%",
                  textAlign: "center",
                  padding: "0",
                  fontSize: "10px",
                }}
                type="primary"
                onClick={() => {
                  window.open("https://www.youtube.com/", "_blank");
                }}
              >
                Watch Trailer!
              </Button>
              <Button
                style={{
                  width: "48%",
                  textAlign: "center",
                  padding: "0",
                  fontSize: "10px",
                }}
                type="primary"
                onClick={() => {
                  window.open("https://in.bookmyshow.com/", "_blank");
                }}
              >
                Book Tickets!
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <Modal
        // title={selectedMovie ? selectedMovie.title : ""}
        visible={isModalVisible}
        onOk={handleModalClose}
        onCancel={handleModalClose}
      >
        {selectedMovie && (
          <div>
            <img
              style={{
                width: "100%",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
                objectFit: "cover",
              }}
              alt={selectedMovie.title}
              src={`http://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path}`}
            />
            {/* <h3>Original Title: {selectedMovie.original_title}</h3> */}
            <h3>
              {selectedMovie.original_title} ({selectedMovie.title})
            </h3>
            <p style={{ margin: "0", padding: "0" }}>
              Genres: {getGenreNames(selectedMovie.genre_ids)}
            </p>
            <p>About the movie: {selectedMovie.overview}</p>
            <p>Release Date: {selectedMovie.release_date}</p>
            <p>Popularity: {selectedMovie.popularity}</p>
            <p>Vote Average: {selectedMovie.vote_average}</p>
            <p>Vote Count: {selectedMovie.vote_count}</p>
            {/* Add more details as needed */}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TeluguMovies;
