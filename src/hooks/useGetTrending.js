import axios from "axios";
import { useEffect, useState } from "react";
const useGetTrending = (mediaType,page) => {
  const [allTrending, setAllTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getAllTrending = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=14bdd69ce887376edfafb09f23f78fe9&page=${page}`);
        setAllTrending(res.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getAllTrending();
  }, [mediaType,page]);
  return [allTrending, loading, error];
};

export default useGetTrending;
