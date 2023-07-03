import React, { SyntheticEvent, useState } from 'react'
import {  Box, TextField, Button, Typography, } from '@mui/material';
import chefAI from '../../server/gpt/chefAI';

function GenerateRecipe() {
  const [ prompt, setPrompt ] = useState<string>();
  const [ response, setResponse ] = useState<string>();

  const handleSubmitRequest = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('request sent')
    try {
      const response = await fetch('/api/generate');
    } catch(error) {
      console.error(error);
    }
  }


  return (
    <>
      <Typography paddingBottom='0.5em' color='#616161' variant='h2'>Generate Recipe</Typography> 
        <form style={{width: '100%'}} onSubmit={handleSubmitRequest}>
          <TextField
          id='prompt-textarea'
          multiline
          rows={8}
          label='Write Recipe Prompt'
          // placeholder="...write your recipe prompt here"
          sx={{width: 'inherit'}}
        ></TextField>
        <Button variant='contained' size='large' type='submit'>Create Recipe</Button>
        </form>
      <Box padding='2em'></Box>
      <Box sx={{
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