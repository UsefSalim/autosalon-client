import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileClient } from "../../redux/ducks/clientSlice";
import { authlogout } from "../../redux/ducks/authSlice";
import Container from "@material-ui/core/Container";
import Header from "../header/Header";
import Popup from "reactjs-popup";
import {
  Button,
  Card,
  Paper,
  Typography,
  CardContent,
  Grid,
} from "@material-ui/core";
import Car from "../header/Car";

function Client(props) {
  const dispatch = useDispatch();
  const { currentClient, allCars } = useSelector((state) => state.client);

  useEffect(() => {
    dispatch(getProfileClient());
  }, [dispatch]);

  const handelLogout = () => {
    dispatch(authlogout());
  };
  return (
    <Container>
      {Object.keys(currentClient).length === 0 &&
      currentClient.constructor === Object ? null : (
        <Header User={currentClient} handelLogout={handelLogout} />
      )}

      <Card style={{ marginTop: "48px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            All Cars
          </Typography>
          <Grid container>
            {allCars.length > 0 &&
              allCars.map((car) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Car {...car} />
                </Grid>
              ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Client;
