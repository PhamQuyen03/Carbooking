/**
 * @providesModule WeFit.Redux.Store
 */

/* eslint-disable no-underscore-dangle */

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
// import { autoRehydrate } from 'redux-persist';
// import reduxReset from 'redux-reset';
import reduxThunk from 'redux-thunk';

// Locals
import { serviceApi } from '../reducers';
import axiosMiddleware from './axiosMiddleware';
// import createStorePersistor from './createStorePersistor';

export default function buildStore() {
  const reducers = combineReducers({
    serviceApi
  });

  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
      applyMiddleware(reduxThunk, axiosMiddleware),
      // autoRehydrate({ log: FEATURES.REDUX_PERSIST_LOGGING }),
      // reduxReset(SHARED.RESET_REDUX_STORE)
    )
  );
  
  // createStorePersistor(store);
  return store;
}
/* eslint-enable no-underscore-dangle */
