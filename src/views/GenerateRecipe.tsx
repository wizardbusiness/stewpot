import React from 'react'
import {  Box, TextField, Button, Typography, } from '@mui/material';

function GenerateRecipe() {
  return (
    <Box sx={{padding: '2em', height: '100%', display: 'flex', flexDirection: 'column'}}>
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
      <fieldset style={{
        minHeight: '5vh',
        // flexGrow: 1,
        color: 'darkgrey',
        backgroundColor: '#f4f4f4',
        border: '1px solid lightgrey',
        borderRadius: '4px'

      }}
      >
        <legend>Output</legend>
        <Typography>...</Typography>
      </fieldset>
    </Box>
  )
}

export default GenerateRecipe;