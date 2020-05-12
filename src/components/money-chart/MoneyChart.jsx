import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighChartsReact from 'highcharts-react-official';
import { DateTime } from 'luxon';

const MoneyChart = ({ moneyFeed, feedByInterval }) => {
  const dailySeries = [];
  const totalSeries = [];

  const series = [
    {
      label: 'Total',
      data: totalSeries,
    },
  ];

  const options = {
    title: 'moneyChart',
    series,
  };

  // simulate the year
  // assume not a leap year for now
  let total = 0;

  function adjustTotal(feedItem) {
    const { amount, isIncome } = feedItem;

    if (isIncome) {
      total += amount;
    } else {
      total -= amount;
    }
  }

  for (let x = 1; x < 365; x += 1) {
    const moneyDate = DateTime.fromObject({ year: 2020, ordinal: x });

    feedByInterval.d.forEach(adjustTotal);

    if (moneyDate.day === 1) {
      feedByInterval.m.forEach(adjustTotal);
    }

    if (moneyDate.weekday === 1) {
      feedByInterval.w.forEach(adjustTotal);
    }

    if (moneyDate.weekday < 6) {
      feedByInterval.wd.forEach(adjustTotal);
    }

    totalSeries.push([moneyDate.toISO(), total]);
  }

  return (
    <HighChartsReact
      highcharts={Highcharts}
      constructorType="stockChart"
      options={options}
    />
  );
};

export default MoneyChart;
