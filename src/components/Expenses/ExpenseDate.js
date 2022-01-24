import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' }); //биз бул жерде бизге месяцты  алып бер деп атабыз
  const day = props.date.toLocaleString('en-US', { day: '2-digit' }); //биз бул жерде бизге деньди алып бер деп атабыз
  const year = props.date.getFullYear();//биз бул жерде бизге жылды алып бер деп атабыз c помощью getFullYear

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
