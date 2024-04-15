import { Chip, Grid, Typography } from '@mui/material'
import React from 'react'

type Props = {
    period: string
    title: string
    company: string
    link?: string
    description: string
    skills: string[]
}

const chipStyles = {
    backgroundColor: '#bbb',
    color: '#333'
}

function ExperienceCard(experience: Props) {
  return (
    <Grid container className='experience'>
        <Grid item md={4}>
            <Typography className="period">{experience.period}</Typography>
        </Grid>
        <Grid item md={8}>
            <Typography variant='h6' sx={{marginBottom: 1, fontWeight: 600, letterSpacing: '-1px'}}>{experience.title} · {experience.company}</Typography>
            <Typography variant='body1' fontSize='16px'>{experience.description}</Typography>
            <div className="skills">
                {experience.skills.map(skill => <Chip key={skill} label={skill} sx={chipStyles} /> )}
            </div>
        </Grid>
    </Grid>
  )
}

export default ExperienceCard