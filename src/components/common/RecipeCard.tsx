import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities'
import {Box,  Grid, Card, Stack, CardContent, CardMedia, Typography, Divider, Modal} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { StarBorder } from '@mui/icons-material';
import RecipeCardExpanded from './RecipeCardExpanded';
import { RecipeCardProps } from '../../consts/interfaces/componentInterfaces';


const cardStyle = {
  card: {
    height: 250, 
    width: 250, 
    border: '1px solid #fbc34b',
    borderRadius: '15px',
    boxShadow: '2px 2px 6px darkgrey',
  },
  modalClickArea: {
    height: 250,
    width: 250,
    position: 'absolute',
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

const RecipeCard = ({starred, id, title, image, ...recipe}: RecipeCardProps) => {

  // opens and closes expanded recipe card
  const [ open, setOpen ] = useState<boolean>(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: id});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
        <Grid item key={title} ref={setNodeRef} style={{transform: CSS.Transform.toString(transform), transition}} {...attributes} {...listeners} >
          <Modal 
          open={open}
          onClose={handleClose}
          aria-labelledby='recipe information'
          aria-describedby='A recipe card containing all information about the selected recipe.'
          >
            <Box>
              <RecipeCardExpanded id={id} title={title} image={image} {...recipe}  />
            </Box>
          </Modal>
          <Card
            variant='outlined'
            sx={cardStyle.card}
          >
            <CardContent sx={cardStyle.cardContent}>
              <Box sx={cardStyle.modalClickArea} onDoubleClick={handleOpen}></Box>
              <Stack gap={2}>
                <Box sx={cardStyle.recipeHeading}>
                  <Typography variant='h6' >{title}</Typography>

                </Box>
                <Divider color='lightgrey'></Divider>
                {/* <Box sx={cardStyle.recipeDescription}>
                  <Typography>Delicious salmon filet with pine nuts and fresh spring greens</Typography>
                </Box> */}
              </Stack>
              {starred ? <StarIcon fontSize='large' sx={cardStyle.star} /> : <StarBorder fontSize='large' sx={cardStyle.star} />}
              <CardMedia 
                sx={cardStyle.cardMedia}
                image={image}
                title={title}
              />
            </CardContent>
          </Card>
        </Grid>
  )
}

export default RecipeCard;