import React, { useState } from "react";
import { useFormik } from "formik";
import { profileForm } from "../schemas";
import {
  Button,
  TextField,
  FormControlLabel,
  Paper,
  Radio,
  Grid,
  Box,
  Checkbox,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import Img from "../assets/emoji.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  imageContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },
  imageCard: {
    width: 150,
    marginBottom: theme.spacing(2),
  },
}));
const defaultTheme = createTheme();
const initialValues = {
  fullname: "",
  email: "",
  dob: "",
  gender: "",
  showGender: "",
};
const ProfileForm = () => {
  const classes = useStyles();
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: profileForm,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  const [images, setImages] = useState(Array(4).fill(Img));

  const handleImageChange = (index, event) => {
    const newImages = [...images];
    newImages[index] = URL.createObjectURL(event.target.files[0]);
    setImages(newImages);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            Container
            sx={{
              position: "absolute",
              display: "flex",
              width: "90%",
              padding: "10px",
            }}
          >
            {images.map((image, index) => (
              <Grid
                item
                xs={5}
                key={index}
                sx={{ display: "block", width: "100%", ml: 3 }}
              >
                <Card className={classes.imageCard}>
                  <CardMedia
                    component="img"
                    alt={`Image ${index + 1}`}
                    height="100"
                    image={image}
                  />
                  <CardContent>
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id={`image-input-${index}`}
                      type="file"
                      onChange={(event) => handleImageChange(index, event)}
                    />
                    <label htmlFor={`image-input-${index}`}>
                      <Button component="span" variant="outlined" fullWidth>
                        Profile Img {index + 1}
                      </Button>
                    </label>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 6,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Profile Account
            </Typography>
            <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="name"
                label="Full Name"
                name="fullname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullname}
                autoComplete="Full-name"
              />
              {errors.fullname && touched.fullname ? (
                <p className="form-error">{errors.fullname}</p>
              ) : null}
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
              <TextField
                type="date"
                fullWidth
                name="dob"
                sx={{ mt: 1 }}
                // label="Date of birth"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.dob && touched.dob ? (
                <p className="form-error">{errors.dob}</p>
              ) : null}
              <Typography
                component="h1"
                variant="h6"
                sx={{ fontSize: "15px", mt: 2 }}
              >
                Gender
              </Typography>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="female"
                  name="gender"
                  control={<Radio />}
                  label="Female"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                    },
                  }}
                />
                <FormControlLabel
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="male"
                  name="gender"
                  control={<Radio />}
                  label="Male"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                    },
                  }}
                />
                <FormControlLabel
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="other"
                  name="gender"
                  control={<Radio />}
                  label="Other"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                    },
                  }}
                />
              </RadioGroup>
              {errors.gender && touched.gender ? (
                <p className="form-error">{errors.gender}</p>
              ) : null}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Show my gender on my profile"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 28,
                  },
                }}
              />
              <Typography
                component="h1"
                variant="h6"
                sx={{ fontSize: "15px", mt: 1 }}
              >
                Show me
              </Typography>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="female"
                  name="showGender"
                  control={<Radio />}
                  label="Female"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                    },
                  }}
                />
                <FormControlLabel
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="male"
                  name="showGender"
                  control={<Radio />}
                  label="Male"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                    },
                  }}
                />
                <FormControlLabel
                  name="showGender"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="everyone"
                  control={<Radio />}
                  label="Everyone"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                    },
                  }}
                />
              </RadioGroup>
              {errors.showGender && touched.showGender ? (
                <p className="form-error">{errors.showGender}</p>
              ) : null}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Continue
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default ProfileForm;
