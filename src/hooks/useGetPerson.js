import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
const useGetPerson = (query) => {
const [personCeleb, setPersonCeleb] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
  const getCelebPerson = async () => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${query}`);
      setPersonCeleb(res.data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  getCelebPerson();
}, [query]);

return [personCeleb, loading, error];
}
export default useGetPerson;