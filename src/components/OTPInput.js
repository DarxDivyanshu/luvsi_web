import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { makeStyles, Backdrop, Fade } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const OTPInput = () => {
  const classes = useStyles();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleInputChange = (index, value) => {
    if (/^\d{0,1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1 && value !== "") {
        inputRefs[index + 1].focus();
      }
    }
  };

  

  const inputRefs = [];
  const handleSubmit = () => {
    const otpValue = otp.join("");
    console.warn(otpValue)
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
              padding: 2,
              justifyContent: "center",
              textAlign: "center",
              // marginLeft: 1,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main", fontSize: "20px" }}>
              <FontAwesomeIcon icon={faHeartbeat} />
            </Avatar>
            <Typography component="h1" variant="h3">
              Enter your code
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2, marginLeft: "1px" }}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ textAlign: "center", fontSize: "15px" }}
              >
                +1234567890
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ textAlign: "center", fontSize: "15px" }}
              >
                <Link>Resend Code</Link>
              </Grid>
            </Grid>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Box
                  sx={{
                    mt: 4,
                    ml: 3,
                    justifyContent: "center",
                    gap: "10px",
                    display: "flex",
                    padding: 3,
                  }}
                >
                  {otp.map((value, index) => (
                    <TextField
                      key={index}
                      inputRef={(ref) => (inputRefs[index] = ref)}
                      variant="outlined"
                      size="small"
                      name="otp"
                      type="text"
                      maxLength="1"
                      style={{ width: "40px", textAlign: "center" }}
                      value={value}
                      onChange={(event) =>
                        handleInputChange(index, event.target.value)
                      }
                    />
                  ))}
                </Box>
                <Link
                  href="/mobileno"
                  sx={{
                    textDecoration: "none",
                    cursor: "pointer",
                    marginLeft: "20px",
                  }}
                >
                  Update contact info
                </Link>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2, padding: "8px", fontSize: "15px" }}
              >
                Verify OTP
              </Button>
            </form>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default OTPInput;
