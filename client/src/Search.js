import axios from "axios";
import debounce from 'lodash.debounce';

const Search = ({ setMovies, loading, setLoading }) => {
    const searchTerm = async (term) => {
        try {
            const { data } = await axios.get("http://localhost:5000/search", { params: { title: term } })

            setMovies(data);
        } catch (error) {
            console.log(" ~ file: Search.js ~ line 14 ~ searchTerm ~ error", error)
            setMovies(null);
        }
        finally {
            setLoading(false);
        }
    }

    const debounce_searchTerm = debounce(async (term) => {
        if (!term || !term.length) return
        if (!loading) setLoading(true)
        await searchTerm(term);
    }, 200);


    return <div className="search-bar">
        <input type="text" className="input-field" placeholder="Search" onChange={(e) => debounce_searchTerm(e.target.value)} />
    </div>
}


export default Search;