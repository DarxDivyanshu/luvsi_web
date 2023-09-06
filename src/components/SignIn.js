import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  Paper,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form,useFormik } from "formik";
import { signInSchema } from "../schemas";
const defaultTheme = createTheme();
const initialValues = {
  email: "",
  password: "",
};
const SignIn = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
               
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="current-password"
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, padding: "8px", fontSize: "15px" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgetpassword" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
