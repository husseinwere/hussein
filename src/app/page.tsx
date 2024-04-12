import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Divider from '@mui/material/Divider';

function Home() {
  return (
      <>
        <Typography variant="h2" fontWeight={700}>Hussein Were</Typography>
        <Typography variant="h6" fontWeight={600}>Frontend Engineer</Typography>

        <Typography variant="body1">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </Typography>

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
              <Typography variant="body1" fontSize='16px'>
                I most enjoy building software in the sweet spot where design and engineering meet — things that look good 
                but are also built well under the hood. In my freetime, I love coding 2D or 3D websites with good design 
                and beautiful animations using WebGL with Three.js and GSAP.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </>
  )
}

export default Home