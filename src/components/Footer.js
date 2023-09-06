import { Grid } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div className="row center footer">
      All right reserved
      <Grid container>
        <Grid item md={6} sm={6}>1</Grid>
        <Grid item md={6} sm={6}>2</Grid>
      </Grid>
    </div>
  )
}

export default Footer
