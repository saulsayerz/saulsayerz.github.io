import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';


function Projects() {

    const openTwitter = () => {
        console.log('twitter terbuka')
      };


    return (
    <Box id="Projects">
        <Box sx={{ flexGrow: 1, display: 'flex', width:'75%', margin: '0 auto', mt: 10, backgroundColor: 'gray'}}>
        <Grid container spacing={5}>
            <Grid item lg={4} style={{ maxWidth: "100%" }}>
                <Box sx={{ minWidth: '220px'}}>
                <   Avatar alt="Saul Sayers" src="/saulprofpic.jpg" sx={{ width: '50%',height: '50%', margin: '0 auto' }}/>
                <Typography sx={{width: '100%', fontSize: '2.5em',  fontFamily: 'Verdana, Arial, Tahoma, Serif;', fontWeight: 'medium', mt:1,mb:1, textAlign: 'center'}}>
                    Saul Sayers
                </Typography>
                <Typography sx={{width: '100%', fontSize: '1.3em', color: 'gray', mt:1,mb:1, textAlign: 'center'}}>
                    Undergraduate Informatics Student in Institut Teknologi Bandung
                </Typography>
                <Box sx={{display:"flex", justifyContent: 'center'}}>
                    <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={openTwitter} color="inherit">
                        <LinkedInIcon  fontSize = "large" color="info"/>
                    </IconButton>
                    <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={openTwitter} color="inherit">
                        <EmailIcon  fontSize = "large" color="info"/>
                    </IconButton>
                    <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={openTwitter} color="inherit">
                        <InstagramIcon  fontSize = "large" color="info"/>
                    </IconButton>
                    <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={openTwitter} color="inherit">
                        <TwitterIcon  fontSize = "large" color="info"/>
                    </IconButton>
                </Box>

                </Box>
            </Grid>
            <Grid item lg={8} style={{ maxWidth: "100%",  margin: '0 auto'}}>
            <Box sx={{ minWidth: '220px'}}>
            <Typography variant="h3" component="h4" color="rgba(30,30,30,0.8)" sx={{mb:2, ml:0, minWidth: '220px'}}>
                 Projects
            </Typography>
            <Typography variant="h6" sx={{mb:3, minWidth: '220px'}}>
                I'm a student from ITB's School of Electrical Engineering and Informatics. I'm currently in my fifth semester majoring in Informatics, studying to be a developer, as I am passionate especially in web development and desktop app development. I also have a passion for learning and sharing my knowledge with others a public as possible.
            </Typography>
            <Typography variant="h6">
                I like to explore many programming languages and frameworks that would ease my work. Specifically, I'm learning frameworks for Front-end development such as React and Vue. Outside of my programming life, I mostly spend my time watching animes and work out.
            </Typography>
            </Box>
            </Grid>
        </Grid>
        </Box>
    </Box>

    );
}

export default Projects;