import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import './card.css'
const card = (props) => {
  if (!props.trend.poster_path) {
    return null;
  }
  return (
    <Card key={props.trend.id} sx={{ maxWidth: 300 }}>
      <CardActionArea  sx={{ position:'relative' }}>
        <Link to={`/movie-details/${props.trend.media_type}/${props.trend.id}`} >
          <img className='card__img' src={'https://image.tmdb.org/t/p/w500' + props.trend.poster_path} alt="" srcset="" />
          <div className="overlay">
            <span>{props.trend.vote_average?.toFixed(1)}</span>
          </div>
        </Link>
        <CardContent sx={{ textAlign: "center", fontWeight: "bold" }}>
        {props.trend.title ? props.trend.title.split(' ').slice(0, 4).join(' ') : props.trend.name?.split(' ').slice(0, 2).join(' ')}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default card