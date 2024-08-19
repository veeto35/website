import { useState,useEffect } from "react";
import StarRating from "./StarRating";
const KEY = "f6e8c198";

export default function MovieDetails({ selectedMovie,setSelectedMovie, setClosedMovie,watched,setWatched}) {
    const [movie,setMovie] = useState({});
    const [userStarRating,setUserStarRating] = useState(0);
    

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
               <div className="primaryInfo">
                <h1>{movie.Title}</h1><p>{movie.Runtime}</p>
                </div>
                <span>{movie.Released}</span>
                <p>Directed by <span>{movie.Director}</span></p>
                <p>Actors: {movie.Actors}</p>
                <p>IMDB Rating: {movie.imdbRating} ✨</p>
                <div>
                <StarRating maxRating={10} size={22} onSetRating={setUserStarRating} />
                {
                    userStarRating > 0 ? <button onClick={() => setClosedMovie()}>Movie Watched + </button> : null  
                }
                </div>
            </div>
            <p className="plot">{movie.Plot}</p>
        </div>
    );
}