import React from 'react';
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import './Jokes.css'; // import the CSS file
import { GoogleLogin } from 'react-google-login';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import {gapi} from 'gapi-script';

const clientId = '318220767676-i5sc07mnhmu5q6bbs52g8mgcmdmdm0kq.apps.googleusercontent.com'

const useStyles = makeStyles({
  card: {
    marginLeft: '10px',
    marginRight: '10px',
    maxWidth: '80%',
    minWidth: '30%',
    minHeight: '20vh',
    padding: '30px 20px',
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

function Login({onYesClick, onNoClick}) {
  const classes = useStyles();
  const justifyContent = 'center' // Added ternary operator to set alignItems property

  useEffect(() => {
    gapi.load('client:auth2', () => {
        gapi.auth2.init({
            client_id: clientId,
            scope: ""
        });
    });
}, []);

  const onSuccess = (res) => {
    if (res.profileObj.email === "13520094@std.stei.itb.ac.id"  
        || res.profileObj.name.toLowerCase().includes("13020007") 
        || res.profileObj.name.toLowerCase().includes("della") 
        || res.profileObj.name.toLowerCase().includes("saul")){
            onYesClick()
    }
    else{
        onNoClick()
    }
  };

  const onFailure = (res) => {
    console.log('[Login failed] res:', res);
  };


  return (
<Card className={`${classes.card} fade-in`} elevation={5} style={{backgroundColor: 'rgba(255, 255, 255, 0.85)', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)', borderRadius: '16px', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.55)', display: 'Flex', justifyContent: 'center'}} >
      <CardContent className={classes.content} sx={{justifyContent: {justifyContent}}}> {/* Added className to CardContent */}
        <Typography variant="h4" component="h4" sx={{ fontWeight: 550, fontFamily: 'sans-serif', textAlign: 'center' }} gutterBottom>
          Login dulu yaaa
        </Typography>
        </CardContent>     
            <GoogleLogin
                clientId={clientId}
                buttonText=" biar ngga semua orang bisa buka >.< "
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
                prompt="select_account"
                theme="dark"
            />
</Card>
  );
}

export default Login;
