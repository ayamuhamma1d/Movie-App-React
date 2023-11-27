import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Container } from 'react-bootstrap';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './home.css';
import useSearch from '../../hooks/useSearch';
import Loader from '../loader/Loader';
import Card from './../movies/card';
import useGetTrending from '../../hooks/useGetTrending';
import hero from"./../../assets/images/wallpaperflare.com_wallpaper (3).jpg"
const Home = () => {
  const { control, } = useForm();
  const [searchQuery, setSearchQuery] = useState('');
  const [mediaType, setMediaType] = useState('movie');
  const [allTrending, loading, error] = useGetTrending(mediaType, 1);
  const [type] = useState([
    { value: 'movie', label: 'movie' },
    { value: 'tv', label: 'tv' },
    { value: 'all', label: 'all' },
  ]);
  const [searchResult, searchLoading, searchError] = useSearch(searchQuery);
  const handleSearch = () => {
  };
  return (
    <Loader loading={loading || searchLoading} error={error || searchError}>
      <div className="">
        <img src={hero} alt="" />
      </div>
      <div className="search">
        <Container maxWidth="lg">
          <div className="search__form">
            <Box display={'flex'} alignItems={'center'}>
              <button className="search__form__btn" onClick={handleSearch}>
                <SearchIcon />
              </button>
              <input 
                className="search__form__input"
                type="text"
                autoComplete="off"
                spellCheck="false"
                placeholder="Find movies, TV shows, documentaries, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={type}
                    isSearchable={true}
                    placeholder=" Media Type"
                    onChange={(selectedOption) => setMediaType(selectedOption?.value)}
                  />
                )}
              />
            </Box>
          </div>
        </Container>
      </div>
      <Container maxWidth="lg">
        <h2 className="header">Latest Movies & TV Shows</h2>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            fontSize: '0.875rem',
            fontWeight: '700',
          }}
        >
          {searchResult.length > 0
            ? searchResult.map((result) => (
              <Card trend={result} key={result.id} />
            ))
            : allTrending.slice(0, 8).map((trend) => (
              <Card trend={trend} key={trend.id} />
            ))}
        </Box>
      </Container>
    </Loader>
  );
};
export default Home;