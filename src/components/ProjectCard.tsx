import { Chip, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type Props = {
    image: string
    title: string
    link?: string
    description: string
    skills: string[]
}

const chipStyles = {
    backgroundColor: '#bbb',
    color: '#333'
}

function ProjectCard(project: Props) {
  return (
    <Grid container className='experience'>
        <Grid item md={4}>
            <img src={'/hussein' + project.image} style={{width: '80%', mixBlendMode: 'normal'}} />
        </Grid>
        <Grid item md={8}>
            <Typography variant='h6' sx={{marginBottom: 1, fontWeight: 600, letterSpacing: '-1px'}}>{project.title}</Typography>
            <Typography variant='body1' fontSize='16px'>{project.description}</Typography>
            <div className="skills">
                {project.skills.map(skill => <Chip key={skill} label={skill} sx={chipStyles} /> )}
            </div>
        </Grid>
    </Grid>
  )
}

export default ProjectCard