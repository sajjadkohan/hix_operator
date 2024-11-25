import React, { useContext } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { ViewCtx } from '../../../../../context/ViewContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};
const AddProductModal = ({handleOpen,handleClose}) => {

    const {showAddProductModal,setShowAddProductModal} = useContext(ViewCtx);


  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={showAddProductModal}
    onClose={handleClose}
    closeAfterTransition
    slots={{ backdrop: Backdrop }}
    slotProps={{
      backdrop: {
        timeout: 500,
      },
    }}
  >
    <Fade in={showAddProductModal}>
      <Box sx={style}>
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Text in a modalddd
        </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Fade>
</Modal>
  )
}

export default AddProductModal