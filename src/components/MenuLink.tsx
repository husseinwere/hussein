"use client"

import React from 'react'
import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Antonio } from 'next/font/google';

type Props = {
  label: string,
  path: string
}

const antonio = Antonio({
  weight: ['400'],
  subsets: ['latin']
})

const CustomLink = styled(Link)({
  fontSize: '12px',
  fontWeight: 600,
  transition: 'color .4s',
  '&:hover': {
    color: '#0097e6'
  },
  ...antonio.style
}) as typeof Link;

function MenuLink({ label, path }: Props) {
  return (
    <CustomLink href={path} underline='none' color="inherit">{label}</CustomLink>
  )
}

export default MenuLink