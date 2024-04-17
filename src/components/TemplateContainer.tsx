"use client"

import { ThemeContext } from '@/context/ThemeContext'
import Container from '@mui/material/Container'
import React, { useContext } from 'react'
import MainMenu from './MainMenu'
import Footer from './Footer'
import Background from './Background'

export default function TemplateContainer({ children }: { children: React.ReactNode }) {
    const {mode} = useContext(ThemeContext)
    return (
        <>
            <div id="page" className={mode}>
                <MainMenu />
                <Background />
                <div id="glassContainer"></div>
                <div id='frame' className={mode}></div>
                <div id="pageContent" className={mode}>
                <Container sx={{paddingTop: '20px'}} maxWidth='md'>
                    {children}
                </Container>
                </div>
                <Footer />
            </div>
        </>
    )
}
