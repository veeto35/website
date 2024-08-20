import Movie from "./Movie";
import './../index.css'
export default function MovieList({moviesList,setSelectedMovie}) {
    
    return (
        <ul className="listMovie">
            { 
                moviesList?.map( (movie) => (
                    // eslint-disable-next-line react/jsx-key
                    <Movie movie={movie} id={movie.imdbID} setSelectedMovie={setSelectedMovie} />
                ))
            }
        </ul>
    );
}