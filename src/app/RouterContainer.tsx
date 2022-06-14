import { ConnectedRouter } from "connected-react-router";
import React, { lazy, Suspense } from "react";
import { Router } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import history from "../routing/history";
import AppContainer from "./AppContainer";

export default () => (
  <ConnectedRouter history={history}>
    <Router history={history}>
      <Suspense fallback={<Loader />}>
        <AppContainer />
      </Suspense>
    </Router>
  </ConnectedRouter>
);
