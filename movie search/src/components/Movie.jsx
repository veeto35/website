import './../index.css'


export default function Movie({ id,movie,setSelectedMovie}) {
    
    
    return (
        <li key={id} className='movieRow' onClick={() => setSelectedMovie(id)}>
            
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