import React, { useState } from 'react';
import "./celebs.css";
import useGetPerson from '../../hooks/useGetPerson';
import Loader from '../loader/Loader';

function Celebs() {
  const [query, setQuery] = useState('aya');
  const [personCeleb, loading, error] = useGetPerson(query);
  const text = "Planet A is a metaphor for human arrogance, in which humans destroy nature and other beings, justify their behavior as, evaluate themselves as and are flattered to be on top of Earth. An experimental musical documentary project, presented as an omnibus of 15 music videos, was created with the goal of challenging the status quo and revealing the truth that lies behind what is happening on this planet right now, along with fighting against all discrimination within it.";

  const person = personCeleb.map((person) => {
    if (person?.known_for[0]?.poster_path) { // Check if the card has an image
      return (
        <div className="col-md-3 align-items-stretch" key={person.id}>
          <img
            className="person__img"
            src={`https://image.tmdb.org/t/p/w300${person?.known_for[0]?.poster_path}`}
            alt={person?.known_for[0]?.title}
          />
          <div>
            <h4>{person?.name || person?.original_name}</h4>
            <p>{person?.known_for[0]?.title || person?.known_for[0]?.name}</p>
            <p className="text">{person?.known_for[0]?.overview || text}</p>
            <h6 className="mb-2 fw-lighter">Rate: {person?.known_for[0]?.popularity}</h6>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  const handleSearch = () => {
    if (query.trim() !== '') {
      setQuery(query.trim());
    } else {
      setQuery('aya');
    }
  };

  return (
    <Loader loading={loading} error={error}>
      <div className="container">
        <div className="row g-5">
          <div className="search__bar d-flex">
            <input
              className='form-control'
              type="text"
              placeholder='Search by actor name'
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className='btn btn-dark' onClick={handleSearch}>Search</button>
          </div>
          {person}
        </div>
      </div>
    </Loader>
  );
}

export default Celebs;