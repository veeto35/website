import { useState,useEffect } from "react";
const KEY = "f6e8c198";

export default function MovieDetails({ selectedMovie,setSelectedMovie}) {
    const [movie,setMovie] = useState({});
    

    useEffect(() => {
        async function fetchMovie(){
           
          const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovie}&plot=full`)
    
          const data = await res.json();
          
          setMovie(data);
    
        }
    
    
        fetchMovie();
    
      }, [selectedMovie]);

      console.log(movie)

    return ( 
        <div className="containerDetails">
            <div className="jointImage">
            <button onClick={() => setSelectedMovie(null)} >
                &larr;
            </button>
            <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="info">
                <h1>{movie.Title} <span>({movie.Released})</span></h1><p>{movie.Runtime}</p>
                <p>Directed by <span>{movie.Director}</span></p>
                <p>Actors: {movie.Actors}</p>
                <p>{movie.Plot}</p>
                
            </div>
        </div>
    );
}