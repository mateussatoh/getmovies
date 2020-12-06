import React, {useEffect, useState} from 'react';
import Movie from './components/Movie'

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=c944654ad3b949198223249fc79385cc&language=pt-BR&sort_by=popularity.desc&'
const SEARCH_API = 'https://api.themoviedb.org/3/search/company?api_key=c944654ad3b949198223249fc79385cc&query=test'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(FEATURED_API)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setMovies(data.results)
    })
  }, [])

  return (<div className="App">
    {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>)
  
}

export default App;
