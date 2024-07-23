import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import MenuLink from './MenuLink';
import { Anton } from "next/font/google";

const anton = Anton({
    weight: ['400'],
    subsets: ['latin']
})

const menuLinks = [
    { path: '#experience', label: 'EXPERIENCE' },
    { path: '#projects', label: 'PROJECTS' },
    { path: '#contacts', label: 'CONTACTS' }
]

function MainMenu() {
    return (
        <>
            <AppBar elevation={0}>
                <Toolbar sx={{padding: '0 48px !important', minHeight: '48px !important'}}>
                    <Grid container alignItems="center" justifyContent='space-between'>
                        <Grid item>
                            <span className={anton.className} style={{fontSize: '20px'}}>HUSSEIN WERE</span>
                        </Grid>
                        <Grid item>
                            <Grid container gap='12px'>
                                {
                                    menuLinks.map(item => {
                                        return <MenuLink label={item.label} path={item.path} key={item.path} />
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div style={{height: '48px'}}></div>
        </>
    )
}

export default MainMenu