import { useEffect, useState } from 'react'
import './App.css'
import SearchMovie from './components/SearchMovie'
import MovieDetails from './components/MovieDetails';

function App() {
  const [movies,setMovies] = useState([]);
  const [query,setQuery] = useState("Int");
  const KEY = "f6e8c198";

  useEffect(() => {
    async function fetchMovies(){
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}*`)

      const data = await res.json();
      setMovies(data.Search);

    }



    fetchMovies();

  }, [query]);



  return (
    <div>
      <SearchMovie moviesList={movies} />
      <MovieDetails />
    </div>
  )
}

export default App
