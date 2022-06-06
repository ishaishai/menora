import React, { useEffect, useState } from "react"
import axios from "axios"
import './App.css';
import Movies from "./Movies";
import Search from './Search';
import MovieModal from "./MovieModal";

function App() {
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPopularMovies = async () => {
    try {
      let res = await axios.get("http://localhost:5000/init");
      setMovies(res.data);

    } catch (error) {
      console.log(" ~ file: App.js ~ line 22 ~ getPopularMovies ~ error", error)
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPopularMovies();
  }, [])

  return (
    <div className="App">
      {selectedMovie && <MovieModal movie={selectedMovie} setSelected={setSelectedMovie} />}
      <Search setMovies={setMovies} loading={loading} setLoading={setLoading} />
      <Movies movies={movies} loading={loading} setSelectedMovie={setSelectedMovie} />
    </div>
  );
}

export default App;
