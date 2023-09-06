// src/components/ProfileSection.js
import React from 'react';
import { Avatar, Typography, Divider, Button,Paper } from '@mui/material';
import { makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ProfileSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{background:'#fff',height:'83vh'}}>
      <Paper elevation={3} sx={{padding:'20px',mt:4,d:'f',alignItems:'center'}}>
      <Avatar className={classes.avatar} alt="Profile Image" src="/path-to-image.jpg" />
      <Typography variant="h6">John Doe</Typography>
      <Typography variant="subtitle1">Age: 30</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu lectus eu nulla lacinia
        fringilla.
      </Typography>
      <Button className={classes.button} variant="contained" color="primary">
        Edit Profile
      </Button>
      <Divider style={{ marginTop: '20px', width: '100%' }} />
      {/* Add more profile details */}
      </Paper>
    </div>
  );
};

export default ProfileSection;
