

const MovieModal = ({movie,setSelected}) => {
    return <div className="modal-container">
        <div className="modal-box">
                <img src={movie.Poster} />
            <div className="movie-more">
                <h2>{movie.Title}</h2>
                <div><h6>{movie.Year}</h6>
                <h6 className="movie-rated">Rated as: {movie.Rated}</h6></div>
                <span>{movie.Plot}</span>
                <h5>{movie.Actors}</h5>

                <button className="modal-btn" onClick={()=>setSelected(null)}>
                    CLOSE
                </button>
            </div>
            
        </div>
    </div>
}

export default MovieModal;