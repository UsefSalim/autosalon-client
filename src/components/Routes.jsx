import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "../components/pages/Home";
import Register from "../components/pages/Register";
import Login from "../components/pages/Login";
import Owner from "./pages/Owner";
import { useSelector } from 'react-redux'

import Client from "./pages/Client";
function Routes()
{
  const { role, isAuthenticated } = useSelector((state) => state.authentification)
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <ProtectedAuthRoute auth={isAuthenticated} role={role} path="/register" component={Register} />
      <ProtectedAuthRoute exact auth={isAuthenticated} role={role} path="/login" component={Login} />
      <ProtectedOwnerRoute exact auth={isAuthenticated} role={role} path="/owner" component={Owner} />
      <ProtectedClientRoute exact auth={isAuthenticated} role={role} path="/client" component={Client} />
    </Switch>
  )
}

const ProtectedClientRoute = ({ auth, role, component: Component, ...rest }) =>
{
  return (
    <Route
      {...rest}
      render={() => (auth && role === 'Client')
        ? (
          <Component />
        ) :
        (
          <Redirect to="/login" />
        )
      }
    />)
}
const ProtectedOwnerRoute = ({ auth, role, component: Component, ...rest }) =>
{
  return (
    <Route
      {...rest}
      render={() => (auth && role === 'Owner')
        ? (
          <Component />
        ) :
        (
          <Redirect to="/login" />
        )
      }
    />)
}
const ProtectedAuthRoute = ({ auth, role, component: Component, ...rest }) =>
{
  return (
    <Route
      {...rest}
      render={() => !auth
        ? (
          <Component />
        ) : ((role === 'Client')
          ? (
            <Redirect to="/client" />
          ) : (
            <Redirect to="/owner" />
          )
        )
      }
    />)
}

export default Routes
