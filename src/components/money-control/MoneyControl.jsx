import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { FREQUENCY, CATEGORY } from '../../utils/constants';

const MoneyControl = ({ className, addFeedItem }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORY.INCOME);
  const [interval, setInterval] = useState(FREQUENCY.MONTHLY);

  function handleSubmit(e) {
    e.preventDefault();

    if (amount !== '') {
      addFeedItem({ amount, category, interval });

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
    <Form onSubmit={handleSubmit} className={className}>
      <InputGroup>
        <FormControl
          as="select"
          onChange={updateCategory}
          value={category}
          custom
        >
          <FormattedMessage
            id="category.heading"
            values={{ category: CATEGORY.INCOME }}
          >
            {buildOption(CATEGORY.INCOME)}
          </FormattedMessage>
          <FormattedMessage
            id="category.heading"
            values={{ category: CATEGORY.EXPENSE }}
          >
            {buildOption(CATEGORY.EXPENSE)}
          </FormattedMessage>
          <FormattedMessage
            id="category.heading"
            values={{ category: CATEGORY.SAVING }}
          >
            {buildOption(CATEGORY.SAVING)}
          </FormattedMessage>
        </FormControl>
        <FormControl
          onChange={updateAmount}
          value={amount}
          type="number"
        />
        <FormControl
          as="select"
          onChange={(event) => setInterval(event.target.value)}
          value={interval}
          custom
        >
          <FormattedMessage id="frequency.day">{buildOption(FREQUENCY.DAILY)}</FormattedMessage>
          <FormattedMessage id="frequency.week">{buildOption(FREQUENCY.WEEKLY)}</FormattedMessage>
          <FormattedMessage id="frequency.weekday">{buildOption(FREQUENCY.WEEKDAY)}</FormattedMessage>
          <FormattedMessage id="frequency.month">{buildOption(FREQUENCY.MONTHLY)}</FormattedMessage>
          <FormattedMessage id="frequency.year">{buildOption(FREQUENCY.YEARLY)}</FormattedMessage>
        </FormControl>

        <InputGroup.Append>
          <Button
            type="submit"
          >
            <FormattedMessage id="moneyControl.add" />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

MoneyControl.propTypes = {
  className: PropTypes.string.isRequired,
  addFeedItem: PropTypes.func.isRequired,
};

const StyledMoneyControl = styled(MoneyControl)`
  max-width: 50rem;
`;

export default StyledMoneyControl;
