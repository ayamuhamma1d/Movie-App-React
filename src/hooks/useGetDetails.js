import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const useGetDetails = (mediaType, id) => {
  const [itemDetails, setItemDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=14bdd69ce887376edfafb09f23f78fe9`
        );
        setLoading(false);
        setItemDetails(res.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getDetails();
  }, [mediaType, id]);
  return [itemDetails, loading, error];
};
export default useGetDetails;
