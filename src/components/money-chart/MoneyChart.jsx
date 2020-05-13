import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighChartsReact from 'highcharts-react-official';
import styled from 'styled-components';
import { DateTime } from 'luxon';
import { CATEGORY } from '../../utils/constants';

const ChartContainer = styled.div`
  padding: 1rem;
`;

const MoneyChart = ({ feedByInterval, className }) => {
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
    const { amount, category } = feedItem;

    switch (category) {
      case CATEGORY.INCOME:
        total += amount;
        break;
      case CATEGORY.EXPENSE:
        total -= amount;
        break;
      default:
        break;
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
    <ChartContainer>
      <HighChartsReact
        highcharts={Highcharts}
        constructorType="stockChart"
        options={options}
        className={className}
      />
    </ChartContainer>
  );
};

export default MoneyChart;
