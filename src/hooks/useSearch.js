import { useEffect, useState } from 'react';
import axios from 'axios';
const useSearch = (query) => {
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getSearchData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${query}`
        );
        const filteredResults = res.data.results.filter(
          (item) => item.media_type === 'movie' || item.media_type === 'tv' || item.media_type === 'person'
        );
        setSearchResult(filteredResults);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getSearchData();
  }, [query]);

  return [searchResult, loading, error];
};

export default useSearch;
