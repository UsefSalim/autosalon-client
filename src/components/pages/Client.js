import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileClient, esseyCar } from "../../redux/ducks/clientSlice";
import { authlogout } from "../../redux/ducks/authSlice";
import Container from "@material-ui/core/Container";
import Header from "../header/Header";
import Alert from "@material-ui/lab/Alert";

import {
  Card,
  Typography,
  CardContent,
  Grid,
  Button,
  Paper,
} from "@material-ui/core";
import Car from "../header/Car";
import Popup from "reactjs-popup";
import CheckoutPopup from "../popups/CheckoutPopup";

function Client(props) {
  const dispatch = useDispatch();
  const {
    currentClient,
    allCars,
    Error,
    Success,
    InfoOwner,
    InfoSingleCar,
    reserverdCar,
    reservedCarWithreduction,
  } = useSelector((state) => state.client);
  console.log(reserverdCar);
  useEffect(() => {
    dispatch(getProfileClient());
  }, [dispatch]);
  const handelLogout = () => {
    dispatch(authlogout());
  };
  const esseyCarHandel = (id) => {
    setTimeout(() => {
      dispatch(esseyCar(id));
    }, 1000);
  };
  const Checkout = (car) => (
    <Popup
      trigger={
        <Button size="small" color="secondary">
          Acheter
        </Button>
      }
      nested
      modal
    >
      {(close) => (
        <Paper square>
          <CheckoutPopup
            close={close}
            car={car}
            InfoOwner={InfoOwner}
            currentClient={currentClient}
            InfoSingleCar={InfoSingleCar}
            dispatch={dispatch}
          />
        </Paper>
      )}
    </Popup>
  );

  return (
    <Container>
      {Object.keys(currentClient).length === 0 &&
      currentClient.constructor === Object ? null : (
        <Header User={currentClient} handelLogout={handelLogout} />
      )}

      <Card style={{ marginTop: "48px" }}>
        <CardContent>
          {Error && (
            <Alert variant="filled" severity="error">
              {Error}
            </Alert>
          )}
          {Success && (
            <Alert variant="filled" severity="success">
              Voiture esseyé avec succée
            </Alert>
          )}
          <Typography gutterBottom variant="h5" component="h2">
            All Cars
          </Typography>
          {Object.keys(currentClient).length === 0 &&
          currentClient.constructor === Object ? null : (
            <>
              Nombre d'essey{" "}
              <progress id="file" value={currentClient.global_tries} max="10" />{" "}
              {`${currentClient.global_tries}/10`}
            </>
          )}
          <Grid container spacing={2}>
            {allCars.length > 0 &&
              allCars.map((car) => (
                <Grid key={car._id} item xs={12} sm={6} md={4}>
                  <Car
                    {...car}
                    role="Client"
                    tryCar={esseyCarHandel}
                    Checkout={Checkout}
                    allCars={true}
                  />
                </Grid>
              ))}
          </Grid>
          {reserverdCar.length > 0 && (
            <Typography gutterBottom variant="h5" component="h2">
              Reserverd Cars
            </Typography>
          )}
          <Grid container spacing={2}>
            {reserverdCar.length > 0 &&
              reserverdCar.map((car) => (
                <Grid key={car.id_car._id} item xs={12} sm={6} md={4}>
                  <Car
                    {...car.id_car}
                    role="Client"
                    tryCar={esseyCarHandel}
                    Checkout={Checkout}
                  />
                </Grid>
              ))}
          </Grid>
          {reservedCarWithreduction.length > 0 && (
            <Typography gutterBottom variant="h5" component="h2">
              Reserverd Cars with reduction
            </Typography>
          )}
          <Grid container spacing={2}>
            {reservedCarWithreduction.length > 0 &&
              reservedCarWithreduction.map((car) => (
                <Grid key={car.id_car._id} item xs={12} sm={6} md={4}>
                  <Car
                    {...car.id_car}
                    role="Client"
                    reduction={car.proposed_reduction}
                    tryCar={esseyCarHandel}
                    Checkout={Checkout}
                  />
                </Grid>
              ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Client;
