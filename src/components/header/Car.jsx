import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Car(props)
{
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Car Name :{props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Fuel: {props.fuel}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Color: {props.color}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Mark: {props.mark}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {props.price} DH
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Registration Number: {props.registration_number}
          </Typography>
          {
            props.reduction &&
            <Typography variant="body2" color="textSecondary" component="p">
              Reduction: {props.reduction} %
            </Typography>
          }
        </CardContent>
        {
          (props.role === 'Client' && props.allCars) &&
          (<CardActions>
            <Button size="small" color="primary" onClick={() => props.tryCar(props._id)}>
              Esseyer
            </Button>
            {props.Checkout(props)}
          </CardActions>)
        }

        {props.role === 'Owner' &&
          <CardActions>
            <Button size="small" color="primary" onClick={() =>
            {
              props.acceptedOffre(props._id)
            }} >
              Accepter
            </Button>
            <Button size="small" color="primary" onClick={() =>
            {
              props.RefusedOffreHandler(props._id)
            }}>
              Refuser
            </Button>
          </CardActions>}
      </CardActionArea>

    </Card>
  );
}