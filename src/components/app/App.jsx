import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Skeleton from '../skeleton/Skeleton';
import TopBar from '../top-bar/TopBar';
import MoneyControl from '../money-control/MoneyControl';
import MoneyChart from '../money-chart/MoneyChart';
import FeedDisplay from '../feed-display/FeedDisplay';

function App() {
  const [moneyFeed, setMoneyFeed] = useState([]);
  const [feedByInterval, setFeedByInterval] = useState({
    d: [],
    w: [],
    m: [],
    y: [],
    wd: [],
  });

  function addToMoneyFeed(feedItem) {
    const newFeed = [...moneyFeed, feedItem];

    const newFeedByInterval = { ...feedByInterval };
    newFeedByInterval[feedItem.interval].push(feedItem);

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
      <FeedDisplay
        moneyFeed={moneyFeed}
      />
    </Skeleton>
  );
}

export default App;
