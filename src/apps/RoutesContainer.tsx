import { Skeleton } from '@mui/material'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthRoute from '../configs/routing/AuthRoute'
import routes from '../configs/routing/routes'

/**
 * Routes Container
 *
 * Version 1.0
 *
 * Date: 01-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 01-06-2022         DuyHV           Create
 */
const RoutesContainer = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Switch>
        {routes.map(({ path, Component, exact, auth }) => {
          if (auth) {
            return <AuthRoute key={path} path={path} exact={exact} component={Component} />
          } else {
            return <Route key={path} path={path} exact={exact} component={Component} />
          }
        })}
      </Switch>
    </Suspense>
  )
}

export default RoutesContainer
