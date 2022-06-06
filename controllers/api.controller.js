const axios = require("axios").default;
const url = process.env.OMDB_URL;

exports.init = async (req, res) => {
    try {
        let { data } = await axios.get(url, { params: { s: "batman" } });
        // make sure 10 results are being returned (maybe slice it)
        let movies = await fetchMoviesDescription(data.Search);
        
        res.status(200).json(movies);
    }
    catch (error) {
        res.status(500).json({ error })
    }
}

exports.search = async (req, res) => {
    let { title, page } = req.query;
    if (!page) page = 1

    try {
        let { data } = await axios.get(url, { params: { s: title, page } })
        let movies = await fetchMoviesDescription(data.Search);
        res.status(200).json(movies);
    }
    catch (error) {
        res.status(500).json({ error })
    }
}


const fetchMoviesDescription = async (movies) => {
    let promisesArr = [];
    movies.forEach(movie => {
        let promise = axios.get(url, { params: { i: movie.imdbID } })
        promisesArr.push(promise);
    });
    let results = await Promise.all(promisesArr);
    return results.map((result) => result.data);
}