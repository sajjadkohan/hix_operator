import React from 'react'
import Content from '../../dashbord/content/Content'
import Grid from '@mui/material/Grid2'
import UsersList from './UsersList'
import ChatLayout from './ChatLayout'

const OperatorChatPage = () => {
  return (
    <Content>
      <Grid spacing={1} container size={12}>
        <Grid spacing={1} item size={5}><UsersList /></Grid>
        <Grid spacing={1} item size={7}><ChatLayout /></Grid>

      </Grid>
    </Content>
  )
}

export default OperatorChatPage
