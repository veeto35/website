import Movie from "./Movie";
export default function MovieList({moviesList}) {
    
    return (
        <ul>
            { 
                moviesList.map( (movie) => (
                    <Movie movie={movie} key={movie.imdbID} />
                ))
            }
        </ul>
    );
}