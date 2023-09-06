import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const defaultTheme = createTheme();

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle password reset logic here
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2} >
               
                <Grid item xs={12} sx={{width:300}}>
                  <TextField
                     type="email"
                     label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "20px",padding:'10px',fontSize:'15px' }}
              >
                Reset Password
              </Button>
            </Box>
          </Paper>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
};

export default ForgetPassword;
