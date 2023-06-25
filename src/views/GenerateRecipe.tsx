import React from 'react'
import {  Box, TextField, Button, Typography, } from '@mui/material';

function GenerateRecipe() {
  return (
    <>
      <Typography paddingBottom='0.5em' color='#616161' variant='h2'>Generate Recipe</Typography> 
      <Box sx={{width: '100%'}}>
        <TextField  
          id='prompt-textarea'
          multiline
          rows={8}
          label='Write Recipe Prompt'
          // placeholder="...write your recipe prompt here"
          sx={{width: 'inherit'}}
        ></TextField>
        <Button variant='contained' size='large'>Create Recipe</Button>
      </Box>
      <Box padding='2em'></Box>
      <Box style={{
        padding: '1em',
        height: '100%',
        flexGrow: 1,
        color: 'darkgrey',
        backgroundColor: '#f4f4f4',
        borderRadius: '4px'
      }}
      >
        {/* <legend>Output</legend> */}
        <Typography fontSize='1.2em'>...</Typography>
      </Box>
    </>
  )
}

export default GenerateRecipe;