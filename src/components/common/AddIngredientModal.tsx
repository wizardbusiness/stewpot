import {useState, useEffect} from 'react';

import { Box, 
  Button, 
  Stack, 
  Modal, 
  FormGroup, 
  FormControlLabel, 
  Switch, 
  Typography
} from '@mui/material';
import { GridRowsProp } from '@mui/x-data-grid';
import IngredientSearchbar from './IngredientSearchbar';
import IngredientsAccordion from './IngredientsAccordion';
import { pantryIngredients, pantryIngredient, pantryRows, pantryColumns } from '../../consts/dummyData';

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
  padding: '3em',
}

const AddIngredientModal = ({infoText, pantry, btnText, searchTxt, includeControls}) => {
  const [ open, setOpen] = useState(false);
  const [ ingredients, setIngredients ] = useState<pantryIngredient[]>([]);
  const [ ingRows, setIngRows ] = useState<GridRowsProp>([])
  const [ selectedIngRows, setSelectedIngRows ] = useState<GridRowsProp>([])
  const [ checked, setChecked ] = useState<string[]>([])

  useEffect(() => {
    setIngredients(pantryIngredients);
    setIngRows(pantryRows);
  }, []);


  const handleToggle = (value: string) => {
    const currentIndex: number = checked.indexOf(value);
    const updatedChecked = [...checked];
    if (currentIndex === -1) {
      updatedChecked.push(value);
    } else {
      updatedChecked.splice(currentIndex, 1);
    }
    setChecked(updatedChecked);
  }

  const toggleAddRemoveRow = (ingredient: string) => {
    const currentIndex = checked.indexOf(ingredient);
    const selectedRows = [...selectedIngRows]
    if (currentIndex === -1) {
      ingRows.forEach(row => {
      if (ingredient === row.ingredient) selectedRows.push(row);
      });
    } else {
      selectedRows.splice(currentIndex, 1);
    }
    setSelectedIngRows(selectedRows);
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Box>
      <Stack direction='row' alignItems='center' gap='1em'>
        {/* <Typography color='#616161' fontSize='1.7em'>{infoText}</Typography> */}
        <Button variant='outlined' size='large' onClick={handleOpen} sx={{padding: '1em'}}>{btnText}</Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        arial-labelledby='modal-add-ingredients'
        aria-describedby='modal-add-ingredients-here'
      >
        <Box sx={modalStyle}>
          <IngredientSearchbar  
            ingredients={ingredients}
            checked={checked}
            setChecked={setChecked}
            handleToggle={handleToggle}
            toggleAddRemoveRow={toggleAddRemoveRow}
            justify='center'
            searchTxt={searchTxt}
            />
          {includeControls && 
            <FormGroup sx={{flexDirection: 'row', alignItems: 'center', padding:'2em'}}>
              <FormControlLabel control={<Switch defaultChecked />} label='Include common ingredients'/> 
              <FormControlLabel control={<Switch />} label='Include all pantry ingredients'/> 
            </FormGroup> || 
            <Box padding='1em' ></Box>}
          <IngredientsAccordion checked={checked} columns={pantryColumns} selectedIngRows={selectedIngRows} toggleAddRemoveRow={toggleAddRemoveRow} />
          <Box sx={{width: '100%', height: '100', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '1em'}}>
            <Button size='large' variant='contained'>Add Ingredients</Button>          
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default AddIngredientModal;