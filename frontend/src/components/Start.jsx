import React, { useContext } from 'react';
import Intro from '../pages/Intro';
import '../style/Start.css'; 
import { QuizContext } from '../context/QuizHolder';
import neetImg from "../assets/neetImg.webp";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const Start = () => {
  const { setStart } = useContext(QuizContext);
  return (
    <>
    <Intro/>
    <div className='start-container'>
      {/* <button className='start-btn' onClick={ () => setStart(true)}>Start</button> */}
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image={neetImg}
          alt="green iguana"
          className='neet-img'
        /> */}
        <img src={neetImg} className='neet-img' />
        <CardContent className='card-info'>
          <Typography gutterBottom variant="h5" component="div">
            NEET Testline
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Practice & Revision Test for NEET
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='btn-card'>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <button className='start-btn' onClick={ () => setStart(true)}>Start</button>
      </CardActions>
    </Card>
    </div>
    </>
  )
}

export default Start
