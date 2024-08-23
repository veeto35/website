import { useEffect, useState } from 'react'
import './index.css'
import SearchMovie from './components/SearchMovie'
import MovieDetails from './components/MovieDetails';
import useLocalStorageState from './components/useLocalStorageState'
import Loader from './components/Loader';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [movies,setMovies] = useState([]);
  const [query,setQuery] = useState("Int");
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState("");
  const [watched,setWatched] = useLocalStorageState([],"watched");

  const [selectedMovie,setSelectedMovie] = useState(null);
  const KEY = "f6e8c198";

  useEffect(() => {
    async function fetchMovies(){
    
      setIsLoading(true);
      setError("");
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}*`)

      if(!res.ok) setError("Something went wrong fetching")

      const data = await res.json();
      
      if(data.Response === 'False'){
        setError("Movie not found");
        
      } 
        
      setMovies(data.Search);
      setIsLoading(false);
    }

    if(query.length < 3) {
      setIsLoading(false);
      setMovies(watched);  
      console.log(watched)
      setError("");
      return
    }

    

    fetchMovies();
    
  }, [query,watched]);

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
      <div className="container">
      <SearchBar query={query} setQuery={setQuery} moviesList={movies}/>
      { isLoading && <Loader /> }
      {
        !isLoading && <SearchMovie moviesList={movies} query={query.length} watched={watched} setSelectedMovie={handleSelectedMovie} />
      }
      
      {error && <ErrorMessage err={error} />}
      </div>
      
      {
        !selectedMovie ? null : 
        <MovieDetails setIsLoading={setIsLoading} setError={setError} selectedMovie={selectedMovie} watched={watched} handleRemoveWatched={setWatched} setWatched={handleWatchedMovie}  setSelectedMovie={handleSelectedMovie} setClosedMovie={handleCloseMovie}/>
      }
      {error && <ErrorMessage err={error} />}
    </div>
    
  )
}

export default App
