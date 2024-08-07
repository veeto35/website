import { useEffect, useState } from 'react'
import './index.css'
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

    if(query.length < 3) {
      setMovies([]);  
    }

    fetchMovies();





  }, [query]);



  return (
    <div className='main'>
      <SearchMovie moviesList={movies} query={query} setQuery={setQuery}/>
      <MovieDetails />
    </div>
  )
}

export default App
