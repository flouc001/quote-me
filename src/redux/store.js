import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const configureStore = (initialState = {}) => {
  const store = createStoreWithMiddleware(
    persistedReducer,
    initialState,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
