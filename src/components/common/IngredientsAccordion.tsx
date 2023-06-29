import { useEffect } from 'react';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography 
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material';
import { DataGrid, useGridApiRef, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { IngredientsAccordionProps } from '../../consts/interfaces/componentInterfaces';

const IngredientsAccordion = ({checked, selectedRows, columns, toggleAddRemoveRow}: IngredientsAccordionProps) => {

  return (
    <Accordion sx={{maxHeight: '100%'}}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography>Selected Ingredients</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: 225, overflow: 'scroll'}}>
        {checked.length > 0 ? 
          <DataGrid columns={columns} rows={selectedRows} hideFooter sx={{maxHeight: '10%'}}/> :
          <Typography sx={{display: 'flex', justifyContent:'center', color: "#acacac"}}>No Ingredients Selected</Typography>
        }
      </AccordionDetails>
    </Accordion>
  )
}

export default IngredientsAccordion;