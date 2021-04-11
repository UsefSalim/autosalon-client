import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, Redirect } from 'react-router-dom';

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
            Price: {props.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Registration Number: {props.registration_number}
          </Typography>
        </CardContent>
        {
          props.role === 'Client' &&
          (<CardActions>
            <Button size="small" color="primary" onClick={() => props.tryCar(props._id)}>
              Esseyer
            </Button>
            {/* <Button size="small" color="secondary" onClick={() =>
            {
              props.handelSingelAchat(props._id)
            }}>
              <Link to={`/client/checkout/${props._id}`} > Acheter</Link> 
              Acheter
            </Button> */}
            {props.Checkout(props)}
          </CardActions>)
        }

        {props.role === 'Owner' &&
          <CardActions>
            <Button size="small" color="primary" >
              Accepter
            </Button>
            <Button size="small" color="primary" >
              Refuser
            </Button>
          </CardActions>}
      </CardActionArea>

    </Card>
  );
}