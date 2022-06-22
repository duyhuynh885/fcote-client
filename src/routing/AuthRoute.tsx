import React from 'react'
import { Redirect, Route } from 'react-router'
import { isAuth } from '../utils/auth'

/**
 * AuthRoute
 *
 * Version 1.0
 *
 * Date: 08-06-2021
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 09-06-2022         DuyHV           Create
 */

const AuthRoute = ({ component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) =>
      isAuth() ? (
        React.createElement(component, props)
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  ></Route>
)

export default AuthRoute
