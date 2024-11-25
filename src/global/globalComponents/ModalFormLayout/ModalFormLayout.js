import React, { useContext } from 'react';
import Grid from '@mui/material/Grid2/Grid2';
import { Button, InputAdornment, TextField } from '@mui/material';
import { HiUserCircle } from 'react-icons/hi';
import { AuthCtx } from '../../../context/AuthContext';
import { TbMailFilled } from 'react-icons/tb';
import styles from './ModalFormLayout.module.css';
import { ViewCtx } from '../../../context/ViewContext';

const ModalFormLayout = ({children,formDataDetail}) => {

  return (
    <>
    {children}
    </>
  )
}

export default ModalFormLayout
