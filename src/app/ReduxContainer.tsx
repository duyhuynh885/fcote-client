import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../redux/configureStore';
import Loader from "../components/Loader/Loader";

const { store, persistor } = configureStore();
const RouterContainer = lazy(() => import('./RouterContainer'));

export default () => (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <Suspense fallback={<Loader />}>
        <RouterContainer />
      </Suspense>
    </PersistGate>
  </Provider>
);
