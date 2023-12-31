import React from 'react'
import { Box } from '@mui/material';
import useGetTrending from '../../hooks/useGetTrending';
import Card from './../movies/card';
import { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Loader from '../loader/Loader';
function Tv() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {setPage(value);};
  const [moviesTrending, loading, error] = useGetTrending(`tv`,page);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' });}, [page]);
  return (  
    <Loader loading={loading} error={error}>
     <div className='container'>
        <Box
          sx={{
            display: 'flex',
            m: 1,
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
          }}
        >
          {moviesTrending.map((trend) => (
            <Card trend={trend} movieType={trend.media_type}/>
          ))}
        </Box>
        <Stack container spacing={2} alignItems="center" >
          <Pagination count={20} page={page} onChange={handleChange} />
        </Stack>
      </div>
      </Loader>
  )
}

export default Tv