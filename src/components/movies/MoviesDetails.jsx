import React from 'react';
import { useParams } from 'react-router-dom';
import useGetDetails from '../../hooks/useGetDetails';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import Loader from '../loader/Loader';
import './movieDetails.css'
const MoviesDetails = () => {
  const { type, id } = useParams();
  const [itemDetails, loading, error] = useGetDetails(type, id);
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'left',
  }));
  console.log(itemDetails);
  return (
    <Loader loading={loading} error={error}>
      <Grid container columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
        <Grid item xs={12}>
          <div className='img__container'>
            <img
              className='item__img__background'
              src={
                'https://image.tmdb.org/t/p/w500' +
                (itemDetails?.backdrop_path || '')
              }
              alt=""
            />
            <div className="img__overlay"></div>
          </div>
        </Grid>
        <Container maxWidth="lg" className='movie__details'>
          <Grid container spacing={8}>
            <Grid item xs={3}>
              <img
                className='movie__img'
                src={
                  'https://image.tmdb.org/t/p/w500' +
                  (itemDetails?.poster_path || '')
                }
                alt=""
              />
            </Grid>
            <Grid item xs={9}>
              <h3>
                {itemDetails.release_date && itemDetails.release_date.split('-')[0]}
                {itemDetails.first_air_date && itemDetails.first_air_date.split('-')[0]}
              </h3>
              <h2>{itemDetails.title ? itemDetails.title.split(' ').slice(0, 4).join(' ') : itemDetails.name?.split(' ').slice(0, 4).join(' ')}</h2>
              <p>{itemDetails.overview}</p>
              <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }} spacing={3}>
                <Grid item xs={5} display={'flex'} alignItems={'center'}>
                  <PlayCircleOutlineIcon fontSize='large' />
                  <span className='data__publish'>WATCH THE TRAILER</span>
                </Grid>
                <Grid item xs={7} display={'flex'} alignItems={'center'}>
                  {itemDetails.production_companies && itemDetails.production_companies.length > 0 ? (
                    <p className='production__company'>
                      {`${Math.floor(itemDetails?.runtime / 60)}h ${itemDetails?.runtime % 60
                        }min`}
                      <span className='data__publish'>
                        <FiberManualRecordIcon fontSize='' />
                      </span>
                      {itemDetails.production_companies[0].name}
                      <span className='data__publish'>
                        <FiberManualRecordIcon fontSize='' />
                      </span>
                      {itemDetails.release_date && itemDetails.release_date}
                      {itemDetails.first_air_date && itemDetails.first_air_date}
                    </p>
                  ) : null}
                </Grid>
              </Grid>
              <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }} spacing={0}>
                <Grid item xs={2} display={'flex'} alignItems={'center'}>
                  <h2 className='average '>{itemDetails?.vote_average?.toFixed(1)}<span className='ms-1'>IMDB</span></h2>
                </Grid>
                <Grid item xs={6} >
                  <p className='mb-0 mt-3'>Status</p>

                  <p className='text-dark fw-bold'>{itemDetails.status}</p>
                </Grid>
                <Grid item xs={4} display={'flex'} alignItems={'center'} >
                 <button className='btn btn-dark rounded-0 me-2'><AddIcon/></button>
                 <button className='btn btn-bg-white rounded-0 border-1 border-dark '><FavoriteBorderIcon/></button>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Container>
      </Grid>
    </Loader>
  );
};

export default MoviesDetails;