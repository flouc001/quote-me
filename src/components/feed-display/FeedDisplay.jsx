import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber, FormattedMessage } from 'react-intl';
import Toast from 'react-bootstrap/Toast';

import { FeedItemType } from '../../utils/proptypes';

const createFeedItem = (onClose) => (feedItem, index) => (
  <Toast
    key={index}
    onClose={() => onClose(feedItem.id)}
  >
    <Toast.Header>
      <strong className="mr-auto">
        <FormattedMessage
          id="category.heading"
          values={{ category: feedItem.category }}
        />
      </strong>
    </Toast.Header>
    <Toast.Body>
      <FormattedNumber
        value={feedItem.amount}
        // eslint-disable-next-line react/style-prop-object
        style="currency"
        // Hard coded to GBP but can be changed
        currency="GBP"
      />
    </Toast.Body>
  </Toast>
);

const FeedDisplay = ({ moneyFeed, removeFeedItem }) => (
  <>
    {moneyFeed.map(createFeedItem(removeFeedItem))}
  </>
);

FeedDisplay.propTypes = {
  moneyFeed: PropTypes.arrayOf(FeedItemType).isRequired,
  removeFeedItem: PropTypes.func.isRequired,
};

export default FeedDisplay;
