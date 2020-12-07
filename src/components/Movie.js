import React from "react";

const IMAGES_API = "https://image.tmdb.org/t/p/w500/";

const setVoteColor = (vote) => {
  if (vote >= 7.5) {
    return "green";
  } else if (vote >= 5) {
    return "yellow";
  } else if (vote >= 2.5) {
    return "orange";
  } else if (vote >= 0) {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img
      src={
        poster_path
          ? IMAGES_API + poster_path
          : "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=345&q=80"
      }
      alt={title}
    />
    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${setVoteColor(vote_average)}`}>
        {vote_average}
      </span>
    </div>

    <div className="overview">
      <h2>Sobre:</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
