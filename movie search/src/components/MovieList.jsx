import Movie from "./Movie";
import './../index.css'
export default function MovieList({moviesList,setSelectedMovie,watched,query }) {
    var arrayMov = watched;
    if (query > 2 ){
       arrayMov = moviesList
    }
    console.log(arrayMov)
    return (
        <ul className="listMovie">
            { 
                arrayMov?.map( (movie) => (
                    
                    // eslint-disable-next-line react/jsx-key
                    <Movie movie={movie} id={movie.imdbID} setSelectedMovie={setSelectedMovie} />
                ))
            }
        </ul>
    );
}