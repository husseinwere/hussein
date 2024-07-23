import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ThemeToggle from './ThemeToggle'
import { Antonio } from 'next/font/google'

const antonio = Antonio({
  weight: ['400'],
  subsets: ['latin']
})

function Footer() {
  return (
    <AppBar position="fixed" elevation={0} sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar sx={{padding: '0 48px !important', minHeight: '48px !important'}}>
            <Grid container alignItems='center' justifyContent='space-between'>
                <ThemeToggle />
                <Typography sx={antonio.style} variant='body2'>&copy; 2024 · HUSSEIN WERE</Typography>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}

export default Footer