import React from 'react';
import {Box, Grid, Card, CardContent, CardMedia} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { favorites } from '../../consts/viewMocks';

const RecipeCard = ({name, id, starred}) => {
  return (
        <Grid key={name} item>
          <Card 
            variant='outlined'
            sx={{
              height: 250, 
              width: 250, 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '15px',
            }}
          
          >
            <CardMedia 
                sx={{minHeight: '100%', minWidth: 150, filter: 'blur(2px)'}}
                image={`../../static/images/mockImages/stock-img-${id}.jpg`}
                title={name}
            />
            <CardContent sx={{height: '100%', display: 'flex', flexDirection: 'column', alignItems:'flex-end', gap: '1em'}}>

              {starred && <StarIcon  fontSize='large' sx={{color: '#fbc34b'}} />}
              {name}
            </CardContent>
          </Card>
        </Grid>
  )
}

export default RecipeCard;