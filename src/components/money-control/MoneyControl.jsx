import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { FREQUENCY, CATEGORY } from '../../utils/constants';

const MoneyControl = ({ className, addToFeed }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORY.INCOME);
  const [interval, setInterval] = useState('d');

  function handleSubmit(e) {
    e.preventDefault();

    if (amount !== '') {
      addToFeed({ amount, category, interval });

      setAmount('');
    }
  }

  function updateAmount(e) {
    const parsedValue = parseFloat(e.target.value);

    if (Number.isNaN(parsedValue)) {
      setAmount('');
      return;
    }

    setAmount(parsedValue);
  }

  function updateCategory(e) {
    const parsedFlag = Number.parseInt(e.target.value, 10);

    setCategory(parsedFlag);
  }

  const buildOption = (value) => (message) => <option value={value}>{message}</option>;

  return (
    <form onSubmit={handleSubmit} className={className}>
      <select
        onChange={updateCategory}
        value={category}
      >
        <FormattedMessage id="category.income">{buildOption(CATEGORY.INCOME)}</FormattedMessage>
        <FormattedMessage id="category.expense">{buildOption(CATEGORY.EXPENSE)}</FormattedMessage>
        <FormattedMessage id="category.saving">{buildOption(CATEGORY.SAVING)}</FormattedMessage>
      </select>

      <input
        onChange={updateAmount}
        value={amount}
        type="number"
      />

      <p>Every</p>

      <select
        onChange={(event) => setInterval(event.target.value)}
        value={interval}
      >
        <FormattedMessage id="frequency.day">{buildOption(FREQUENCY.DAILY)}</FormattedMessage>
        <FormattedMessage id="frequency.week">{buildOption(FREQUENCY.WEEKLY)}</FormattedMessage>
        <FormattedMessage id="frequency.weekday">{buildOption(FREQUENCY.WEEKDAY)}</FormattedMessage>
        <FormattedMessage id="frequency.month">{buildOption(FREQUENCY.MONTHLY)}</FormattedMessage>
        <FormattedMessage id="frequency.year">{buildOption(FREQUENCY.YEARLY)}</FormattedMessage>
      </select>

      <button type="submit">
        <FormattedMessage id="moneyControl.add" />
      </button>
    </form>
  );
};

MoneyControl.propTypes = {
  className: PropTypes.string.isRequired,
  addToFeed: PropTypes.func.isRequired,
};

const StyledMoneyControl = styled(MoneyControl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


export default StyledMoneyControl;
