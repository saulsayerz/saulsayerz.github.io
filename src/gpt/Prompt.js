import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import './Jokes.css'; // import the CSS file

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
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonGroup2: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    width: '40%', // Changed from '45%' to '45%'
    borderRadius: 8,
    fontWeight: 'bold',
    padding: '15px 30px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    height: '50px'
  },

  button2: {
    width: '80px', // Changed from '45%' to '45%'
    borderRadius: 8,
    fontWeight: 'bold',
    padding: '15px 30px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    height: '30px'
  },

  

  content: {
    display: 'flex',
    height: '30vh',
    flexDirection: 'column',
    flex: 1, // Added flex property to take up remaining space
    textAlign: 'center',
  },
  image : {
    maxHeight: '350px',
    maxWidth: '350px',
  }
});

function Prompt({ question, onYesClick, onNoClick,button, className, showAnswer, answer, onEndClick }) {
  const classes = useStyles();
  const justifyContent = button === "0"? "center" : "start" // Added ternary operator to set alignItems property
  const textAlign = (answer === "" || button === '-1' ) ? "center" : "left" 
  const animation = button === -1 ? "fade-out" : "fade-in" // Added ternary operator to set animation property
  return (
<Card className={`${classes.card} ${className}`} elevation={5} style={{backgroundColor: 'rgba(255, 255, 255, 0.85)', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)', borderRadius: '16px', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.55)'}} >
      <CardContent className={classes.content} sx={{justifyContent: {justifyContent}}}> {/* Added className to CardContent */}
        <Typography variant="h4" component="h4" sx={{ fontWeight: 550, fontFamily: 'sans-serif', textAlign: {textAlign} }} gutterBottom>
          {question}
        </Typography>
        {showAnswer === false && (
          <Button
          variant="contained"
          className={`${classes.button2}`}
          onClick={onNoClick}
        >
          jawaban
        </Button>
        )}
        {showAnswer === true && (
          <Typography className={animation} variant="h6" component="h6" sx={{ fontWeight: 'normal', fontFamily: 'sans-serif', textAlign: 'left' }} gutterBottom>
            {answer}
          </Typography>
        )}
      </CardContent>
      {button === "2" && (
        <div className={classes.buttonGroup}>
        <Button
          color="error"
          variant="contained"
          className={`${classes.button}`}
          onClick={onNoClick}
          sx={{fontSize: '20px'}}
        >
          bukann
        </Button>
        <Button
          color="success"
          variant="contained"
          className={`${classes.button}`}
          onClick={onYesClick}
          sx={{fontSize: '20px'}}
        >
          iyaa
        </Button>
        </div>
      )}

      {button === "-1" && (
        <div className={classes.buttonGroup2}>
        <Button
          variant="contained"
          className={`${classes.button}`}
          onClick={onYesClick}
          sx={{fontSize: '20px'}}
        >
          lesgo
        </Button>
        </div>
      )}

      {button === "1" && showAnswer &&  (
        <div className={`${classes.buttonGroup} ${className}`}>
        <Button
          variant="contained"
          className={`${classes.button}`}
          onClick={onYesClick}
          sx={{fontSize: '15px'}}
        >
          Lanjutt :D
        </Button>
        <Button
          variant="contained"
          className={`${classes.button}`}
          onClick={onEndClick}
          sx={{fontSize: '15px'}}
        >
          Udahann
        </Button>
        </div>
      )}

      {button === "-999" && (
        // image suruh pergi
        <img src='suruh pergi.jpg' className={classes.image} alt="gambar Ciko marah nyuruh pergi"></img>
        )}
      {button === "-99" && (
        // image suruh pergi
        <img src='gooddog.jpg' className={classes.image} alt="gambar Ciko bahagia sama jokes"></img>
        )}
       {button === "-100" && (
        // image suruh pergi
        <img src='habis.jpg' className={classes.image} alt="gambar Ciko sedih jokes udah habis"></img>
        )}
    </Card>
  );
}

export default Prompt;
