import React, { useState } from "react";

import Popover from "@material-ui/core/Popover";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
var el = document.getElementById('otp'); 
function App() {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((Data, inx) => (inx === index ? element.value : Data))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
 const onKeyDown =(e)=> {
    if (e.keyCode === 8) {
        console.log('delete');
    }
}

  return (
    <div >
      <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<Grid item xs={2}>
         
       
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        CLICK ME !!!
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        
      >
        <Card className={classes.root}>
      <CardContent>
        <div style={{justifyContent:"center"}}> 
        <center>
          <h2>Phone Verification</h2>
          <p>Enter the OTP you recived on 99999XXX</p>
          </center>
          {otp.map((data, index) => {
            return (
              <input
                className="otp-field"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onKeyDown={onKeyDown}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}

          <p>OTP Entered - {otp.join("")}</p>
          <p>
            <Button
              color="primary"
              onClick={(e) => setOtp([...otp.map((v) => "")])}
            >
              Clear
            </Button>
            <Button
              color="primary"
              style={{marginLeft:"100px"}}
            >
              Re-send OTP
            </Button>
            </p>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => alert("Entered OTP is " + otp.join(""))}
            >
              Verify OTP
            </Button>
         
        </div>
        </CardContent>
        </Card>
      </Popover>
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
