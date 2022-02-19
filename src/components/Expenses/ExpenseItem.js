import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // const removeTask = (event) => {
	// 	const remove = props.users.filter(
	// 		(element) => element.id !== event.target.id,
	// 	)
	// 	props.onChange(remove)
	// }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        
      </div>
    </Card>
  );
}

export default ExpenseItem;
