import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileInfo } from '../../redux/ducks/ownerSlice'
import { authlogout } from "../../redux/ducks/authSlice";
import Container from '@material-ui/core/Container';
import Header from '../header/Header'
import Popup from 'reactjs-popup';
import { Button, Card, Paper, Typography, CardContent, Grid } from '@material-ui/core';
import AddCarPopup from '../popups/AddCarPopup';
import AddIcon from '@material-ui/icons/Add';
import Car from '../header/Car';

function Owner(props)
{
  const dispatch = useDispatch()
  const { Owner,
    reserveCars,
    ownerCars, } = useSelector((state) => state.owner)
  useEffect(() =>
  {
    dispatch(getProfileInfo())
  }, [dispatch])
  const AddCar = () => (
    <Popup trigger={
      <Button
        variant="contained"
        color="primary"
        endIcon={<AddIcon />}
      >
        Add Car
              </Button>
    } nested modal>
      {close => (
        <Paper square>
          <AddCarPopup close={close} dispatch={dispatch} />
        </Paper>
      )}
    </Popup>

  )

  const handelLogout = () =>
  {
    dispatch(authlogout());
  };
  return (

    <Container>
      {Object.keys(Owner).length === 0 && Owner.constructor === Object ?
        null
        : <Header Owner={Owner} handelLogout={handelLogout} />
      }


      <Card style={{ marginTop: "48px" }} >
        <CardContent>
          {AddCar()}
          <Typography gutterBottom variant="h5" component="h2">
            My Cars
          </Typography>
          <Grid container >
            {(ownerCars.length > 0) && ownerCars.map((car) =>
            (
              <Grid item xs={12} sm={6} md={4}>
                <Car {...car} />
              </Grid>
            ))}
          </Grid>

        </CardContent>
      </Card>
    </Container>

  )
}

export default Owner
