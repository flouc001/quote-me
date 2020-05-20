import { combineReducers } from 'redux';

import feedReducer from './ducks/feed';

export default combineReducers({
  feed: feedReducer,
});
