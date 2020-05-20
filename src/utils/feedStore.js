/*
  Feed data store
  We store money feed items by ID
*/

class FeedStore {
  constructor() {
    this.feedStore = {
      byId: new Map(),
      idByInterval: new Map(),
      allItems: [],
    };

    this.feedItemId = 0;

    this.addFeedItem = this.addFeedItem.bind(this);
    this.removeFeedItem = this.removeFeedItem.bind(this);
    this.getIntervalItems = this.getIntervalItems.bind(this);
    this.getNextId = this.getNextId.bind(this);
  }

  // TODO: replace this with a reliable id-gen
  getNextId() {
    this.feedItemId += 1;

    return this.feedItemId;
  }

  addFeedItem(feedItem) {
    const mutableFeedItem = { ...feedItem };

    const id = this.getNextId();
    mutableFeedItem.id = id;

    this.feedStore.byId.set(id, mutableFeedItem);
    this.feedStore.allItems.push(mutableFeedItem);

    return id;
  }

  removeFeedItem(id) {
    const feedItem = this.feedStore.byId.get(id);

    // TODO: this is not optimal
    this.feedStore.allItems = this.feedStore.allItem.filter((itemId) => itemId !== id);

    const { interval } = feedItem;
    const idsByInterval = this.feedStore.idByInterval.get(interval);
    if (idsByInterval.length === 1) {
      this.feedStore.idByInterval.set(interval, []);
    } else {
      const filteredIds = idsByInterval.filter((itemId) => itemId !== id);

      this.feedStore.idByInterval.set(interval, filteredIds);
    }

    this.feedStore.byId.delete(id);

    return id;
  }

  getIntervalItems(interval) {
    const ids = this.feedStore.idByInterval.get(interval);

    return ids.map((id) => this.feedStore.byId.get(id));
  }
}

export default FeedStore;
