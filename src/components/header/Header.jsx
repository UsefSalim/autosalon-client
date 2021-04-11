import React from 'react'
import { CardContent, Grid, Card, Avatar, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
function Header(props)
{
  const { User, handelLogout } = props
  return (
    <Card >
      <CardContent>
        <Grid container >
          <Grid item xs={false} sm={1} />
          <Grid item sm={9} >
            <Avatar>{User.first_name.substr(0, 1)}</Avatar>
            <Typography variant="h4" gutterBottom> {User.first_name} - {User.last_name}</Typography>
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
