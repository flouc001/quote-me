import { connect } from 'react-redux';
import FeedDisplay from './FeedDisplay';
import { getFeedItems, removeFeedItem } from '../../redux/ducks/feed';

const mapStateToProps = (state) => ({
  moneyFeed: getFeedItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeFeedItem: (id) => dispatch(removeFeedItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedDisplay);
