"use client"

import React from 'react'
import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';

type Props = {
    label: string,
    path: string
}

const CustomLink = styled(Link)({
    color: '#333',
    fontSize: '12px',
    fontWeight: 500,
    '&:hover': {
        color: '#000'
    }
}) as typeof Link;

function MenuLink({ label, path }: Props) {
  return (
    <CustomLink href={path} underline='none' color="inherit">{label}</CustomLink>
  )
}

export default MenuLink