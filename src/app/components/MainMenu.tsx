import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function MainMenu() {
  return (
    <AppBar elevation={1}>
        <Toolbar>
            <Typography>Welcome to the den</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default MainMenu