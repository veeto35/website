import SearchBar from "./SearchBar";
import MovieList from "./MovieList";


export default function SearchMovie({moviesList,setSelectedMovie,watched,query}) {
    
    return ( 
        <>
            
            <MovieList moviesList={moviesList} setSelectedMovie={setSelectedMovie} query={query} watched={watched}/>
        </>
        );
}