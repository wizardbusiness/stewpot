import React from 'react'
import { Card, CardContent, CardMedia, Typography, Box, Paper } from '@mui/material';

const cardStyle = {
  card: {
    height: 900,
    width: 900,
    position: 'absolute',
    borderRadius: 6,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #fbc34b',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    color: '#616161',
    backgroundColor:'white',
    overflow: 'scroll',
    margin: '0px 4.5em 0px 4.5em'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    color: 'inherit'
  }
}
const RecipeCardExpanded = ({name, image}) => {
  return (
    <Card className='card' variant='outlined' sx={{...cardStyle.card, backgroundImage: `url(${image})`, backgroundSize: '150%'}}>
      {/* <CardMedia sx={{height: '100%'}}image={image}/> */}
      <CardContent sx={cardStyle.content}>
        <Typography sx={cardStyle.text} variant='h2'>{name}</Typography>
        <section style={cardStyle.section}>
          <Typography variant='h3'>Description</Typography>
          <Typography variant='body1'>
            This document provides a guide to help with the important task of choosing the correct Apple.
            </Typography>
        </section>
        
      </CardContent>
    </Card>
  )
}

export default RecipeCardExpanded