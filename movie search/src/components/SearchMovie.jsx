import SearchBar from "./SearchBar";
import MovieList from "./MovieList";


export default function SearchMovie({moviesList,query,setQuery,setSelectedMovie}) {
    
    return ( 
        <div className="container">
            <SearchBar query={query} setQuery={setQuery} moviesList={moviesList}/>
            <MovieList moviesList={moviesList} setSelectedMovie={setSelectedMovie}/>
        </div>
        );
}