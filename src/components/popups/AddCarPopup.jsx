import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addCar } from '../../redux/ducks/ownerSlice';

const addcarSchema = yup.object({
  registration_number: yup
    .number('Enter your registration_number')
    .required('registration_number is required'),
  name: yup
    .string('Enter your name')
    .min(2, 'name should be of minimum 2 characters length')
    .required('name is required'),
  mark: yup
    .string('Enter your mark')
    .min(2, 'mark should be of minimum 2 characters length')
    .required('mark is required'),
  color: yup
    .string('Enter your color')
    .min(3, 'color should be of minimum 3 characters length')
    .required('color is required'),
  price: yup
    .number('Enter your price')
    .min(2, 'price should be of minimum 2 characters length')
    .required('price is required'),
  fuel: yup
    .mixed().oneOf(['Gasoil', 'Diesel', 'Hybrid'])
    .required('fuel is required'),
});
function AddCarPopup(props)
{
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      registration_number: '',
      name: '',
      price: '',
      color: '',
      mark: '',
      fuel: '',
    },
    validationSchema: addcarSchema,
    onSubmit: (values) =>
    {
      dispatch(addCar(values)) && props.close()
    },
  });

  const classes = useStyles();

  return (
    <Grid container maxWidth='md'>
      <Grid container item xs={12} component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="registration_number"
                label="Registration Number"
                name="registration_number"
                autoComplete="registration_number"
                autoFocus
                value={formik.values.registration_number}
                onChange={formik.handleChange}
                error={formik.touched.registration_number && Boolean(formik.errors.registration_number)}
                helperText={formik.touched.registration_number && formik.errors.registration_number}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="name"
                label="name"

                id="name"
                autoComplete="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="fuel"
                label="fuel"

                id="fuel"
                autoComplete="fuel"
                value={formik.values.fuel}
                onChange={formik.handleChange}
                error={formik.touched.fuel && Boolean(formik.errors.fuel)}
                helperText={formik.touched.fuel && formik.errors.fuel}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="mark"
                label="mark"

                id="mark"
                autoComplete="mark"
                value={formik.values.mark}
                onChange={formik.handleChange}
                error={formik.touched.mark && Boolean(formik.errors.mark)}
                helperText={formik.touched.mark && formik.errors.mark}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="color"
                label="color"

                id="color"
                autoComplete="color"
                value={formik.values.color}
                onChange={formik.handleChange}
                error={formik.touched.color && Boolean(formik.errors.color)}
                helperText={formik.touched.color && formik.errors.color}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="price"
                label="price"

                id="price"
                autoComplete="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}

              >
                Add Car
            </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
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
export default AddCarPopup
