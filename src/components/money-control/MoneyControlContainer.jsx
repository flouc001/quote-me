import { connect } from 'react-redux';
import MoneyControl from './MoneyControl';
import { addFeedItem } from '../../redux/ducks/feed';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addFeedItem: (feedItem) => dispatch(addFeedItem(feedItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoneyControl);
