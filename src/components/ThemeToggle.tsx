"use client"

import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'

import React, { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const toggleStyles = {
    cursor: 'pointer'
}

function ThemeToggle() {
    const {mode, setMode} = useContext(ThemeContext)

    let toggle
    if(mode === 'dark') {
        toggle = <Tooltip title='Light mode'><Typography variant='h4' style={toggleStyles} onClick={() => {setMode('light')}}>☀️</Typography></Tooltip>
    }
    else {
        toggle = <Tooltip title='Dark mode'><Typography variant='h4' style={toggleStyles} onClick={() => {setMode('dark')}}>🌙</Typography></Tooltip>
    }

    return (toggle)
}

export default ThemeToggle
