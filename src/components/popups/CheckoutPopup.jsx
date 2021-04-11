import
{
  CardContent,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useFormik } from "formik";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCheckout, ByCar } from "../../redux/ducks/clientSlice";
import Car from "../header/Car";
import Infos from "../header/Infos";
function CheckoutPopup(props)
{
  const dispatch = useDispatch();
  const id = props.car._id
  const formik = useFormik({
    initialValues: {
      proposed_reduction: "",
    },
    onSubmit: (values) =>
    {
      dispatch(ByCar({ values, id })) && props.close()
    },
  });
  useEffect(() =>
  {
    dispatch(getCheckout(id));
  }, [dispatch]);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Info Vendeur
            </Typography>
            {props.InfoOwner && <Infos {...props.InfoOwner} />}
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Vos Information
            </Typography>
            {props.currentClient && <Infos {...props.currentClient} />}
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Info Car
            </Typography>
            {props.car && <Car {...props.car} />}
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Proposer une Reduction ?
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                type="number"
                id="proposed_reduction"
                label="proposed_reduction"
                name="proposed_reduction"
                value={formik.values.proposed_reduction}
                onChange={formik.handleChange}
                autoComplete="proposed_reduction"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Acheter
              </Button>
            </form>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CheckoutPopup
