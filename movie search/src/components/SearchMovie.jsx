import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

export default function SearchMovie({moviesList}) {
    
    return ( 
        <div>
            <SearchBar />
            <MovieList moviesList={moviesList} />
        </div>
        );
}