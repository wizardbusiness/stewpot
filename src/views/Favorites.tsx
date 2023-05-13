import React, {useState, useEffect} from 'react';
import {Box, Grid, Card, CardContent, CardActions, CardMedia, Button, Typography,} from '@mui/material';
import { favorites } from '../consts/viewMocks';

export default function Favorites() {
  // saved recipes

  return (
    <Box sx={{padding: '3em'}}>
      <Grid container gap={5}>
        {favorites.map((recipe, index) => (
          <Grid key={recipe.name} item>
            <Card 
              variant='outlined'
              sx={{
                height: 250, 
                width: 250, 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
              }}
            
            >
              <CardMedia 
                  sx={{minHeight: '100%', minWidth: 150, filter: 'blur(2px)'}}
                  image={`../../static/images/mockImages/stock-img-${index + 1}.jpg`}
                  title={recipe.name}
              />
              <CardContent>
                {recipe.name}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    
  )
}