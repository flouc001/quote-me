import React, { useState } from 'react';
import styled from 'styled-components';

const passOptionValue = (value) => value === 'true';

const MoneyControl = ({ className, addToFeed }) => {
  const [amount, setAmount] = useState(0);
  const [isIncome, setIsIncome] = useState(true);
  const [interval, setInterval] = useState('d');

  function handleSubmit() {
    addToFeed({ amount, isIncome, interval });

    setAmount(0);
  }

  return (
    <div className={className}>
      <select
        onChange={(event) => setIsIncome(passOptionValue(event.target.value))}
        value={isIncome}
      >
        <option value>Income</option>
        <option value={false}>Expense</option>
      </select>

      <input
        onChange={(event) => setAmount(+event.target.value)}
        type="number"
        value={amount}
      />

      <p>Every</p>

      <select
        onChange={(event) => setInterval(event.target.value)}
        value={interval}
      >
        <option value="d">Day</option>
        <option value="w">Week</option>
        <option value="wd">Weekday</option>
        <option value="m">Month</option>
        <option value="y">Year</option>
      </select>

      <button
        type="button"
        onClick={handleSubmit}
      >
        Add!
      </button>
    </div>
  );
};

const StyledMoneyControl = styled(MoneyControl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default StyledMoneyControl;
