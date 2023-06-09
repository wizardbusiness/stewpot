import { 
  Stack,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio
 } from "@mui/material";

const Theme = ({sectionHeaderStyle}) => {
  return (
    <Stack id='theme-section'>
      <Typography sx={sectionHeaderStyle}>Theme</Typography>
      <Stack>
        <Typography>Choose Theme: </Typography>
        <FormControl>
          <RadioGroup 
            row 
            aria-labelledby='theme-form-control-switch-theme'
          >
            <FormControlLabel value='light-theme' control={<Radio checked/>} label='Light'/>
            <FormControlLabel value='dark-theme' control={<Radio />} label='Dark' />                    
          </RadioGroup>
        </FormControl>
      </Stack>
    </Stack>  
  )
}

export default Theme;