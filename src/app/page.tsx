import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Divider from '@mui/material/Divider';
import ExperienceCard from "@/components/ExperienceCard";
import Button from "@mui/material/Button";
import Launch from "@mui/icons-material/Launch";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import { Link, Tooltip } from "@mui/material";

const experiences = [
  {
    period: "2022 - Present",
    title: "Frontend Engineer",
    company: "JUMIA GROUP",
    link: "https://group.jumia.com",
    description: `
      Build and maintain critical features used to construct the Vendor platform for the e-commerce application. 
      Work closely with cross-functional teams, including developers, designers, and product managers, to implement 
      business requirements.
    `,
    skills: ["TypeScript", "Angular", "Behavior Driven Development", "Automated tests"]
  },
  {
    period: "2021 - 2022",
    title: "Lead Frontend Developer",
    company: "MAKITI PLUS",
    description: `
      Lead the development and architecture of a new e-commerce frontend application to production. This led to a 
      significant increase in user engagement. Reported directly to the company CTO.
    `,
    skills: ["TypeScript", "Angular", "Automated tests", "AWS", "Google Analytics"]
  },
  {
    period: "June - Sept 2021",
    title: "Software Developer",
    company: "KEPHIS",
    link: "https://kephis.go.ke",
    description: `
      Worked on a project to design and develop a Lab Information Management System being used by internal employees to date.
    `,
    skills: ["PHP Laravel", "jQuery", "JavaScript"]
  },
  {
    period: "2019 - 2021",
    title: "Software Developer",
    company: "Freelance",
    description: `
      Developed, maintained and shipped production code for client websites.
    `,
    skills: ["React", "jQuery", "JavaScript", "Wordpress", "PHP Laravel"]
  }
]

const socialLinks = [
  { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/hussein-were-4a94821a0/', tooltip: 'Linkedin' },
  { icon: <GitHubIcon />, link: 'https://github.com/husseinwere/', tooltip: 'Github' },
  { icon: <CodeIcon />, link: 'https://codepen.io/Hussein-Were', tooltip: 'Codepen' },
  { icon: <InstagramIcon />, link: 'https://www.instagram.com/hussseindot/', tooltip: 'Instagram' }
]

function Home() {
  return (
      <>
        <Typography variant="h2" fontWeight={700} letterSpacing={'-2px'}>Hussein Were</Typography>
        <Typography variant="h6" fontWeight={600} letterSpacing={'-1px'}>Frontend Engineer</Typography>

        <Grid container alignItems='center' justifyContent='space-between'>
          <Typography variant="body1" style={{marginBottom: '12px'}}>
            I build pixel-perfect, engaging, and accessible digital experiences.
          </Typography>
          <div className="social-icons">
            <Grid container gap={1}>
              {
                socialLinks.map(social => 
                  <Tooltip title={social.tooltip} key={social.tooltip}>
                    <Link href={social.link} target='_blank' rel='noreferrer'>{social.icon}</Link>
                  </Tooltip>
                )
              }
            </Grid>
          </div>
        </Grid>

        <Divider sx={{margin: '24px 0'}}></Divider>
        <Grid container justifyContent='flex-end'>
          <Grid item maxWidth='600px'>
            <div id="about" className="paragraph-section">
              <Typography variant="body1" fontSize='16px' marginBottom={4}>
                Back as a Computer Science freshman, I decided to try my hand at freelance, creating websites for any
                small and willing business I could find. I tumbled head first into the rabbit hole of coding and web
                development. Fast-forward to today, and I've had the privilege of building software for a parastatal, 
                the local government, a start-up, and a huge corporation.
              </Typography>
              <Typography variant="body1" fontSize='16px'>
                I most enjoy building software in the sweet spot where design and engineering meet — things that look good 
                but are also built well under the hood. In my freetime, I love coding 2D or 3D websites with good design 
                and beautiful animations using WebGL with Three.js and GSAP.
              </Typography>
            </div>
            <div id="experience" className="paragraph-section">
              { experiences.map(experience => <ExperienceCard key={experience.period} { ...experience } />) }
              <Button variant="outlined" size="large" endIcon={<Launch fontSize="small" />}>View full resume</Button>
            </div>
          </Grid>
        </Grid>
      </>
  )
}

export default Home