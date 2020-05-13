import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts/highstock';
import HighChartsReact from 'highcharts-react-official';
import styled from 'styled-components';
import { DateTime } from 'luxon';
import { CATEGORY, FREQUENCY } from '../../utils/constants';

const ChartContainer = styled.div`
  padding: 1rem;
`;

const MoneyChart = ({ feedByInterval, className }) => {
  const totalSeries = [];
  const savingSeries = [];

  const series = [
    {
      label: 'Total',
      data: totalSeries,
    },

    {
      label: 'Saving',
      data: savingSeries,
    },
  ];

  const options = {
    title: 'moneyChart',
    series,
  };

  // simulate the year
  // assume not a leap year for now
  let total = 0;
  let saving = 0;

  function adjustTotal(feedItem) {
    const { amount, category } = feedItem;

    switch (category) {
      case CATEGORY.INCOME:
        total += amount;
        break;
      case CATEGORY.EXPENSE:
        total -= amount;
        break;
      case CATEGORY.SAVING:
        total -= amount;
        saving += amount;
        break;
      default:
        break;
    }
  }

  for (let ordinal = 1; ordinal < 365; ordinal += 1) {
    const moneyDate = DateTime.fromObject({ year: 2020, ordinal });

    feedByInterval.get(FREQUENCY.DAILY).forEach(adjustTotal);

    if (moneyDate.day === 1) {
      feedByInterval.get(FREQUENCY.MONTHLY).forEach(adjustTotal);
    }

    if (moneyDate.weekday === 1) {
      feedByInterval.get(FREQUENCY.WEEKLY).forEach(adjustTotal);
    }

    if (moneyDate.weekday < 6) {
      feedByInterval.get(FREQUENCY.WEEKDAY).forEach(adjustTotal);
    }

    totalSeries.push([moneyDate.toISODate(), total]);
    savingSeries.push([moneyDate.toISODate(), saving]);
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

MoneyChart.propTypes = {
  className: PropTypes.string,
  feedByInterval: PropTypes.instanceOf(Map).isRequired,
};

MoneyChart.defaultProps = {
  className: '',
};

export default MoneyChart;
