import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import MovieContainer from "./MovieContainer";

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_SEARCH_API}`;
const App = (props) => {
  const { data, loading } = useFetch();
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (loading) return;
    setMovies(data);
  }, [loading, data]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getSearchTerm = (Api) => {
    if (loading) return;
    fetch(Api)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchTerm(SEARCH_API + searchTerm);
    setSearchTerm("");
  };

  return (
    <main>
      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            value={searchTerm}
          />
        </form>
      </div>
      <section className="section">
        <div className="container">
          {movies.length > 0 &&
            movies.map((movie) => {
              return <MovieContainer key={movie.id} {...movie} />;
            })}
        </div>
      </section>
    </main>
  );
};

export default App;
