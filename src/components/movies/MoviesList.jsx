import React from 'react';
import { useEffect } from 'react';
import useGetTrending from '../../hooks/useGetTrending';
import Card from './card';
import Loader from '../loader/Loader';
import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const MoviesList = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => { setPage(value); };
  const [moviesTrending, loading, error] = useGetTrending(`movie`, page);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [page]);
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
          }}>
          {moviesTrending.map((trend) => (
            <Card trend={trend} movieType={trend.media_type} />
          ))}

        </Box>
     
    
      </div>
      <Stack container spacing={2} alignItems="center" justifyContent={'center'} className="pagination" >
            <Pagination count={20} page={page} onChange={handleChange} />
          </Stack>
    </Loader>
  )
}
export default MoviesList