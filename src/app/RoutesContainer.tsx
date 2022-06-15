import { Skeleton } from '@mui/material'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthRoute from '../routing/AuthRoute'
import routes from '../routing/routes'

/**
 * This is the main routes container. We add it inside the app's layout so that
 * it won't update each time we change routes.
 *
 */
const RoutesContainer = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Switch>
        {routes.map(({ path, Component, exact, auth }) => {
          if (auth) {
            return <AuthRoute key={path} path={path} exact={exact} component={Component} />
          } else {
            return <Route path={path} exact={exact} component={Component} />
          }
        })}
      </Switch>
    </Suspense>
  )
}

export default RoutesContainer
