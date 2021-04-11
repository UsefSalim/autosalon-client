import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Infos(props)
{
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            First Name:{props.first_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Last Name: {props.last_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Cin: {props.cin}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email: {props.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone: {props.phone}
          </Typography>
          {props.rib &&
            <Typography variant="body2" color="textSecondary" component="p">
              Rib: {parseInt(props.rib)}
            </Typography>}
        </CardContent>
      </CardActionArea>

    </Card>
  );
}