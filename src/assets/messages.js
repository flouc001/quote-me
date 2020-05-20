import { CATEGORY } from '../utils/constants';

export default {
  'en-GB': {
    'topbar.title': 'Quote Me',

    'frequency.day': 'Day',
    'frequency.week': 'Week',
    'frequency.month': 'Month',
    'frequency.year': 'Year',
    'frequency.weekday': 'Weekday',

    'category.heading': `{category, select,
      ${CATEGORY.INCOME} {Income}
      ${CATEGORY.EXPENSE} {Expense}
      ${CATEGORY.SAVING} {Saving}
    }`,

    'category.income': 'Income',
    'category.expense': 'Expense',
    'category.saving': 'Saving',

    'moneyControl.add': 'Add!',
  },
};
