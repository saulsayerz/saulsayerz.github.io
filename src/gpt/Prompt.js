import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    minWidth: '60vh',
    minHeight: '20vh',
    padding: '30px 20px',
    borderRadius: 10,
    backgroundColor: '#f0f3f8',
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
  button: {
    width: '180px', // Changed from '45%' to '45%'
    borderRadius: 8,
    fontWeight: 'bold',
    padding: '15px 30px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  yesButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
  noButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  },
  content: {
    display: 'flex',
    height: '30vh',
    flexDirection: 'column',
    flex: 1, // Added flex property to take up remaining space
    textAlign: 'center',
  },
});

function Prompt({ question, onYesClick, onNoClick,button, className }) {
  const classes = useStyles();
  const justifyContent = button === "0"? "center" : "start" // Added ternary operator to set alignItems property

  return (
    <Card className={`${classes.card} ${className}`} elevation={5}>
      <CardContent className={classes.content} sx={{justifyContent: {justifyContent}}}> {/* Added className to CardContent */}
        <Typography variant="h4" component="h4" sx={{ fontWeight: 550 }} gutterBottom>
          {question}
        </Typography>
      </CardContent>
      {button === "2" && (
        <div className={classes.buttonGroup}>
        <Button
          variant="contained"
          className={`${classes.button} ${classes.yesButton}`}
          onClick={onNoClick}
        >
          bukan ini org lain
        </Button>
        <Button
          variant="contained"
          className={`${classes.button} ${classes.noButton}`}
          onClick={onYesClick}
        >
          iyaaa ak odre
        </Button>
        </div>
      )}
 
    </Card>
  );
}

export default Prompt;
