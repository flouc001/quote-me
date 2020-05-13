import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import FeedDisplay from '../feed-display/FeedDisplay';
import MoneyChart from '../money-chart/MoneyChart';
import MoneyControl from '../money-control/MoneyControl';
import Skeleton from '../skeleton/Skeleton';
import TopBar from '../top-bar/TopBar';
import { FREQUENCY } from '../../utils/constants';

const SplitPaneContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SplitPane = styled.div`
  display: flex;
  flex: 1 1 100%;
  padding: 1rem;
`;

function App() {
  const [moneyFeed, setMoneyFeed] = useState([]);

  const [feedByInterval, setFeedByInterval] = useState(new Map([
    [FREQUENCY.DAILY, []],
    [FREQUENCY.WEEKLY, []],
    [FREQUENCY.MONTHLY, []],
    [FREQUENCY.YEARLY, []],
    [FREQUENCY.WEEKDAY, []],
  ]));

  function addToMoneyFeed(feedItem) {
    const newFeed = [...moneyFeed, feedItem];

    const newFeedByInterval = new Map(feedByInterval);
    newFeedByInterval.get(feedItem.interval).push(feedItem);

    setMoneyFeed(newFeed);
    setFeedByInterval(newFeedByInterval);
  }

  return (
    <Skeleton>
      <TopBar>
        <span><FormattedMessage id="topbar.title" /></span>
      </TopBar>
      <MoneyControl
        addToFeed={addToMoneyFeed}
      />
      <MoneyChart
        moneyFeed={moneyFeed}
        feedByInterval={feedByInterval}
      />
      <SplitPaneContainer>
        <SplitPane>
          <FeedDisplay
            moneyFeed={moneyFeed}
          />
        </SplitPane>
        <SplitPane>
          <h1>Hello World!</h1>
        </SplitPane>
      </SplitPaneContainer>
    </Skeleton>
  );
}

export default App;
