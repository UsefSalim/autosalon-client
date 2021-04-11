import React from 'react'
import { Link } from 'react-router-dom'
import { CardContent, Grid, Card, Avatar, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
function Header(props)
{
  const { Owner, handelLogout } = props
  return (
    <Card >
      <CardContent>
        <Grid container >
          <Grid item xs={false} sm={1} />
          <Grid item sm={9} >
            <Avatar>{Owner.first_name.substr(0, 1)}</Avatar>
            <Typography variant="h4" gutterBottom> {Owner.first_name} - {Owner.last_name}</Typography>
          </Grid>
          <Grid item sm={1} >
            <Button onClick={handelLogout}>Logout</Button>
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Header
