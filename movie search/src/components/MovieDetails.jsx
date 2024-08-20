import { useState,useEffect } from "react";
import StarRating from "./StarRating";
const KEY = "f6e8c198";

export default function MovieDetails({ selectedMovie,setSelectedMovie, setClosedMovie,watched,setWatched}) {
    const [movie,setMovie] = useState({});
    const [userStarRating,setUserStarRating] = useState(0);
    
    const { Title: title, Year: year ,Poster: poster,Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre} = movie;
    
    const isWatched = watched.map((movie) => movie.imdbID).includes(selectedMovie)
    const watchedUserRating = watched.find((movie) => movie.imdbID === selectedMovie)?.userRating;

    function onHandleAdd() {
        const newWatchedMovie = {
          imdbID: selectedMovie,
          title,
          year,
          poster,
          imdbRating: Number(imdbRating),
          runtime : Number(runtime.split(" ").at(0)),
          userRating: userStarRating
        }
        
        setWatched(newWatchedMovie)
        setClosedMovie()
      }
  
      //useKey("Escape",handleCloseMovie)
      
      useEffect(function() {
        if(!title) return;
        document.title= `Movie | ${title}`
  
        return function () {
          document.title= "usePopcorn"
        }
      },[title])

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
                <div className="userRating">
                {
                    !isWatched ? (<>
                        <StarRating maxRating={10} size={22} onSetRating={setUserStarRating} />
                            {   userStarRating > 0 ? <button onClick={onHandleAdd}>Movie Watched + </button> : null }  </>) :
                        <p>You rated this movie already  {watchedUserRating} ✨</p>
                }
                </div>
            </div>
            <p className="plot">{movie.Plot}</p>
        </div>
    );
}