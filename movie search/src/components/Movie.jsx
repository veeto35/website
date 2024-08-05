export default function Movie({  key,movie}) {
    
    return (
        <li key={key}>
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt="Movie" />
        </li>
    )
}