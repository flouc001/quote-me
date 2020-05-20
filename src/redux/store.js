import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const rootReducer = combineReducers(reducers);
const configureStore = (initialState) => createStoreWithMiddleware(
  rootReducer,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default configureStore;
