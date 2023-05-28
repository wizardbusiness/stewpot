import React from 'react';
import {Box,  Grid, Card, Stack, CardContent, CardMedia, Typography, Divider} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { favorites } from '../../consts/dummyData';
import { StarBorder } from '@mui/icons-material';
const cardStyle = {
  card: {
    height: 250, 
    width: 250, 
    border: '1px solid #fbc34b',
    borderRadius: '15px',
    boxShadow: '2px 2px 6px darkgrey',
  },
  cardContent: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    opacity: 0.9,
    height: '100%', 
    padding: '0',
    transition: '0.2s',
    '&:hover': {
      opacity: 0.7
    }
    
  },
  cardMedia: {
    position: 'absolute',
    top: 0,
    left: 0,
    minHeight: '100%', 
    minWidth: '87%', 
    filter: 'blur(2px)',
    zIndex: -1,
  },
  recipeHeading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1em 1em 0 1em',
    maxWidth: '90%',
    minHeight: '35%',
    // textDecorationLine: 'underline',
    // textDecorationThickness: '1px',
    textShadow: '1px 1px 10px black',
    opacity: 1,
    transition: '0.3s',
    '&:hover': {
      opacity: 1
    }

  },
  recipeDescription: {
    padding: '1em',
    opacity: 1,
    textShadow: '1px 1px 10px black',
    // background: 'linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
    // '-webkit-background-clip': 'text',
    // '-webkit-text-fill-color': 'transparent',
    transition: '0.3s',
    '&:hover': {
      textShadow: '1px 1px 10px black',
      // background: 'linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))',
      // '-webkit-background-clip': 'text',
      // '-webkit-text-fill-color': 'transparent',
      opacity: 1,
      
    }
  },
  star: {
    color: '#fbc34b',
    transform: 'translateX(5%) translateY(10%)'
  }
  
}

const RecipeCard = ({name, id, starred}) => {
  return (
        <Grid key={name} item>
          <Card 
            variant='outlined'
            sx={cardStyle.card}
          >
            <CardContent sx={cardStyle.cardContent}>
              <Stack gap={2}>
                <Box sx={cardStyle.recipeHeading}>
                  <Typography variant='h6' >{name}</Typography>

                </Box>
                <Divider color='lightgrey' ></Divider>
                {/* <Box sx={cardStyle.recipeDescription}>
                  <Typography>Delicious salmon filet with pine nuts and fresh spring greens</Typography>
                </Box> */}
              </Stack>
              {starred ? <StarIcon fontSize='large' sx={cardStyle.star} /> : <StarBorder fontSize='large' sx={cardStyle.star} />}
              <CardMedia 
                sx={cardStyle.cardMedia}
                image={`../../static/images/mockImages/stock-img-${id}.jpg`}
                title={name}
              />
            </CardContent>
          </Card>
        </Grid>
  )
}

export default RecipeCard;