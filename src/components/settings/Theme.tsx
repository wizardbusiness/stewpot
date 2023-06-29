import { 
  Stack,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio
 } from "@mui/material";

const Theme = () => {
  return (
    <Stack id='theme-section'>
      <Typography fontSize='2em'>Theme</Typography>
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