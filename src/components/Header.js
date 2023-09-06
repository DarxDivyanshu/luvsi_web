import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import '../styles/Header.css';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position:'relative',
    transition: 'background-color 0.3s ease-in-out',
    
  },
  scrolledAppBar: {
    backgroundColor: '#75077e !important',
    color:'pink !important' // Change this to your desired background color when scrolled
  },
  defaultAppBar: {
    backgroundColor: '#1976d2 !important',
  },
}));
function ElevationScroll(props) {
  const { children, window } = props;
 
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
 
//   window: PropTypes.func,
// };
const Header = (props) => {

  const classes = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
<ElevationScroll {...props}>
    <AppBar position="sticky" elevation={3} className={`${classes.appBar} ${scrolled ? classes.scrolledAppBar : classes.defaultAppBar}`}
    >
      <Toolbar className="header__toolbar">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" className="header__title">
        Luvsi
        </Typography>
        <Button color="inherit" href="/sign-in">Login</Button>
        <IconButton color="inherit" href="/profilesection">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
   
      </ElevationScroll>
  );
};

export default Header;
