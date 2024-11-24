import Grid from '@mui/material/Grid2'
import React from 'react'

const Content = ({children}) => {
  return (
    <Grid padding={'40px 0px'}>
      {children}
    </Grid>
  )
}

export default Content
