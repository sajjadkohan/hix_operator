import React, { useContext } from 'react'
import Backdrop from '@mui/material/Backdrop';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  boxShadow: 24,
  borderRadius : '12px',
  p: 4,
};
const ModalLayout = ({handleOpen,handleClose,children,hasOpen}) => {



  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={hasOpen}
    onClose={handleClose}
    closeAfterTransition
    slots={{ backdrop: Backdrop }}
    slotProps={{
      backdrop: {
        timeout: 500,
      },
    }}
  >
    <Fade in={hasOpen}>
    <Box sx={style}>
        {children}
    </Box>
    </Fade>
</Modal>
  )
}

export default ModalLayout