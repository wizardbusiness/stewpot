import React from 'react'
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography 
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material';
import { DataGrid, useGridApiRef, GridRowsProp } from '@mui/x-data-grid';

const IngredientsAccordion = ({checked, selectedIngRows, columns}) => {
  return (
    <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Selected Ingredients</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {checked.length > 0 ? 
                <DataGrid columns={columns} rows={selectedIngRows} hideFooter sx={{maxHeight: '25%'}}/> :
                <Typography sx={{display: 'flex', justifyContent:'center', color: "#acacac"}}>No Ingredients Selected</Typography>
              }
            </AccordionDetails>
          </Accordion>
  )
}

export default IngredientsAccordion;