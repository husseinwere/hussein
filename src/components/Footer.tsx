import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ThemeToggle from './ThemeToggle'

function Footer() {
  return (
    <AppBar position="fixed" elevation={0} sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar sx={{padding: '0 48px !important', minHeight: '48px !important'}}>
            <Grid container alignItems='center' justifyContent='space-between'>
                <ThemeToggle />
                <Typography variant='body2'>&copy; 2024 · Hussein Were</Typography>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}

export default Footer