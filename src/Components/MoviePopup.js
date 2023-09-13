import React from "react";

const MoviePopup = ({ movie, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>{movie.title}</h2>
        {/* Display other movie details here */}
      </div>
    </div>
  );
};

export default MoviePopup;
