import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link, Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';
import axios from 'axios';
import { useEffect } from 'react';
// axios.defaults.withCredentials = true;
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  first_name: yup
    .string('Enter your first_name')
    .min(3, 'First name should be of minimum 3 characters length')
    .required('First name is required'),
  last_name: yup
    .string('Enter your last_name')
    .min(3, 'Last name should be of minimum 3 characters length')
    .required('Last name is required'),
  cin: yup
    .string('Enter your cin')
    .min(7, 'Cin should be of minimum 7 characters length')
    .max(8, 'Cin should be of maximum 8 characters length')
    .required('Cin is required'),
  phone: yup
    .string('Enter your Phone Number')
    .min(10, 'Phone Number should be of minimum 10 characters length')
    .max(10, 'Phone should be of maximum 10 characters length')
    .required('Phone Number is required'),
  role: yup
    .boolean().required(),
  rib: yup
    .string('Enter your Rib')
    .min(24, 'Rib should be of minimum 10 characters length')
    .max(24, 'Rib should be of maximum 10 characters length')
    .when('role', {
      is: true,
      then: yup.string().required('Rib is REquired'),
    }),

});

const Register = (props) =>
{
  const [errorMailExist, setErrorMailExist] = useState('')
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      last_name: '',
      first_name: '',
      cin: '',
      phone: '',
      rib: '',
      role: true
    },
    validationSchema: validationSchema,
    onSubmit: async (values) =>
    {
      if (!values.role) delete values.rib
      try
      {
        const { data } = await axios.post('http://localhost:5000/api/auth/register', values)
        data && props.history.push("/login")
      } catch (error)
      {
        setErrorMailExist(error.response.request.response)
      }
    },
  });
  const classes = useStyles();
  return (
    <Grid container>
      <Grid xs={false} sm={1} />
      <Grid container item xs={12} sm={10} component="main" className={classes.root}>
        <CssBaseline />
        <p>{(errorMailExist && errorMailExist)}</p>
        <Grid item xs={12} sm={12} md={7} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>

            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={(formik.touched.email && Boolean(formik.errors.email))}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="First Name"
                    label="First Name"
                    name="first_name"
                    autoComplete="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                    helperText={formik.touched.first_name && formik.errors.first_name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="last_name"
                    label="Last Name"
                    id="Last Name"
                    autoComplete="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                    helperText={formik.touched.last_name && formik.errors.last_name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="Cin"
                    label="Cin"
                    name="cin"
                    autoComplete="cin"
                    value={formik.values.cin}
                    onChange={formik.handleChange}
                    error={formik.touched.cin && Boolean(formik.errors.cin)}
                    helperText={formik.touched.cin && formik.errors.cin}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="phone"
                    label="Phone"
                    id="Phone"
                    autoComplete="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Grid>
                {
                  formik.values.role &&
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="rib"
                      label="rib"
                      id="Rib"
                      autoComplete="rib"
                      value={formik.values.rib}
                      onChange={formik.handleChange}
                      error={formik.touched.rib && Boolean(formik.errors.rib)}
                      helperText={formik.touched.rib && formik.errors.rib}
                    />
                  </Grid>
                }
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
            </Button>
              <Grid container>
                <Grid item xs>
                  Client
                    <Switch
                    checked={formik.values.role}
                    onChange={formik.handleChange}
                    color="primary"
                    name="role"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  Owner
                </Grid>
                <Grid item>
                  <Link to="/login" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={12} md={5} className={classes.image} />
      </Grid>
    </Grid >
  );
};


function Copyright()
{
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="https://autosalon-client-acsgrlx2h-usefsalim.vercel.app/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default Register;