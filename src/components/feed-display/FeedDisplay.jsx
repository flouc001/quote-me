import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

import { FeedItemType } from '../../utils/proptypes';
import { CATEGORY } from '../../utils/constants';

const StyledFeedContainer = styled.ul`
  padding: 1rem;
`;

const StyledFeedItem = styled.li`
  background: #00aabb;
  border-radius: .4em;
  max-width: 10rem;
  padding: 1rem;
  /* TODO: proper category colors */
  background-color: ${(props) => (props.category === CATEGORY.INCOME ? props.theme.colors.brand : props.theme.colors.red)};
  color: ${(props) => props.theme.colors.white};
  margin-top: 0.5rem;
`;

const createFeedItem = (feedItem, index) => (
  <StyledFeedItem category={feedItem.category} key={index}>
    <FormattedNumber
      value={feedItem.amount}
      // eslint-disable-next-line react/style-prop-object
      style="currency"
      // Hard coded to GBP but can be changed
      currency="GBP"
    />
  </StyledFeedItem>
);

const FeedDisplay = ({ moneyFeed }) => (
  <StyledFeedContainer>
    {moneyFeed.map(createFeedItem)}
  </StyledFeedContainer>
);

FeedDisplay.propTypes = {
  moneyFeed: PropTypes.arrayOf(FeedItemType).isRequired,
};

export default FeedDisplay;
