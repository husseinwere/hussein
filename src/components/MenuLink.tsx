"use client"

import React from 'react'
import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';

type Props = {
    label: string,
    path: string
}

const CustomLink = styled(Link)({
    fontSize: '12px',
    fontWeight: 600,
    opacity: 0.75,
    transition: 'opacity .4s',
    '&:hover': {
      opacity: 1
    }
}) as typeof Link;

function MenuLink({ label, path }: Props) {
  return (
    <CustomLink href={path} underline='none' color="inherit">{label}</CustomLink>
  )
}

export default MenuLink