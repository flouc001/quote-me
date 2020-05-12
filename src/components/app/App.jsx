import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Skeleton from '../skeleton/Skeleton';
import TopBar from '../top-bar/TopBar';
import MoneyControl from '../money-control/MoneyControl';
import MoneyChart from '../money-chart/MoneyChart';

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
      <ul>
        {moneyFeed.map((feedItem) => {
          return <li>{feedItem.amount}</li>;
        })}
      </ul>
      <MoneyChart
        moneyFeed={moneyFeed}
        feedByInterval={feedByInterval}
      />
    </Skeleton>
  );
}

export default App;
