import { useState, useEffect } from "react";

export const featured_api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_FEATURED_API}`;

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const res = await fetch(featured_api);
    const data = await res.json();
    setData(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return { loading, data };
};
