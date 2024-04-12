import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from '@/assets/images/sign.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MenuLink from './MenuLink';
import Image from 'next/image';
import { Cormorant_Garamond } from "next/font/google";

const garamond = Cormorant_Garamond({
    weight: ['700'],
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
                <Toolbar sx={{padding: '0 68px !important'}}>
                    <Grid container alignItems="center" justifyContent='space-between'>
                        <Grid item>
                            {/* <Image src={Logo} alt='Logo' height={48} /> */}
                            <span className={garamond.className} style={{fontSize: '20px', color: '#000', fontWeight: 700}}>HUSSEIN WERE</span>
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
            <div style={{height: '64px'}}></div>
        </>
    )
}

export default MainMenu