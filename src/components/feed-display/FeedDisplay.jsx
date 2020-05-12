import React from 'react';
import styled from 'styled-components';

const StyledFeedContainer = styled.ul`
  padding: 1rem;
`;

const StyledFeedItem = styled.li`
  background: #00aabb;
  border-radius: .4em;
  max-width: 10rem;
  padding: 1rem;
  background-color: ${(props) => (props.isIncome ? props.theme.colors.brand : props.theme.colors.red)};
  color: ${(props) => props.theme.colors.white};
  ${(props) => (!props.isIncome && 'margin-left: auto;')};
`;

const createFeedItem = (feedItem) => (
  <StyledFeedItem isIncome={feedItem.isIncome}>
    {feedItem.amount}
  </StyledFeedItem>
);

const FeedDisplay = ({ moneyFeed }) => (
  <StyledFeedContainer>
    {moneyFeed.map(createFeedItem)}
  </StyledFeedContainer>
);

export default FeedDisplay;
