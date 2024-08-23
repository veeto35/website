import { useState,useEffect } from "react";
import StarRating from "./StarRating";
const KEY = "f6e8c198";
import Loader from "./Loader";

export default function MovieDetails({selectedMovie,setSelectedMovie,handleRemoveWatched, setClosedMovie,watched,setWatched}) {
    const [movie,setMovie] = useState({});
    const [userStarRating,setUserStarRating] = useState(0);
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState("");
    const { Title: Title, Year: Year ,Poster: Poster,Runtime: Runtime, imdbRating, Plot: Plot, Released: Released, Actors: Actors, Director: Director, Genre: Genre} = movie;
    
    const isWatched = watched.map((movie) => movie?.imdbID).includes(selectedMovie)
    const watchedUserRating = watched.find((movie) => movie?.imdbID === selectedMovie)?.userRating;

    function onHandleAdd() {
        const newWatchedMovie = {
          imdbID: selectedMovie,
          Title,
          Year,
          Poster,
          imdbRating: Number(imdbRating),
          runtime : Number(Runtime.split(" ").at(0)),
          userRating: userStarRating
        }
        
        setWatched(newWatchedMovie)
        setClosedMovie()
      }
      
      function onHandleRemove(id) {
        handleRemoveWatched(watched => watched.filter(m => m?.imdbID !== id));     
        
      }

      //useKey("Escape",handleCloseMovie)
      
      useEffect(function() {
        if(!Title) return;
        document.title= `Movie | ${Title}`
  
        return function () {
          document.title= "usePopcorn"
        }
      },[Title])

    useEffect(() => {
        async function fetchMovie(){
           setIsLoading(true)
           setError("")
          const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovie}&plot=full`)
    
          const data = await res.json();
          
          setMovie(data);
          setIsLoading(false);
        }
    
    
        fetchMovie();
    
      }, [selectedMovie]);

    

    return ( 
        <div className="containerDetails">
           {isLoading ? <Loader /> : 
           <> 
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
                       <>
                       <p>You rated this movie already  {watchedUserRating} ✨</p>
                        <button onClick={() => onHandleRemove(movie.imdbID)}>Remove from favorites</button>
                      </>
                }
                </div>
            </div>
            <p className="plot">{movie.Plot}</p>
            </> }
        </div>
    );
}