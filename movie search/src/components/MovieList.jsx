import Movie from "./Movie";
import './../index.css'
export default function MovieList({moviesList}) {
    
    return (
        <ul className="listMovie">
            { 
                moviesList.map( (movie) => (
                    <Movie movie={movie} key={movie.imdbID} />
                ))
            }
        </ul>
    );
}