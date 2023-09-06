import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import FacebookLogin from 'react-facebook-login';
const defaultTheme = createTheme();
const appId = '556082989553906';

const Home = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/MobileNo`;
    navigate(path);
  };
  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        appId,
        cookie: true,
        xfbml: true,
        version: 'v13.0'
      });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const handleFBLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          // Here, you can use the access token from the response for further actions.
          console.log('Logged in with Facebook:', response.authResponse.accessToken);
        } else {
          console.log('Facebook login failed.');
        }
      },
      { scope: 'public_profile,email' } // Requested permissions
    );
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs" sx={{height:'100px !important'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 3,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <FontAwesomeIcon
            icon={faHeartbeat}
                     />
        
            </Avatar>
            <Typography component="h1" variant="h3">
            Luvsi
            </Typography>
            <Typography component="h1" variant="h5" sx={{textAlign:'center',mt:'20px'}}>
            By Keeping Login you agree with our terms of services and Praivacy
            Policy
            </Typography>
           
            <Grid container spacing={2}>
              <Grid item xs={12} >
             
                <Button variant="contained" 
                 sx={{ marginTop: "20px",padding:'10px',fontSize:'15px' }}
                color="primary"
                onClick={handleFBLogin} 
                fullWidth>
                  Login with facebook
                </Button>
              </Grid>
              <Grid item xs={12} >
                <Button
                 fullWidth
                  variant="contained"
                  onClick={routeChange}
                  color="secondary"
                  sx={{ marginTop: "10px",padding:'10px',fontSize:'15px' }}
                >
                  Login with Mobile no.
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
