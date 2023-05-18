import React, {useState} from 'react';
import { Box, Button, Stack, Modal, FormGroup, FormControlLabel, Switch, Typography} from '@mui/material';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import IngredientSearchbar from './IngredientSearchbar';
import { pantryIngredients, pantryIngredient } from '../../consts/dummyData';
import { pantryRows, pantryColumns } from '../../consts/dummyData';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 700,
  backgroundColor:'#fff',
  border: '2px, solid, #acacac',
  boxShadow: 20,
  padding: '2em'
}

const AddIngredientModal = () => {
  const [ open, setOpen] = useState(false);
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Box>
      <Stack direction='row' alignItems='center' gap='1em'>
        <Typography color='#616161' fontSize='1.7em'>Get Started &gt;</Typography>
        <Button variant='outlined' size='large' onClick={handleOpen} sx={{padding: '1em'}}>+ Add Ingredients From Pantry</Button>
      </Stack>
      
      <Modal
        open={open}
        onClose={handleClose}
        arial-labelledby='modal-add-ingredients'
        aria-describedby='modal-add-ingredients-here'
      >
        <Box sx={modalStyle}>
          <IngredientSearchbar 
            justify='center' 
            btnText='Use Ingredient' 
            btnColor='primary' 
            searchDefText='Search Pantry'/>
          <FormGroup sx={{flexDirection: 'row', alignItems: 'center', padding:'2em'}}>
            <FormControlLabel control={<Switch defaultChecked />} label='Include common ingredients'/> 
            <FormControlLabel control={<Switch />} label='Include all pantry ingredients'/> 
          </FormGroup>
          <Typography>Selected Ingredients &gt;</Typography>
          {/* <DataGrid hideFooter columns={pantryColumns} rows={pantryRows} sx={{maxHeight: '70%'}} /> */}
        </Box>
      </Modal>
    </Box>
  )
}

export default AddIngredientModal;