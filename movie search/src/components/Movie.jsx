import './../index.css'


export default function Movie({ key,movie}) {
    
    return (
        <li key={key} className='movieRow'>
            
                <div className='posterHover'>
                    <img src={movie.Poster} alt="Movie"  />
                </div>
                <div className='infoHover'>
                    <h1>{movie.Title}</h1>
                    <img src={movie.Poster} alt="Movie"  />
                    
                    <p>📅 {movie.Year}</p>
                </div>
            
        </li>
    )
}