import { 
  Stack, 
  Box,
  Typography,
  Slider,
  Checkbox
 } from "@mui/material";

const Accessibility = () => {
  return (
    <Stack id='accessibility-section' gap={2}>
      <Typography fontSize='2em'>Accessibility Options</Typography>
      <Box sx={{width: 300}}>
        <Typography variant='h6'>Font Size</Typography>
        <Stack direction='row' alignItems='center' gap={2}>
          <Typography fontStyle='italic' fontSize='1em' color='gray'>A</Typography>
          <Slider 
            aria-label='Font Size'
            defaultValue={25}
            step={25}
            marks
          />
          <Typography fontStyle='italic' fontSize='1.5em' color='gray'>A</Typography>
        </Stack>
      </Box> 
      <Stack direction='column' alignItems='flex-start'>
        <Typography variant='h6'>Turn Off Animations</Typography>
        <Checkbox />
      </Stack>
                         
    </Stack>
  )
}

export default Accessibility;