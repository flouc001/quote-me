import { uuid } from 'uuidv4';

// Actions
const ADD = 'quote-me/feed/ADD';
const REMOVE = 'quote-me/feed/REMOVE';

// Reducer
const initialState = {
  itemsById: {},
  allItems: [],
  itemIdsByInterval: {},
};

const addItemToState = (state, action) => {
  const newState = { ...state };
  const id = uuid();
  const feedItem = { ...action.item };
  feedItem.id = id;
  newState.itemsById[id] = feedItem;
  newState.allItems.push(id);
  if (Array.isArray(newState.itemIdsByInterval[feedItem.interval])) {
    newState.itemIdsByInterval[feedItem.interval].push(id);
  } else {
    newState.itemIdsByInterval[feedItem.interval] = [id];
  }
  return newState;
};

const removeItemFromState = (state, action) => {
  const newState = { ...state };
  const feedItem = newState.itemsById[action.id];
  if (Array.isArray(newState.itemIdsByInterval[feedItem.interval])) {
    if (newState.itemIdsByInterval[feedItem.interval].length === 1) {
      newState.itemIdsByInterval[feedItem.interval] = [];
    } else {
      newState.itemIdsByInterval[feedItem.interval] = newState.itemIdsByInterval[feedItem.interval]
        .filter((itemId) => itemId !== feedItem.id);
    }
  }
  newState.allItems = newState.allItems.filter((itemId) => itemId !== feedItem.id);
  delete newState.itemsById[action.id];
  return newState;
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ADD: return addItemToState(state, action);
    case REMOVE: return removeItemFromState(state, action);
    default: return { ...state };
  }
}

// Action Creators
export const addFeedItem = (item) => ({ type: ADD, item });
export const removeFeedItem = (id) => ({ type: REMOVE, id });

// Selectors
export const getFeedItems = (state) => state.feed.allItems
  .map((itemId) => state.feed.itemsById[itemId]);

export const getFeedItemsByInterval = (state) => {
  const output = {};

  Object
    .keys(state.feed.itemIdsByInterval)
    .forEach((interval) => {
      const itemIds = state.feed.itemIdsByInterval[interval];
      output[interval] = itemIds.map((itemId) => state.feed.itemsById[itemId]);
    });

  return output;
};
