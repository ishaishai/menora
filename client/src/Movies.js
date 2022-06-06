import { useMemo } from "react";

const Movies = ({ movies, setSelectedMovie,loading }) => {

    const moviesData = useMemo(() => {
        if (movies && movies.length)
            return movies;
        return [];
    }, [movies])

    if(loading) return <div>Loading...</div>
    return <div className="movies-container">
        <h3 className="movies-title">Popular Movies: </h3>
        <div className="movies-box">
            {moviesData.map((movie, idx) => {
                return <button className="movie-card" key={idx} onClick={() => setSelectedMovie(movie)}>
                    <img src={movie.Poster} />
                    <div className="movie-details">
                        <h2>{movie.Title}</h2>
                        <h4>Rated: {movie.imdbRating}</h4>
                        <h4>{movie.Awards}</h4>
                    </div>
                </button>
            })}
        </div>
    </div>
}

export default Movies;