import { useState } from 'react'
import './App.css'
import SearchMovie from './components/SearchMovie'
import MovieDetails from './components/MovieDetails';

function App() {
  const [movies,setMovies] = useState([]);

  return (
    <div>
      <SearchMovie />
      <MovieDetails />
    </div>
  )
}

export default App
