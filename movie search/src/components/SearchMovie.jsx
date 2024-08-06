import SearchBar from "./SearchBar";
import MovieList from "./MovieList";


export default function SearchMovie({moviesList}) {
    
    return ( 
        <div className="container">
            <SearchBar />
            <MovieList moviesList={moviesList} />
        </div>
        );
}