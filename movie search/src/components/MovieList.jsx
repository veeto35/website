import Movie from "./Movie";
import './../index.css'
export default function MovieList({moviesList,setSelectedMovie}) {
    
    return (
        <ul className="listMovie">
            { 
                moviesList?.map( (movie) => (
                    <Movie movie={movie} keyId={movie.imdbID} setSelectedMovie={setSelectedMovie} />
                ))
            }
        </ul>
    );
}