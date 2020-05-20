import { connect } from 'react-redux';
import MoneyChart from './MoneyChart';
import { getFeedItemsByInterval } from '../../redux/ducks/feed';

const mapStateToProps = (state) => ({
  feedItemByInterval: getFeedItemsByInterval(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MoneyChart);
