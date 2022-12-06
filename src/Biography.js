import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

function Biography() {
    return (
    <Box>
        <Box sx={{ flexGrow: 1, ml:20, mr:20, mt:10 }}>
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <Box>
                <   Avatar alt="Saul Sayers" src="/saulprofpic.jpg" sx={{ width: 200, height: 200 }}/>
                <Typography>
                    Saul Sayers
                </Typography>
                <Typography>
                    Undergraduate Informatics Student in Institut Teknologi Bandung
                </Typography>
                </Box>
            </Grid>
            <Grid item xs={7}>
            <Box>

            </Box>
            </Grid>
        </Grid>
        </Box>
    </Box>

    );
}

export default Biography;