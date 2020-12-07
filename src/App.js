import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=c944654ad3b949198223249fc79385cc&language=pt-BR&sort_by=popularity.desc&";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=c944654ad3b949198223249fc79385cc&language=pt-BR&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovie = (API) => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    getMovie(FEATURED_API);
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    getMovie(SEARCH_API + searchTerm);
    setSearchTerm("");
  };

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Page return
  return (
    <div className="movie-container">
      <div className="header">
        <h2>🍿 getmovies</h2>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Pesquise um filme"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </div>
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}

export default App;
