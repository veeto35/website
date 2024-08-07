export default function SearchBar({query,setQuery,moviesList}) {
    
    return (<div className="searchBar">
            <input type="text" placeholder="Search a movie" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <p className="resultMoviesFound">Found: {moviesList?.length > 0 ? moviesList.length:0} movies</p>
            </div>);

}