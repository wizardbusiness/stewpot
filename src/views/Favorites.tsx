import React, {useState, useEffect} from 'react';
import {Box, Stack, Grid, Card, CardContent, CardActions, CardMedia, Button, Typography, TextField} from '@mui/material';
import { favorites } from '../consts/viewMocks';

export default function Favorites() {
  // saved recipes

  return (
    <Box sx={{padding: '2em'}}>
      <Stack direction='row' sx={{width:'100%'}}>
        <TextField variant='outlined' sx={{width: '25%'}} label='...Search Favorite Recipes'/>
        <Button variant='contained' size='large'>Go</Button>
      </Stack>
      <Box sx={{width: '100%', height: '2em'}}/>
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
                borderRadius: '15px',
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