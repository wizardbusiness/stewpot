import { 
  Modal,
  Stack,
  Button,
  Typography
} from "@mui/material"

const modalStyles = {
  height: '15%',
  width: '15%',
  position: 'absolute',
  top: '45%',
  left: '35%',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  backgroundColor: 'white',
  padding: '2em'

}

const HelperModal = ({open, textContent, handleCloseDialog, handleCloseSettings, handleSaveChanges, handleDontSaveChanges, saveBtnText, exitBtnText }) => {
  return (
    <Modal 
      open={open}
    >
      <Stack sx={modalStyles}>
      <Typography>{textContent}</Typography>
      <Stack direction='row' >
        
        <Button 
          onClick={() => {
            handleCloseDialog();
            handleCloseSettings();
            handleDontSaveChanges();
          }}
        >
            {saveBtnText}
          </Button>
        <Button 
          onClick={() => {
            handleCloseDialog();
            handleCloseSettings();
            handleSaveChanges();
          }}
        >
          {exitBtnText}
        </Button>
      </Stack>
      </Stack>
    </Modal>
  )
}

export default HelperModal;