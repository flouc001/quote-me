import PropTypes from 'prop-types';

export const FeedItemType = PropTypes.shape({
  category: PropTypes.number,
  amount: PropTypes.number,
  interval: PropTypes.string,
});
