import { useEffect, useState } from 'react'
import './index.css'
import SearchMovie from './components/SearchMovie'
import MovieDetails from './components/MovieDetails';
import useLocalStorageState from './components/useLocalStorageState'

function App() {
  const [movies,setMovies] = useState([]);
  const [query,setQuery] = useState("Int");
  const [isLoading,setIsLoading] = useState(false);
  const [watched,setWatched] = useLocalStorageState([],"watched");

  const [selectedMovie,setSelectedMovie] = useState(null);
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

  function handleWatchedMovie(movie) {
    setWatched(watched => [...watched, movie])
  }


  function handleCloseMovie() {
    setSelectedMovie(null)
  }

  function handleSelectedMovie(id) {
      if(id == selectedMovie) {
        setSelectedMovie(null);
      }else{
        setSelectedMovie(id)
      }


  }


  return (
    <div className={`main-${selectedMovie !== null}`}>
      <h1 className='title'>Movie Searcher</h1>
      <SearchMovie moviesList={movies} query={query} setQuery={setQuery} setSelectedMovie={handleSelectedMovie} />
      {
        !selectedMovie ? null : 
        <MovieDetails selectedMovie={selectedMovie} watched={watched} setWatched={handleWatchedMovie}  setSelectedMovie={handleSelectedMovie} setClosedMovie={handleCloseMovie}/>
      }
    </div>
    
  )
}

export default App
