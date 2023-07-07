import React, { SyntheticEvent, useEffect, useState } from 'react'
import {  Box, TextField, Button, Typography, } from '@mui/material';
import { recipeInterface } from '../consts/interfaces/componentInterfaces'

function GenerateRecipe() {
  const [ prompt, setPrompt ] = useState<string>();
  const [ response, setResponse ] = useState<recipeInterface>();
  const [ recipeJSXElements, setRecipeJSXElements ] = useState<JSX.Element[]>([]);

  

  useEffect(() => {
    const renderFormattedResponse = () => {
      const elements: JSX.Element[] = [];
      for (const key in response) {
        if (key === 'title') elements.push(<Typography variant='h4'>{response.title}&#13;</Typography>)
        else if (key === 'description') elements.push(<Typography variant='body1'>{response.description}&#13;</Typography>)
        else if (key === 'extendedIngredients' || key === 'instructions') {
          const list = response[key]?.map(step => <li>{step}</li> ) // had to change this to string for prototyping, change back to ingredient interface when ready.
          elements.push(<ol>{list}&#13;</ol>)
        }
        else if (key === 'image') elements.push(<img src={response[key]} style={{height: 300, width: 300}}></img>)
      }
      return elements;
    }
    setRecipeJSXElements(renderFormattedResponse())
  }, [response])

  const handleInput = (e) => {
    setPrompt(e.target.value);
  }

  const handleSubmitRequest = async (e: SyntheticEvent) => {
    e.preventDefault();
    const body = {
      prompt
    }
    try {
      const response = await fetch('./api/ai/recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      });
      const recipe = await response.json();
      setResponse(recipe);
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
          onChange = {handleInput}
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
        <Typography fontSize='1.2em'>...{recipeJSXElements}</Typography>
      </Box>
    </>
  )
}

export default GenerateRecipe;