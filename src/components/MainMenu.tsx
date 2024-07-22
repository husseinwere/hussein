import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import MenuLink from './MenuLink';
import { Josefin_Sans } from "next/font/google";

const garamond = Josefin_Sans({
    weight: ['600'],
    subsets: ['latin']
})

const menuLinks = [
    { path: '#experience', label: 'Experience' },
    { path: '#projects', label: 'Projects' },
    { path: '#contacts', label: 'Contacts' }
]

function MainMenu() {
    return (
        <>
            <AppBar elevation={0}>
                <Toolbar sx={{padding: '0 48px !important', minHeight: '48px !important'}}>
                    <Grid container alignItems="center" justifyContent='space-between'>
                        <Grid item>
                            <span className={garamond.className} style={{fontSize: '20px', fontWeight: 600}}>HUSSEIN WERE</span>
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