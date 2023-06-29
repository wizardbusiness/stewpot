import { 
  Stack,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const AccountInfo = () => {
  return (
    <Stack id='account-info-section'>
      <Typography fontSize='2em'>Account Info</Typography>
      <Grid container gap={1} paddingTop={2} paddingBottom={2}>
        <Grid item md={2}>
          <Typography>Email</Typography>
        </Grid>
        <Grid  item md={3.7}> 
          <TextField value='gkime91@gmail.com' disabled />
        </Grid> 
        <Grid item md={6}> 
          <Typography>Change</Typography>                      
          
        </Grid>
        <Grid item md={2}> 
        <Typography alignSelf='center'>Password</Typography>
        </Grid>
        <Grid item md={3.7}>
        <TextField type='password' value='123456' disabled/>
        </Grid>
        <Grid item md={6}>
        <Typography>Change</Typography>
        </Grid>
      </Grid>
      <Stack gap={2} paddingBottom={2}>
        <Typography variant='h6' color='gray'>Billing Info</Typography>
        <Typography>Payment Method:</Typography>
        <Stack direction='row' gap={2}>
          <Typography>Mastercard: **** **** **** 0909</Typography>
          <Typography>Remove</Typography>
        </Stack>
        <Stack direction='row'>
          <Button>+ Add</Button>
        </Stack>
        <Stack direction='row' gap={3}>
          <Button variant='outlined'>
            Delete Plan
          </Button>
          <Button variant='outlined'>
            Suspend Plan
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default AccountInfo;